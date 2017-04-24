/* Fade-in-out loop function */
$(function() {
    var $element = $('.ajax-result');

    function fadeInOut() {
        $element.fadeIn(500, function() {
            $element.fadeOut(1000, function() {
                $element.fadeIn(1000, function() {
                    setTimeout(fadeInOut, 500);
                });
            });
        });
    }

    fadeInOut();
});

$('.ajax .btn-submit').click(function() {
    /* Set loading message */
    setTimeout(function() {
        $('.ajax-result').html('<h3>Loading...</h3>');
    }, 400);

    /* Read input value */
    var queryID = $('.ajax .form-control').val();

    /* Send value and print */
    $.get('./ajax.njs', {
        id: queryID
    }, function(data) {
        $('.ajax-result').html('<h3>Hello, ' + data + '</h2>');
        $('input[type=text]').val('');
    });
});