//phn and case amounts for plus minus button
function addedToCartAmount(itemsId, isIncrease, amount, placeId) {
    
    const item = document.getElementById(itemsId);
    const itemValueString = item.value;
    const itemValue = parseInt(itemValueString);
  //  console.log(itemValue);
    let items;


    if (isIncrease === true) {
        items = itemValue + 1;
    }
        
    else {
        items = itemValue - 1;
    }

    if (items >= 0) {
        // setAmount(items);
        item.value = items;
        // return items;
        const placeField = document.getElementById(placeId);
        const total = items * amount;
        placeField.innerText = total;
        return total;
    }
}

//get value from textfield

function getValueById(textId) {

    const textValue = document.getElementById(textId);
    const textValueString = textValue.innerText;
    const value = parseInt(textValueString);
    return value;
    
}

// set value to textfield

function setValueById(textId , value)
{
    const textValue = document.getElementById(textId);
    textValue.innerText= value;
}

// function for subtotal , tax and total
function calc()
{
    const phnTotal = getValueById('phn-amount');
  //  console.log( 'phn total = ' ,phnTotal);
    const caseTotal = getValueById('case-amount');
  //  console.log( ' case total = ' ,caseTotal);
    const subTotal = phnTotal + caseTotal;
 //   console.log('sub total = ',subTotal);
    const taxTf = 0.07 * subTotal;
    // Foxed tax into two after dot
    const tax = taxTf.toFixed(2);
  //  console.log('tax =', tax);
    const total = subTotal + tax;
  //  console.log(' total = ', total);

    //set these to the text field
    setValueById('sub-total', subTotal);
    setValueById('tax', tax);
    setValueById('total', total);

}


