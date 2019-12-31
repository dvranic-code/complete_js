//MODULE PATERN
var someModule = (function() {

    var x = 23;

    function add(a) {
        return x+a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


/**
 * Budget controller - independent
 */
var budgetController = (function() {

    //DATA model
    // description and value
    // type inc and exp -> maybe id
    //
    // objects model

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.precentage = -1;
    };

    Expense.prototype.calculatePrecentage = function(totalInc) {
        
        if (totalInc > 0) {
            this.precentage = Math.round((this.value / totalInc) * 100);
        } else {
            this.precentage = -1;
        } 

    }

    Expense.prototype.getPrecentege = function() {
        return this.precentage;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0,
        },
        budget: 0,
        precentage: -1,
    };

    var calculateTotal = function(type) {
        
        var sum = 0;

        data.allItems[type].forEach(function(item) {
            sum += item.value;
        });

        data.totals[type] = sum;

    }

    return {
        addItem: function(type, desc, val) {

            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            
            //ID = lastID + 1

            //Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Create new Item
            if(type === 'exp') {



                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }

            //Push it to data structure
            data.allItems[type].push(newItem);

            //Return new element
            return newItem;

        },

        deleteItem: function(type, id) {

            var ids, index;

            //[1 2 4 6 8]
            // id = 4
            // index = 2
            ids = data.allItems[type].map(function(current, key, array) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            

        },

        calcBudget: function() {

            // calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            //calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            //calculate precentage
            if(data.totals.inc > 0) {
                data.precentage = Math.round((data.totals.exp/data.totals.inc) * 100);
            } else {
                data.precentage = -1;
            }
        

        },

        getBudget: function() {
            return {
                budget: data.budget,
                income: data.totals.inc,
                expense: data.totals.exp,
                precentage: data.precentage
            }
        },

        calcPrecentage: function() {

            /**
             * a = 20
             * b = 10
             * c = 40
             * income = 100
             * a = 20/100 = 20%
             * b = 10%
             */

            data.allItems.exp.forEach(function(exp) {
                exp.calculatePrecentage(data.totals.inc);
            });

        },

        getPrecentages: function() {
            var allPrecentages = data.allItems.exp.map(function(exp) {
                return exp.getPrecentege();
            });

            return allPrecentages;
        },

        testing: function() {
            console.log(data);
        }
    };

})();


/**
 * UI controller - independent
 */
var UIcontroller = (function() {

    var DOMstrings = {
        mainBtn: '.add__btn',

        inputType: '.add__type',
        inputDesc: '.add__description',
        inputVal: '.add__value',

        incomeList: '.income__list',
        expenseList: '.expenses__list',

        budgetLable: '.budget__value',
        incomeLable: '.budget__income--value',
        expenseLable: '.budget__expenses--value',
        precentageLable: '.budget__expenses--percentage',
        expensePercLable: '.item__percentage',

        deleteBtn: '.container',

        dateLable: '.budget__title--month',

    };

    var formatNumber = function(num, type) {

        var numSplit, int, dec, sign;

        /**
         * + or - before number
         * exactly 2 decimal points
         * comma separating the thousands
         * 
         * 2310.4567 -> + 2,310.46
         * 2000 -> + 2,000.00
         */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length -3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        type === 'exp' ? sign = '-' : sign = '+';

        return sign + ' ' + int + '.' + dec + ' $';

    };

    var nodeListForEach = function(list, callback) {
        for (var i = 0; i<list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getInput: function() {
            var i =  parseFloat(document.querySelector(DOMstrings.inputVal).value);

            return {
                type: document.querySelector(DOMstrings.inputType).value, // "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: i

            };
        },

        addListItem: function(obj, type) {

            var html, newHtml, element;

            //HTML string with placeholder
            if(type === 'inc') {
                element = DOMstrings.incomeList;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expenseList;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%precent%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace placeholders with data from object
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMstrings.inputDesc + ', ' + DOMstrings.inputVal);

            //convert list to array
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(field, index, array) {
                field.value = '';
            });

            fieldsArray[0].focus();

        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLable).textContent = formatNumber(obj.budget, (obj.budget >= 0 ? 'inc' : 'exp'));
            document.querySelector(DOMstrings.incomeLable).textContent = formatNumber(obj.income, 'inc');
            document.querySelector(DOMstrings.expenseLable).textContent = formatNumber(obj.expense, 'exp');
            
            if(obj.precentage > 0) {
                document.querySelector(DOMstrings.precentageLable).textContent = obj.precentage + '%';
            } else {
                document.querySelector(DOMstrings.precentageLable).textContent = '--';
            }
        },

        displayPerc: function(perc) {

            var fields = document.querySelectorAll(DOMstrings.expensePercLable);

            nodeListForEach(fields, function(current, index) {

                if (perc[index] > 0) {
                    current.textContent = perc[index] + "%";
                } else {
                    current.textContent = '--';
                }

            });

        },

        displayMonth: function() {


            var year, month, months, now;

            // var christmas = new Date(2019, 11, 25) -> months are 0 based

            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            month = now.getMonth();

            year = now.getFullYear();

            document.querySelector(DOMstrings.dateLable). textContent = months[month] + ' ' + year;
            
        },

        changeType: function(){

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDesc + ',' +
                DOMstrings.inputVal
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.mainBtn).classList.toggle('red');

        },

        getDomStrings: function() {
            return DOMstrings;
        }
    };

})();


/**
 * App controller
 * 
 * In this controller we always tell others what to do
 * 
 */
var controller = (function(budegetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.mainBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which ===13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.deleteBtn).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)

    };

    var ctrlAddItem = function() {

        var input, newItem;
        
        // 1. GET the field input data
        input = UICtrl.getInput();       
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0 ) {

            // 2. Add the item to the budget controller
            newItem = budegetCtrl.addItem(input.type, input.description, input.value);
            

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            UICtrl.clearFields();

            //4. Calculate and update budget
            updateBudget();

            //5. Calculate and update precentagies
            updatePrecentage();

        }
        

    };

    var ctrlDeleteItem = function(event) {

        var itemID, splitID, type, ID, budget;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            
            //inc-1
            splitID = itemID.split('-');

            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. delete item from data structure
            budegetCtrl.deleteItem(type, ID);

            //2. delete item from UI
            UICtrl.deleteListItem(itemID);

            //3. update and show the new budget
            updateBudget();

            //4. Calculate and update precentagies
            updatePrecentage();
        }
        

    };

    var updateBudget = function() {

        var budget;

        // 1. Calculate the budget
        budegetCtrl.calcBudget();

        // 2. Return the budget
        budget = budegetCtrl.getBudget();

        // 3. Display the budget
        UICtrl.displayBudget(budget);

    };

    var updatePrecentage = function() {

        //1. Calculate the precentages
        budegetCtrl.calcPrecentage();

        //2. Read precentages from budget controller
        var precentages = budegetCtrl.getPrecentages();

        //3. Update UI with new precentage
        UICtrl.displayPerc(precentages);
        
    };

    return {
        init: function() {
            setupEventListeners();

            UICtrl.displayMonth();

            UICtrl.displayBudget({
                budget: 0,
                income: 0,
                expense: 0,
                precentage: -1
            });
        }
    };

})(budgetController, UIcontroller);

controller.init();