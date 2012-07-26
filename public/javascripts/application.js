$(document).ready(function() {
  var brd = JXG.JSXGraph.initBoard('jxgbox',{boundingbox: [0, 5, 7, -1], axis: true});

  var c2 = brd.create('functiongraph', [
  						function(x){return (Math.sqrt(0.5*x));}
  						], {strokeColor: 'orange', highlightStrokeColor: 'orange'});
  var r2 = brd.create('glider', [1, 0, c2], {name:'',fillColor:'orange',strokeColor:'orange',size:6, face: 'diamond'});

  var c3 = brd.create('functiongraph', [
  						function(x){return (Math.sqrt(x));}
  						], {strokeColor: 'blue', highlightStrokeColor: 'blue'});
  var r3 = brd.create('glider', [1.5, 1, c3], {name:'',fillColor:'blue',strokeColor:'blue',size:6, face: 'diamond'});

  var c4 = brd.create('functiongraph', [
  						function(x){return (Math.sqrt(1.5*x));}
  						], {strokeColor: 'green', highlightStrokeColor: 'green'});
  var r4 = brd.create('glider', [2, 1, c4], {name:'',fillColor:'green',strokeColor:'green', size:6, face: 'diamond'});

  var p1 = brd.create('point', [1.5, 0.8], {fixed: true, name: '', style:6, fillColor: 'orange', strokeColor:'orange'});
  var p2 = brd.create('point', [1, 1.0], {fixed: true, name: '', style:6, fillColor: 'blue', strokeColor:'blue'});
  var p3 = brd.create('point', [3.0, 2.1], {fixed: true, name: '', style:6, fillColor: 'green', strokeColor:'green'});

});