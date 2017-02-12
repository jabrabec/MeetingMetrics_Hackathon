function showTopicTime (data) {
    console.log(data);
    var ctxRadar = $("#radar-chart");
    var optionsRadar = {
        responsive: false,
        }; //end of var optionsDonut

     // make a chart
    var radarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: data,
        options: optionsRadar,
    }); //end of var radarChart
    
} //end of showTopicTime function