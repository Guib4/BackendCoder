class ProductManager {
    #code = 0;
    #description;
    #price;
    #thumbnail;
    #title;
    #stock
    constructor() {
        this.#code = [];
    }
    getProducts = () => this.#code
    addProduct = (nome, descricao, preco, imagem, codigo, estoque) => {
        this.#code = this.#code + 1;
        const produto = {
            codigo: this.#code,
            nome,
            descricao,
            preco,
            imagem,
            estoque,
            products: [],
        };
        this.codigo = this.codigo + 1
        this.code.push(produto)
    }

}

const produto = new ProductManager();
console.log(produto.getProducts());
produto.addProduct("Laranja", "Fruta", 5.00, "", 1, 10);
console.log(produto.getProducts());