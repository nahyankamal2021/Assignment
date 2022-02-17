// expense function
function allExpenses(itemsId) {
    const itemInput = document.getElementById(itemsId);
    const itemInputText = itemInput.value;
    return itemInputText;
}

// income function
function totalIncome() {
    const totalIncomeText = document.getElementById('total-income').value;
    return totalIncomeAmount = parseInt(totalIncomeText);
}

// calculate event handler
document.getElementById('calculation').addEventListener('click', function () {
    // console.log('calculate clicked');

    const foodAmount = allExpenses('food');
    // error message for food
    if (foodAmount < 0 || foodAmount > totalIncome() || isNaN(foodAmount) == true) {
        document.getElementById('food-error').style.display = 'block';
    }


    const rentAmount = allExpenses('rent');
    // error message for rent
    if (rentAmount < 0 || rentAmount > totalIncome() || isNaN(rentAmount) == true) {
        document.getElementById('rent-error').style.display = 'block';
    }


    const clothesAmount = allExpenses('clothes');
    // error message for clothes
    if (clothesAmount < 0 || clothesAmount > totalIncome() || isNaN(clothesAmount) == true) {
        document.getElementById('clothes-error').style.display = 'block';
    }

    // total expenses
    const totalExpenditure = document.getElementById('total-expenses');
    totalExpenditure.innerText = parseInt(foodAmount) + parseInt(rentAmount) + parseInt(clothesAmount);

    // error message for total expenses
    if (totalExpenditure.innerText > totalIncome()) {
        document.getElementById('total-expenses-error').style.display = 'block';
    }

    // balance
    const balance = document.getElementById('balance');
    balance.innerText = totalIncome() - parseInt(totalExpenditure.innerText);

});

document.getElementById('save').addEventListener('click', function () {
    const balanceTotal = document.getElementById('balance').innerText;

    const savingAmountField = document.getElementById('saving-amount');

    savingAmountField.innerText = (totalIncome() / 100) * parseInt(document.getElementById('saving-percentage').value);

    // error message for saving Amount
    if (parseInt(savingAmountField.innerText) > parseInt(balanceTotal)) {
        document.getElementById('saving-amount-error').style.display = 'block';
    }
    document.getElementById('remaining-balance').innerText = balanceTotal - savingAmountField.innerText;
});