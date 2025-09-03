document.getElementById('submit-btn').addEventListener('click', function() {
    // Você pode coletar os valores dos campos de texto aqui
    const resposta1 = document.getElementById('q1').value;
    const resposta2 = document.getElementById('q2').value;
    const resposta3 = document.getElementById('q3').value;

    if (resposta1 || resposta2 || resposta3) {
        alert('Obrigado por suas respostas! Sua opinião é muito importante.');
    } else {
        alert('Por favor, preencha pelo menos uma das respostas antes de enviar.');
    }
});