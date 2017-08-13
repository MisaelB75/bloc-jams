var animatePoints = function() {
var points = document.getElementsByClassName('point');
var revealPoint = function(pnt) {
  points[pnt].style.opacity = 1;
  points[pnt].style.transform = "scaleX(1) translateY(0)";
  points[pnt].style.msTransform = "scaleX(1) translateY(0)";
  points[pnt].style.WebkitTransform = "scaleX(1) translateY(0)";
  }

for (var i=0; i < points.length; i++){
  revealPoint(i);
  }
};
