$('.ajax > .btn-submit').click(function() {
    /* Load data */
    setTimeout(function() {
        $('.ajax-result').html('loading');
    }, 300);

    /* Send value and print */
    $.get('./js/ajax.njs', {
        id: $('.ajax-id').val()
    }).done(function(data) {
        $('.ajax-result').html(data);
    });
});