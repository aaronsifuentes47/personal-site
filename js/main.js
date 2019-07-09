"use strict";

$(document).ready(function(){

    $('#headText')
        .hide()
        .fadeIn(1000);
    $("#headSpan")
        .delay(2000)
        .css('opacity', 0)
        .slideDown('slow')
        .animate(
            {opacity: 1},
            {duration: 1000}
        );

    $('#myPic')
        .hide()
        .delay(2000)
        .fadeIn(1000);

});