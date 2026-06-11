document.getElementById('affinity-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos valores dos inputs originais
    const nameInput = document.getElementById('user-name').value.trim();
    const emailInput = document.getElementById('user-email').value.trim();
    const frequencySelect = document.getElementById('listening-frequency').value;
    const radioStyleSelected = document.querySelector('input[name="listening-style"]:checked');
    const checkedGenres = Array.from(document.querySelectorAll('input[name="genre-pref"]:checked'))
                               .map(cb => cb.value);
    
    // Captura dos valores das 4 novas perguntas
    const radioPlayerSelected = document.querySelector('input[name="has-player"]:checked');
    const decadeSelect = document.getElementById('music-decade').value;
    const budgetSelect = document.getElementById('budget-range').value;
    const artistSuggestion = document.getElementById('artist-suggestion').value.trim();
    
    const errorBox = document.getElementById('error-message');

    // VALIDAÇÃO COMPLETA (Garante que nenhuma das 9 respostas esteja em branco) [cite: 86, 87]
    if (
        !nameInput || 
        !emailInput || 
        !frequencySelect || 
        !radioStyleSelected || 
        checkedGenres.length === 0 ||
        !radioPlayerSelected ||
        !decadeSelect ||
        !budgetSelect ||
        !artistSuggestion
    ) {
        // 1. Exibe a caixa de erro de texto no HTML 
        errorBox.style.display = 'block';
        window.scrollTo(0, 0); // Sobe a tela para o topo

        // 2. DISPARA O ALERT NATIVO (Alteração adicionada) 
        alert("⚠️ Ops! Parece que você esqueceu de responder alguma pergunta. Por favor, preencha todos os campos do formulário para podermos gerar seu catálogo!");
        
        return; // Interrompe a execução para não salvar e não mudar de página
    }

    // Se todos os campos estiverem preenchidos, esconde o aviso de erro do HTML [cite: 53]
    errorBox.style.display = 'none';

    // Salva as escolhas de gênero no LocalStorage para que o app.js organize o catálogo
    localStorage.setItem('vinil_store_pref', JSON.stringify(checkedGenres));
    
    // Feedback visual de sucesso exigido nos critérios de interação do usuário [cite: 54, 88]
    alert(`Perfeito, ${nameInput}! Suas respostas foram computadas e seu catálogo personalizado está pronto.`);

    // Redirecionamento físico definitivo para a página do catálogo
    window.location.href = 'catalogo.html';
});