const assert = require('assert');

console.log("Iniciando testes automatizados da Pokédex...");

try {
    // Teste 1: Matemática básica (simulando uma regra de negócio)
    assert.strictEqual(1 + 1, 2);
    console.log("✅ Teste 1 passou: A lógica matemática está correta!");

    // Teste 2: Simulação de dados
    const pokemon = "Pikachu";
    assert.strictEqual(typeof pokemon, "string");
    console.log("✅ Teste 2 passou: O dado recebido tem o formato correto!");

    console.log("🚀 Todos os testes passaram com sucesso!");
    process.exit(0); // O código 0 avisa o GitHub que o teste passou
} catch (error) {
    console.error("❌ O teste falhou. Bug encontrado!");
    console.error(error);
    process.exit(1); // O código 1 avisa o GitHub para reprovar e ficar vermelho
}
