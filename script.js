document.getElementById('btnSaudacao').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const resultado = `Olá, ${nome}! Bem-vindo ao projeto CI/CD.`;
    document.getElementById('resultado').textContent = resultado;
});
