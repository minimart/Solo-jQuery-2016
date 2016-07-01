$(document).ready(function(){
  var colorCounterRed = 0;
  var colorCounterYellow = 0;
  var colorCounterGreen = 0;
  var colorCounterBlue = 0;
$('.color-button').on('click', function(event){
  var color = $(this).data('color');
  console.log(color)

  switch (color) {
    case "red":
      $('.container').append('<div class="red"></div>');
      colorCounterRed++;
      break;
    case "yellow":
      $('.container').append('<div class="yellow"></div>');
      colorCounterYellow++;
      break;
    case "green":
      $('.container').append('<div class="green"></div>');
      colorCounterGreen++
      break;
    case "blue":
      $('.container').append('<div class="blue"></div>');
      colorCounterBlue++
      break;
  };
  $('#red').html('<p id="red">Total red: ' + colorCounterRed + '</p>');
  $('#yellow').html('<p id="yellow">Total yellow: '+ colorCounterYellow + '</p>');
  $('#green').html('<p id="green">Total green: '+ colorCounterGreen + '</p>');
  $('#blue').html('<p id="blue">Total blue: '+ colorCounterBlue + '</p>');




});

});
