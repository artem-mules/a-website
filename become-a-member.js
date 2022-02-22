window.addEventListener("load", function () {
    let allCheckboxItems = document.querySelectorAll('.cl-i__merch');

    allCheckboxItems.forEach(item => {
        currentInputName = item.querySelector('[to-copy]').getAttribute('to-copy');
        item.querySelector('input').setAttribute('value', currentInputName);
    });
});


