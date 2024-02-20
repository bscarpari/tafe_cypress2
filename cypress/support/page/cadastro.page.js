/* Importações */
import { faker } from "@faker-js/faker"

/* Atributos */
const {
  SELECTOR: {
    cadastro: {
      emailDeCriacao,
      criarContaErro,
      btnCadastrar,
      genero,
      nome,
      sobrenome,
      senha,
      diaNascimento,
      mesNascimento,
      anoNascimento,
      newsletter,
      optin,
      empresa,
      endereco1,
      endereco2,
      cidade,
      estado,
      cep,
      pais,
      outros,
      telefone,
      celular,
      alias,
      btnCriarConta
    }
  }
} = require("../page/elements/selector")
import { random } from "../../utils/Random"

const email = faker.internet.email()

/* Rotinas */
Cypress.Commands.add("fazerCadastro", allOptions => {
  const generos = [genero.masculino, genero.feminino]
  const dataInicial = new Date(1990, 1, 1)
  const dataFinal = new Date(2010, 12, 31)
  const data = faker.date.between({ from: dataInicial, to: dataFinal })

  cy.get(emailDeCriacao).type(email)
  cy.get(btnCadastrar).click()

  cy.get(random(generos)).click()
  cy.get(nome).type(faker.person.firstName())
  cy.get(sobrenome).type(faker.person.lastName())
  cy.get(senha).type(faker.internet.password())
  cy.get(diaNascimento).select(data.getUTCDay())
  cy.get(mesNascimento).select(data.getUTCMonth())
  cy.get(anoNascimento).select(data.getUTCFullYear().toString())
  allOptions && cy.get(newsletter).click()
  allOptions && cy.get(optin).click()

  cy.get(empresa).type(faker.company.name())
  cy.get(endereco1).type(faker.location.streetName())
  cy.get(endereco2).type(faker.location.streetName())
  cy.get(cidade).type(faker.location.city())
  cy.get(estado).select(faker.location.state())
  cy.get(cep).type(faker.number.int({ min: 10000, max: 99999 }).toString())
  cy.get(pais).select("United States")
  cy.get(outros).type(faker.lorem.paragraph())
  cy.get(telefone).type(faker.phone.number().replace(/\D/g, ""))
  cy.get(celular).type(faker.phone.number().replace(/\D/g, ""))
  cy.get(alias).type(faker.internet.userName())

  cy.get(btnCriarConta).click()
})

Cypress.Commands.add("fazerCadastroInvalido", () => {
  cy.get(emailDeCriacao).type(email)
  cy.get(btnCadastrar).click()
  cy.get(criarContaErro).should(
    "contain",
    "An account using this email address has already been registered. Please enter a valid password or request a new one."
  )
})
