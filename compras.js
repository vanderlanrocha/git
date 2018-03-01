let itens = [
    {
        nome: 'calças',
        preco: 8,
        quantidade: 2


    },
    {
        nome: 'meias',
        preco: 7,
        quantidade: 30
    },

    {
        nome: 'tenis',
        preco: 79,
        quantidade: 30
    },
    {
        nome: 'camisa',
        preco: 28,
        quantidade: 30
    },
    {
        nome: 'carro',
        preco: 32,
        quantidade: 49
    },
    {
        nome: 'sorvete',
        preco: 32,
        quantidade: 49
    },




];
let total= 0;

for ( let item of itens) {
        total = total + item.preco * item.quantidade;
        console.log (item.nome);
      
        
}
console.log(total);
