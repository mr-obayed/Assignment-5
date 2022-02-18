// Taking input values from user 
var inputIncome = document.getElementById("income-input");
var inputexpenseOne  = document.getElementById("food-input");
var inputexpenseTwo  = document.getElementById("rent-input");
var inputexpenseThree = document.getElementById("cloth-input");
var inputSaving = document.getElementById("saved-input");


// Start calculation function
function calculateExpense(){
    // Taking string values 
    let strIncomeInput = inputIncome.value;
    let strinputexpenseOne = inputexpenseOne.value;
    let strinputexpenseTwo = inputexpenseTwo.value;
    let strinputexpenseThree = inputexpenseThree.value;

    // Converting string values to integer
    let totalIncome = parseInt(strIncomeInput);
    let expenseOne  = parseInt(strinputexpenseOne);
    let expenseTwo  = parseInt(strinputexpenseTwo);
    let expenseThree = parseInt(strinputexpenseThree);

    // Calculation with error handling
    if (isNaN(totalIncome)){
        document.getElementById("alertText").innerText = "Income field can't be empty or text";
        document.getElementById("alerts").classList.add("show");

    } else if((totalIncome || expenseOne || expenseTwo || expenseThree) < 0){
        document.getElementById("alertText").innerText = "Negetive values are not aceepted";
        document.getElementById("alerts").classList.add("show");

    } else {
       var totalExpense = expenseOne + expenseTwo + expenseThree;
       document.getElementById("alerts").classList.remove("show");

       document.getElementById("expenses").innerText = totalExpense;
       document.getElementById("balance").innerText = totalIncome - totalExpense;

    // Return total expense
       return totalExpense;
    }
}
// End of calculation



// Start svaing calculation
function calculateSaving(){
    // Taking string values 
    let strinputSaving = inputSaving.value;
    let strIncomeInput = inputIncome.value;

    
    // Converting string values to integer
    let finalSaving = parseInt(strinputSaving);
    let totalIncome = parseInt(strIncomeInput);

    
    // Saving calculation with error handling
    if (isNaN(finalSaving || totalIncome)) {
        document.getElementById("alertText").innerText = "Income or save field can't be empty or text";
        document.getElementById("alerts").classList.add("show");

    } else if((finalSaving || totalIncome) < 0){
        document.getElementById("alertText").innerText = "Income or save field can't be negetive";
        document.getElementById("alerts").classList.add("show");

    } else {
        let totalSaving = (totalIncome * finalSaving) / 100;

        let totalExpense = calculateExpense();

        if (!isNaN(totalExpense)){
            document.getElementById("saved-balance").innerText = totalSaving;
            document.getElementById("remaining-balance").innerText = totalIncome - (totalExpense + totalSaving);
            document.getElementById("alerts").classList.remove("show");

        } else {
            document.getElementById("expenses").innerText = 0;
            document.getElementById("balance").innerText = 0;
            document.getElementById("saved-balance").innerText = totalSaving;
            document.getElementById("remaining-balance").innerText = totalIncome - totalSaving;
            document.getElementById("alerts").classList.remove("show");
        }
    }
}

// End of svaing calculation

// Calculate button
document.getElementById("calc-button").addEventListener("click", function () {
    calculateExpense();
});

// Saving button
document.getElementById("saving-button").addEventListener("click", function () {
    calculateSaving();
});

// Error alert close button
document.getElementById("btn-close").addEventListener("click", function () {
    document.getElementById("alerts").classList.remove("show");
});