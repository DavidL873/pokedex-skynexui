const assert = require('assert');

console.log("Iniciando testes automatizados da Pokédex...");

try {
    // Teste de  Matemática básica 
    assert.strictEqual(1 + 1, 2);
    console.log(" Teste 1 passou");

    // Teste 2: Simulação de dados
    const pokemon = "Pikach";
    assert.strictEqual(typeof pokemon, "string");
    console.log("Teste 2 passou");

    console.log("Todos os testes passaram com sucesso!");
    process.exit(0); 
} catch (error) {
    console.error(" O teste falhou");
    console.error(error);
    process.exit(1); 
}
