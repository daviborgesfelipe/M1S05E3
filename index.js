/*class define a estrutura*/
class Veiculo {
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
    

    buzinar() {
        console.log("bibi")
    };
}

let tipo_veiculo = "barco"

/*apartir new que é criado um objeto concreto apartir da class Veiculo */
const umVeiculo = new Veiculo (tipo_veiculo, 135000 + 75000, false, "3" );


console.log(umVeiculo)



// function veiculo() {
//     return {
//     nome,
//     preco,
//     emEstoque,
//     quantidade,

//     buzinar: () => {},
//     }
// }