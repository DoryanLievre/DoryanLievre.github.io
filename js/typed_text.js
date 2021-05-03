function randomiseDelay(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(el){
  el.addClass('cursor')
  var text = el.data('string');
  var randInt = 0;
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomiseDelay(50,150));
    var typing = setTimeout(function(y){
      el.append(text.charAt(y));
    },randInt, i);
  };
}

typeWrite($(".typeme"));