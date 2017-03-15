var baseUrl = 'http://localhost:3000/collections/ashford';

$(document).ready(function () {

    // listen to change event (customize selector to your needs)
    // $('input[type=checkbox]').change(function (e) {
        $('#button').click(function (e) {        
        e.preventDefault();
        url = window.location.href.split('/filter');
        // window.location = url[0]; 
        // var filtername = $('input[type=checkbox]').attr('name'); 

        // if ($('input[type=checkbox]').is(':checked')) {

        //     // read in value
        //     var queryString = $('input[type=checkbox]').val();

        //     // loop through siblings (customize selector to your needs)
        //     var s = $('input[type=checkbox]').siblings();
        //     $.each(s, function () {

        //         // see if checked
        //         if ($('input[type=checkbox]').is(':checked')) {

        //             // append value
        //             queryString += ' OR ' + $('input[type=checkbox]').val();
        //         }
        //     });

        //     // jump to url
        //     window.location = baseUrl + '/filter/?'+ filtername + "=" +queryString;
        // }
        var selectedFilter = $('input[type=checkbox]').filter(':checked');
        if (selectedFilter.length){
            selectedFilterValues = [];
            selectedFilter.each(function(){
                var currentFilter = $(this);
                selectedFilterValues.push(currentFilter.attr('name'),currentFilter.val())
            })
             
        }
        Obj = ArrToObj(selectedFilterValues);
        window.location = url[0] + "/filter?" + $.param(Obj);
        });

        $(".cb1,.cb2,.cb3").css("display", "none");
        
        $("#button-filter1").click(function(){
            var button_html = document.getElementById('button-filter1');
            if (button_html.innerHTML == 'Show More'){
                $(".cb1").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb1").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter2").click(function(){
            var button_html = document.getElementById('button-filter2');
            if (button_html.innerHTML == 'Show More'){
                $(".cb2").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb2").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    $("#button-filter3").click(function(){
            var button_html = document.getElementById('button-filter3');
            if (button_html.innerHTML == 'Show More'){
                $(".cb3").css("display", "block");
                button_html.innerHTML = 'Show Less';
            } else {
                $(".cb3").css("display", "none");
                button_html.innerHTML = 'Show More';
            } 
    });
    });



function ArrToObj(array){
  var Obj = {};
  var len = array.length;
  for (var i = 0; i < len; i+=2){
    Obj[array[i]] = array[i+1]
  }
  return Obj;
}


