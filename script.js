window.onload = function(){

  const logo = document.querySelector('.img-logo');
  logo.classList.add('blink');

  const botoes = document.querySelectorAll('.btn-animado');

  botoes.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('show');
    }, index * 300);
  });

}
