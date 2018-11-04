console.log('scripts loaded');

var analysis = document.getElementById('analysis');
var analysisTooltip = document.getElementById('analysisTooltip');

analysis.addEventListener('mouseenter', function() {
  console.log('Analysis hovered over');
  analysisTooltip.style.opacity = '1';
  var x = event.screenX; // Get the horizontal coordinate
  var y = event.screenY; // Get the vertical coorindate
  console.log(x);
  console.log(y);
  analysisTooltip.style.top = (y - 110) + 'px';
  analysisTooltip.style.left = (x - 80) + 'px';

});

analysis.addEventListener('mouseleave', function() {
  console.log('Analysis hovered over');
  analysisTooltip.style.opacity = '0';
});