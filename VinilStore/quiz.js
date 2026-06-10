document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura os gêneros selecionados
    const checkedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked'))
                               .map(cb => cb.value);
    
    // Salva no LocalStorage para a página principal poder ler
    localStorage.setItem('vinil_store_pref', JSON.stringify(checkedGenres));
    
    // Redireciona para a página principal (Catálogo)
    window.location.href = 'index.html';
});