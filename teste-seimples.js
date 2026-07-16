const assert = require('assert');

console.log("Iniciando testes automatizados da Pokédex...\n");

try {
    // Teste 1: Matemática básica (Corrigido)
    assert.strictEqual(1 + 1, 2, "Erro: 1 + 1 deveria ser 2");
    console.log(" Teste 1 passou");

    // Teste 2: Verificando o tamanho de uma lista (Array)
    const pokemonsIniciais = ['Bulbasaur', 'Charmander', 'Squirtle'];
    assert.strictEqual(pokemonsIniciais.length, 3, "Erro: A lista deveria ter 3 Pokémon");
    console.log(" Teste 2 passou:");

    // Teste 3: Verificando uma propriedade de um objeto (String)
    const pikachu = { nome: 'Pikachu', tipo: 'Elétrico' };
    assert.strictEqual(pikachu.tipo, 'Elétrico', "Erro: O tipo do Pikachu deveria ser Elétrico");
    console.log(" Teste 3 passou");

    console.log(" Todos os testes aprovados");
    process.exit(0); 

} catch (error) {
    console.error(" O teste falhou");
    console.error(`Detalhe do erro: ${error.message}`);
    process.exit(1); 
}
