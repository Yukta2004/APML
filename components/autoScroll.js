
let scrollerId;
let paused = true;
let speed = 1;
let interval = speed*5;


   export default  function startScroll(){
    let id = setInterval(function(){
      window.scrollBy(0,2);
      if (window.innerHeight + window.scrollY ==document.body.offsetHeight) {
        stopScroll();
      } else {
        
      }
    },interval);
    return id;
  }

  function stopScroll() {
    clearInterval()
  }


  document.body.addEventListener('keypress',function(event){
    if (event.which == 32 || event.keyCode == 32) {
      //It's the enter key
      if (paused == true ){
  scrollerId=  startScroll();
       paused = false;
       } else {
      stopScroll();
      paused = true;
    }
 } 
})