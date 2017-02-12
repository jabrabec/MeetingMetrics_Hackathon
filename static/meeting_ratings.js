'use strict;'


$(".ratings-buttons").hide();

$("#meeting-drop").on("change", function () {

    $(".ratings-buttons").show();
    var recurring = $(this).find('option:selected').data('recurring');
    if recurring != None {
        $("#ratings-over-time").show();
    }

    var meeting = $(this).find('option:selected').data('id');
    $("#ratings-over-time").on("click", ratingsOverTime);
    $("#ratings-spread").on("click", ratingsSpread);

    function ratingsOverTime(evt) {
        evt.preventDefault();
        $.post('/', meeting, showRatingsTimeChart);

    }


    function showRatingsTimeChart(results) {
        // from backend, return ratings for recurring meetings over time
    }


    function ratingsSpread(evt) {
        evt.preventDefault();
        $.post('/', meeting, showRatingsSpreadChart);

    }

    function showRatingsSpreadChart(results) {
        // from backend, return # of each type of rating for given meeting
    }


})

$("#topic-ratings").on("click", topicRatings);

function topicRatings(evt) {
    evt.preventDefault();
    $.get('/', showTopicRatings);

}

function showTopicRatings(results) {
    // from backend, return time spent on each topic (and ratings for each topic)
}



