'use strict;'


$(".ratings-buttons").hide();

$("#meeting-drop").on("change", function () {
    $(".ratings-buttons").show();
    var meeting = $(this).find('option:selected').data('id');

    $("#ratings-over-time").on("click", ratingsOverTime;


    function ratingsOverTime(evt) {
        evt.preventDefault();
        $.post('/', meeting, showRatingsTimeChart);

    }


    function showRatingsTimeChart(results) {

    }

})


