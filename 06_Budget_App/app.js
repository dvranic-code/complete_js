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

})();


/**
 * UI controller - independent
 */
var UIcontroller = (function() {

})();


/**
 * App controller
 */
var controller = (function(budegetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        
        // 1. GET the field input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which ===13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIcontroller);