const assert = require('assert');

console.log("Iniciando testes automatizados da Pokédex...\n");

try {
    
    assert.strictEqual(1 + 1, 2, "Erro");
    console.log(" Teste 1 passou");

  
    const pokemonsIniciais = ['Bulbasaur', 'Charmander', 'Squirtle'];
    assert.strictEqual(pokemonsIniciais.length, 3, "Erro");
    console.log(" Teste 2 passou:");

    
    const pikachu = { nome: 'Pikachu', tipo: 'Elétrico' };
    assert.strictEqual(pikachu.tipo, 'Elétrico', "Erro");
    console.log(" Teste 3 passou");

    console.log(" Todos os testes aprovados");
    process.exit(0); 

} catch (error) {
    console.error(" O teste falhou");
    console.error(`Detalhe do erro: ${error.message}`);
    process.exit(1); 
}
