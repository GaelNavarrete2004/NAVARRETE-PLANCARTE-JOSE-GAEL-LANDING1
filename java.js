//FUNCION PARA QUE CAMBIE DE MODO A CLARO
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});



//FUNCION PARA CAMBIAR EL ICONO DE LUNA A SOLECITO Y VICEVERSA
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
            toggleButton.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            toggleButton.textContent = '🌙';
            toggleButton.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    });
});

  
//ANIMACION CUANDO VAYAN APARECIENDO LOS DIVS
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });
  
  document.querySelectorAll('.bg-custom, .bg-custom2').forEach(el => {
    observer.observe(el);
});
  