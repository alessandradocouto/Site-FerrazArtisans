var $btnMenu = document.querySelector('.toggle');
var nav = document.querySelector('.navbar');

$btnMenu.onclick = function(event) {
  nav.classList.toggle('menu-nav');
  const active = nav.classList.contains('menu-nav');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active){
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu'); 
  }
  else{
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}