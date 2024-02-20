export const SELECTOR = {
  login: {
    linkIrParaLogin: ".login",
    email: "#email",
    senha: "#passwd",
    btnFazerLogin: "#SubmitLogin"
  },
  cadastro: {
    emailDeCriacao: "#email_create",
    criarContaErro: "#create_account_error",
    btnCadastrar: "#SubmitCreate > span",
    genero: {
      masculino: "#id_gender1",
      feminino: "#id_gender2"
    },
    nome: "#customer_firstname",
    sobrenome: "#customer_lastname",
    email: "#email",
    senha: "#passwd",
    diaNascimento: "#days",
    mesNascimento: "#months",
    anoNascimento: "#years",
    newsletter: "#newsletter",
    optin: "#optin",
    empresa: "#company",
    endereco1: "#address1",
    endereco2: "#address2",
    cidade: "#city",
    estado: "#id_state",
    cep: "#postcode",
    pais: "#id_country",
    outros: "#other",
    telefone: "#phone",
    celular: "#phone_mobile",
    alias: "#alias",
    btnCriarConta: "#submitAccount"
  },
  recuperarSenha: {
    email: "#email",
    btnRecuperarSenha: ".submit > .btn > span",
    msgmDeErro: "ol > li",
    alert: ".alert"
  },
  produto: {
    produtos: ".product-container",
    btnAdicionarAoCarrinho: "#add_to_cart",
    mensagemDeSucesso: ".layer_cart_product > .title",
    mensagemDeQuantia: ".title > .ajax_cart_product_txt",
    btnContinuar: ".continue"
  },
  carrinho: {
    carrinhoDeCompras: ".shopping_cart",
    quantidade: ".ajax_cart_quantity"
  },
  checkout: {},
  historicoPedidos: {
    historicoDePedidos: ".icon-list-ol",
    detalhesDoPedido: ".first_item > .history_link"
  }
}
