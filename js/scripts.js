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

//EXECUTIVE PERCENTAGES BY RACE/ETHNICITY IN PRIVATE INDUSTRY 2008-2016 DATA TABLE
$('#execDataTable').DataTable({
  ajax: {
    url: '/js/EEO-1.json',
    dataSrc: ''
  },
  columns: [{
      "data": "Executives Race/Ethnicity"
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
  ]
}); //close DataTables