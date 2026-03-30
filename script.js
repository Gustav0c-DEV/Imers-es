// Gerenciar Dark Mode e Light Mode

document.addEventListener('DOMContentLoaded', function() {
  
  // Pegar o botão e o ícone
  const botao = document.getElementById('theme-toggle');
  const icone = document.querySelector('.theme-icon');
  const body = document.body;
  
  // Verificar se tem tema salvo
  let temaSalvo = localStorage.getItem('tema');
  
  // Se não tiver salvo, começa com light mode
  if (!temaSalvo) {
    temaSalvo = 'light';
    localStorage.setItem('tema', 'light');
  }
  
  // Aplicar o tema salvo ao carregar a página
  if (temaSalvo === 'dark') {
    body.classList.add('dark-mode');
    icone.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    icone.textContent = '🌙';
  }
  
  // Quando clicar no botão, alterna o tema
  botao.addEventListener('click', function() {
    // Se tá em dark mode, vai pro light mode
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      icone.textContent = '🌙';
      localStorage.setItem('tema', 'light');
    } else {
      //  Se tá em light mode, vai pro dark mode
      body.classList.add('dark-mode');
      icone.textContent = '☀️';
      localStorage.setItem('tema', 'dark');
    }
  });
  
});




