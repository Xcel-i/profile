function $(sel){
  return document.querySelector(sel);
}

window.addEventListener("load", ()=>{
  window.setInterval(()=>{
    $("#date").innerHTML = new Date();
  }, 1000);
});