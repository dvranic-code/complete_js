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

    var Expense = function(id, description, value, prec = '--') {
        this.id = id;
        this.description = description;
        this.value = value;
        this.precentage = prec;
    };

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
            //[1 2 4 6 8], next ID = 9
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

        deleteBtn: '.container',

    };

    return {
        getInput: function() {
            var i =  parseFloat(document.querySelector(DOMstrings.inputVal).value).toFixed(2);

            return {
                type: document.querySelector(DOMstrings.inputType).value, // "inc" or "exp"
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: parseFloat(i)

            };
        },

        addListItem: function(obj, type) {

            var html, newHtml, element;

            //HTML string with placeholder
            if(type === 'inc') {
                element = DOMstrings.incomeList;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value% $</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expenseList;

                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value% $</div><div class="item__percentage">%precent%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace placeholders with data from object
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

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
            document.querySelector(DOMstrings.budgetLable).textContent = parseFloat(obj.budget).toFixed(2) + '$';
            document.querySelector(DOMstrings.incomeLable).textContent = parseFloat(obj.income).toFixed(2) + '$';
            document.querySelector(DOMstrings.expenseLable).textContent = parseFloat(obj.expense).toFixed(2) + '$';
            
            if(obj.precentage > 0) {
                document.querySelector(DOMstrings.precentageLable).textContent = obj.precentage + '%';
            } else {
                document.querySelector(DOMstrings.precentageLable).textContent = '--';
            }
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

    var DOM = UICtrl.getDomStrings();

    var setupEventListeners = function() {

        document.querySelector(DOM.mainBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which ===13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.deleteBtn).addEventListener('click', ctrlDeleteItem);

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

        }
        

    };

    var ctrlDeleteItem = function(event) {

        var itemID, splitID, type, id;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            
            //inc-1
            splitID = itemID.split('-');

            type = splitID[0];
            id = splitID[1];

            //1. delete item from data structure

            //2. delete item from UI

            //3. update and show the new budget
            
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

    return {
        init: function() {
            setupEventListeners();

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