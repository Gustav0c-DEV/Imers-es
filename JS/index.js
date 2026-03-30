document.addEventListener('DOMContentLoaded', () => {
  const usuarios = document.querySelectorAll('.usuario');

  usuarios.forEach(usuario => {
    usuario.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Pegar a imagem e o nome do usuário
      const img = usuario.querySelector('img');
      const nome = usuario.querySelector('figcaption');

      if (img && nome) {
        // Salvar no localStorage
        localStorage.setItem('perfilAtivoImagem', img.src);
        localStorage.setItem('perfilAtivoNome', nome.textContent);
        
        // Redirecionar para catalogo
        window.location.href = 'catalogo/catalogo.html';
      }
    });
  });
});
