$(".header-image").mouseover(function(){
  var rnd = Math.floor(Math.random()*15+1);
  var posNeg = Math.floor((Math.random()*2)-1)
  if (posNeg == 0) {
    posNeg = -1;
  }
  else{ posNeg = 1}
  rnd = rnd * posNeg;

  $(this).css({"-ms-transform": "rotate("+ rnd +"deg)", /* IE 9 */
              "-webkit-transform": "rotate("+ rnd +"deg)", /* Chrome, Safari, Opera */
              "transform": "rotate("+ rnd +"deg)"});
})
.mouseout(function(){
  $(this).css({"-ms-transform": "rotate(0deg)", /* IE 9 */
              "-webkit-transform": "rotate(0deg)", /* Chrome, Safari, Opera */
              "transform": "rotate(0deg)"});

});
