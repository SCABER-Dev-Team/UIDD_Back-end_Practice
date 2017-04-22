$('.ajax > .btn-submit').click(function() {
    /* Send value and print */
    $.get('ajax.njs', {
        id: $('.ajax-id').val()
    }).done(function(data) {
        $('.ajax-result').html(data);
    });
});