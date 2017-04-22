$('.ajax > .btn-submit').click(function() {
    /* Read input value */
    var queryID = $('.ajax-id').val();

    /* Send value and print */
    $.get('ajax.njs', {
        id: queryID
    }, function(data) {
        $('.ajax-result').html(data);
    });
});