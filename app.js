function logoBarDimensions() {
    let logoBarWidth = document.querySelector('.welcome__logo-bar').getBoundingClientRect().width / 2;
    let logoBarHeight = document.querySelector('.welcome__logo-bar').getBoundingClientRect().height;
    $('.welcome__logo-bar-helper').css('width', logoBarWidth + 'px');
    $('.welcome__logo-bar-helper').css('height', logoBarHeight + 'px');
}
$(function () {
    logoBarDimensions();
});

$(window).resize(function () {
    logoBarDimensions();
});