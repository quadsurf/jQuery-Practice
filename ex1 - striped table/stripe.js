// Append and then add event handlerdelay

$(document).ready(function(){
  var newColor, property, value;
  $(".changeStripe").on("submit", function(e){
    e.preventDefault();
    newColor = $(".newColor").val();
    $("tr:even > td").css("background",newColor);
    $(".newColor").val(""); 
    property = $(".property").val();
    value = $(".value").val();
    if (property && value) {
      $("tr:odd > td").css(property,value);
    }
  });
});