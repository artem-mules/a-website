window.addEventListener("load", function () {
    let bannerDescription = document.querySelector('p.banner-description.banner-description--banner');
    if (bannerDescription != undefined) {
        bannerDescription.textContent = bannerDescription.textContent.slice(0, 63).concat('...');
    }
});