var baseUrl = 'http://localhost:3000/collections/ashford';

$(document).ready(function () {

    // listen to change event (customize selector to your needs)
    // $('input[type=checkbox]').change(function (e) {
        $('#button').click(function (e) {        
        e.preventDefault();
        var filtername = $(this).attr('name'); 

        if ($(this).is(':checked')) {

            // read in value
            var queryString = $(this).val();

            // loop through siblings (customize selector to your needs)
            var s = $(this).siblings();
            $.each(s, function () {

                // see if checked
                if ($(this).is(':checked')) {

                    // append value
                    queryString += ' OR ' + $(this).val();
                }
            });

            // jump to url
            window.location = baseUrl + '/filter/?'+ filtername + "=" +queryString;
        }
    });

});