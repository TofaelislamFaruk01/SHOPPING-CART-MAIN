

// phone items calc for minus button

document.getElementById('phn-minus').addEventListener('click', function () {
    // console.log(46);
    addedToCartAmount('phn-value', false, 1219, 'phn-amount');
    calc();
})

// phone items calc for plus button

document.getElementById('phn-plus').addEventListener('click', function () {
    // console.log(78);

    addedToCartAmount('phn-value', true, 1219, 'phn-amount');
    calc();
    
})

// case items calc for plus button 

document.getElementById('case-plus').addEventListener('click', function () {
    // console.log(78);

addedToCartAmount('case-value', true, 59, 'case-amount');
    calc();
})

// case items calc for minus button

document.getElementById('case-minus').addEventListener('click', function () {
    // console.log(46);
addedToCartAmount('case-value', false, 59, 'case-amount');
    calc();
})




