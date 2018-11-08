console.log('scripts loaded');

//CREATE ANALYSIS TOOLTIP
var analysisLabel = document.getElementById('analysisLabel');
var analysisTooltip = document.getElementById('analysisTooltip');

analysisLabel.addEventListener('mouseenter', function() {
  console.log('analysisLabel hovered over');
  analysisTooltip.style.visibility = 'visible';
  var x = event.screenX; // Get the horizontal coordinate
  var y = event.screenY; // Get the vertical coorindate
  console.log(x);
  console.log(y);
  analysisTooltip.style.top = (y - 110) + 'px';
  analysisTooltip.style.left = (x - 60) + 'px';

});

analysisLabel.addEventListener('mouseleave', function() {
  console.log('analysisLabelhovered over');
  analysisTooltip.style.visibility = 'hidden';
});

//RAW DATA BY RACE/ETHNICITY IN PRIVATE INDUSTRY 2008-2016 DATA TABLE
$('#rawDataTable').DataTable({
  "ajax": "/js/EEO-1.txt",
  "columns": [{
      "data": "Cohort"
    },
    {
      "data": "2008"
    },
    {
      "data": "2009"
    },
    {
      "data": "2010"
    },
    {
      "data": "2011"
    },
    {
      "data": "2012"
    },
    {
      "data": "2013"
    },
    {
      "data": "2014"
    },
    {
      "data": "2015"
    },
    {
      "data": "2016"
    }
  ],
  "order": [
    [0, "desc"]
  ]
}); //close rawDataTable

//PERCENTAGE DATA BY RACE/ETHNICITY IN PRIVATE INDUSTRY 2008-2016 DATA TABLE
$('#percDataTable').DataTable({
  "ajax": "/js/EEO-1Perc.txt",
  "columns": [{
      "data": "Cohort"
    },
    {
      "data": "2008"
    },
    {
      "data": "2009"
    },
    {
      "data": "2010"
    },
    {
      "data": "2011"
    },
    {
      "data": "2012"
    },
    {
      "data": "2013"
    },
    {
      "data": "2014"
    },
    {
      "data": "2015"
    },
    {
      "data": "2016"
    }
  ],
  "order": [
    [0, "desc"]
  ]
}); //close percDataTable

// PROFESSIONAL VS EXECUTIVE REPRESENTATION BY RACE/ETHNICITY 2008-2016
var Wdata = [];
var xAxis = [];
var WpercExec = [];
var WpercProf = [];

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: Wdata,
  url: 'js/white.json',
  async: true,
  success: function(Wdata) {
    console.log('Wdata');
    for (i = 0; i < Wdata.length; i++) {
      xAxis.push(Wdata[i].Year);
      WpercExec.push(Wdata[i].Executives);
      WpercProf.push(Wdata[i].Professionals);
    }
    buildWhiteLineGraph();
  } //end of success
}); //end of ajax call

function buildWhiteLineGraph() {
  var myChart = Highcharts.chart('whiteLineGraph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'White Professional vs Executive Representation 2008-2016'
    },
    subtitle: {
      text: 'Source: U.S. Equal Employment Opportunity Commission 2008-2016 Job Patterns for Minorities and Women in Private Industry (EEO-1)'
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: '% Executives',
      data: WpercExec
    }, {
      name: '% Professionals',
      data: WpercProf
    }]
  });
} //close buildWhiteLineGraph

var Hdata = [];
var HpercExec = [];
var HpercProf = [];

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: Wdata,
  url: 'js/hispanic.json',
  async: true,
  success: function(Hdata) {
    console.log('Hdata');
    for (i = 0; i < Hdata.length; i++) {
      xAxis.push(Hdata[i].Year);
      HpercExec.push(Hdata[i].Executives);
      HpercProf.push(Hdata[i].Professionals);
    }
    buildHispanicLineGraph();
  } //end of success
}); //end of ajax call

function buildHispanicLineGraph() {
  var myChart = Highcharts.chart('hispanicLineGraph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Hispanic Professional vs Executive Representation 2008-2016'
    },
    subtitle: {
      text: 'Source: U.S. Equal Employment Opportunity Commission 2008-2016 Job Patterns for Minorities and Women in Private Industry (EEO-1)'
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: '% Executives',
      data: HpercExec
    }, {
      name: '% Professionals',
      data: HpercProf
    }]
  });
} //close buildHispanicLineGraph

var Bdata = [];
var BpercExec = [];
var BpercProf = [];

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: Wdata,
  url: 'js/black.json',
  async: true,
  success: function(Bdata) {
    console.log('Bdata');
    for (i = 0; i < Bdata.length; i++) {
      xAxis.push(Bdata[i].Year);
      BpercExec.push(Bdata[i].Executives);
      BpercProf.push(Bdata[i].Professionals);
    }
    buildBlackLineGraph();
  } //end of success
}); //end of ajax call

function buildBlackLineGraph() {
  var myChart = Highcharts.chart('blackLineGraph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Black Professional vs Executive Representation 2008-2016'
    },
    subtitle: {
      text: 'Source: U.S. Equal Employment Opportunity Commission 2008-2016 Job Patterns for Minorities and Women in Private Industry (EEO-1)'
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: '% Executives',
      data: BpercExec
    }, {
      name: '% Professionals',
      data: BpercProf
    }]
  });
} //close buildBlackLineGraph

var Adata = [];
var ApercExec = [];
var ApercProf = [];

$.ajax({
  type: 'GET',
  dataType: 'json',
  data: Wdata,
  url: 'js/asian.json',
  async: true,
  success: function(Adata) {
    console.log('Adata');
    for (i = 0; i < Adata.length; i++) {
      xAxis.push(Adata[i].Year);
      ApercExec.push(Adata[i].Executives);
      ApercProf.push(Adata[i].Professionals);
    }
    buildAsianLineGraph();
  } //end of success
}); //end of ajax call

function buildAsianLineGraph() {
  var myChart = Highcharts.chart('asianLineGraph', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Asian Professional vs Executive Representation 2008-2016'
    },
    subtitle: {
      text: 'Source: U.S. Equal Employment Opportunity Commission 2008-2016 Job Patterns for Minorities and Women in Private Industry (EEO-1)'
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: '% Executives',
      data: ApercExec
    }, {
      name: '% Professionals',
      data: ApercProf
    }]
  });
} //close buildAsianLineGraph