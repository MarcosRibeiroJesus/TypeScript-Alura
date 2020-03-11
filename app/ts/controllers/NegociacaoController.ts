import { NegociacoesView, MensagemView } from "../views/index"
import { Negociacao, Negociacoes } from "../models/index"

export class NegociacaoController {

  private _inputData: JQuery
  private _inputQuantidade: JQuery
  private _inputvalor: JQuery
  private _negociacoes = new Negociacoes()
  private _negociacoesView = new NegociacoesView('#negociacoesView', true)
  private _mensagemView = new MensagemView('#mensagemView', true)

  constructor() {
    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputvalor = $('#valor')
    this._negociacoesView.update(this._negociacoes)
  }

  adiciona(event: Event) {

    event.preventDefault()

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputvalor.val())
    )

    this._negociacoes.adiciona(negociacao)

    this._negociacoesView.update(this._negociacoes)

    this._mensagemView.update('Negociação adicionada com sucesso!')
  }
}