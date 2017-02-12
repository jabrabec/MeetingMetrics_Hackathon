function showTopicTime (data) {
    var ctxRadar = $("#radar-chart");
    var optionsRadar = {
        responsive: true,
        }; //end of var optionsDonut

     // make a chart
    var radarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: data,
        options: optionsRadar,
    }); //end of var radarChart
    
} //end of showTopicTime function