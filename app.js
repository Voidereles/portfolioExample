import $ from 'jquery';
import 'owl.carousel';
import 'bootstrap';
import './scripts/owlScripts.js';

// document.getElementById('#welcomeVideo').playbackRate = 0.7;
// document.querySelector('.welcome video').playbackRate = 1;
// document.getElementById('#welcomeVideo').play();
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