const { saudacao, dobrarNumero } = require('../src/index');

test('saudacao retorna mensagem correta', () => {
    expect(saudacao('Isadora')).toBe('Olá, Isadora! Bem-vindo ao projeto CI/CD.');
});

test('dobrarNumero dobra o valor corretamente', () => {
    expect(dobrarNumero(5)).toBe(10);
});
