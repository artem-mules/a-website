window.addEventListener("load", function () {
    let customShowMoreButton = document.querySelector('#custom-next-button');
    let customPrevButton = document.querySelector('#custom-prev-button');

    setTimeout(() => {
        let webflowNextButton = document.querySelector('.w-pagination-next');
        if (webflowNextButton != undefined) {
            customShowMoreButton.style.display = 'block';
        }  else {
            customShowMoreButton.style.display = 'none';
        }



        let webflowPrevButton = document.querySelector('.w-pagination-previous');
        if (webflowPrevButton != undefined) {
            customPrevButton.style.display = 'block';
        } else {
            customPrevButton.style.display = 'none';
        }
    }, 300);

});