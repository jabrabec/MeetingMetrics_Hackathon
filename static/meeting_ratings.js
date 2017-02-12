'use strict;'

$("#ratings-spread").hide();
$("#ratings-over-time").hide();

$("#meeting-drop").on("change", function () {

    $("#ratings-spread").show();

    var recurring = $(this).find('option:selected').data('recurring');
    if (recurring != null) {
        $("#ratings-over-time").show();
    }

    var meeting = $(this).find('option:selected').data('id');
    $("#ratings-over-time").on("click", ratingsOverTimeCall);
    $("#ratings-spread").on("click", ratingsSpread);

    function ratingsOverTimeCall(evt) {
        evt.preventDefault();
        $("#ratings-over-time-chart").show();
        $("#rating-spread-chart").hide();
        $("#topics-chart").hide();

        $.post('/recurring_ratings.json', meeting, ratingsOverTime);

    }


    // function showRatingsTimeChart(results) {
    //     // from backend, return ratings for recurring meetings over time
    // }


    function ratingsSpread(evt) {
        evt.preventDefault();
        $("#rating-spread-chart").show();
        $("#topics-chart").hide();
        $("#ratings-over-time-chart").hide();

        $.post('/ratings.json', meeting, showRatingsSpreadChart);

    }

    function showRatingsSpreadChart(results) {
        // from backend, return # of each type of rating for given meeting
    }


})

$("#topic-ratings").on("click", topicTime);

function topicTime(evt) {
    evt.preventDefault();
    $("#topics-chart").show();
    $("#rating-spread-chart").hide();
    $("#ratings-over-time-chart").hide();

    $.get('/topics.json', showTopicTime);

}

// function showTopicTime(results) {
//     // from backend, return time spent on each topic (and ratings for each topic)
// }



