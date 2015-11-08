 var southGraph = Morris.Donut({
        element : 'morris-donut-chart-south',
        data: [{
            label: "% Of Calls Not Reported On",
            value: 62.94 
        }, {
            label: "% Of Calls Reported On",
            value: 37.06
        }],
        resize: true
    });

 $document.on('load', function(event) {
    southGraph.redraw();
 });
