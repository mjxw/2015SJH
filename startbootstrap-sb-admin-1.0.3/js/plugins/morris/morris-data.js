// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2008',
            East: 5258,
            North: 11338,
            South: 5975,
            Southwest: 3211,
            West: 10449
        }, {
            period: '2009',
            East: 5560,
            North: 12030,
            South: 5799,
            Southwest: 3860,
            West: 11759
        }, {
            period: '2010',
            East: 5292,
            North: 11470,
            South: 5834,
            Southwest: 3703,
            West: 10266
        }, {
            period: '2011',
            East: 5170,
            North: 11707,
            South: 5436,
            Southwest: 3572,
            West: 9328
        }, {
            period: '2012',
            East: 5101,
            North: 11026,
            South: 5338,
            Southwest: 3545,
            West: 9484
        }, {
            period: '2013',
            East: 5293,
            North: 11394,
            South: 5596,
            Southwest: 3483,
            West: 9611
        }, {
            period: '2014',
            East: 1966,
            North: 4085,
            South: 2151,
            Southwest: 964,
            West: 3329
        }],

        xkey: 'period',
        ykeys: ['East', 'North', 'South', 'Southwest', 'West'],
        labels: ['East', 'North', 'South', 'Southwest', 'West'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "% Of Calls Not Reported On",
            value: 62.4  
        }, {
            label: "% Of Calls Reported On",
            value: 37.6
        }],
        resize: true
    });


    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2008',
            visits: 802
        }, {
            d: '2009',
            visits: 783
        }, {
            d: '2010',
            visits: 820
        }, {
            d: '2011',
            visits: 839
        }, {
            d: '2012',
            visits: 792
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'iPhone',
            geekbench: 136
        }, {
            device: 'iPhone 3G',
            geekbench: 137
        }, {
            device: 'iPhone 3GS',
            geekbench: 275
        }, {
            device: 'iPhone 4',
            geekbench: 380
        }, {
            device: 'iPhone 4S',
            geekbench: 655
        }, {
            device: 'iPhone 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
