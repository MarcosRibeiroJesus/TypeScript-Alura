import { NegociacoesView, MensagemView } from "../views/index"
import { Negociacao, Negociacoes } from "../models/index"
import { domInject } from "../helpers/decorators/domInject"

export class NegociacaoController {

  @domInject('#data')
  private _inputData: JQuery

  @domInject('#quantidade')
  private _inputQuantidade: JQuery

  @domInject('#valor')
  private _inputvalor: JQuery

  private _negociacoes = new Negociacoes()
  private _negociacoesView = new NegociacoesView('#negociacoesView', true)
  private _mensagemView = new MensagemView('#mensagemView', true)

  constructor() {
    this._negociacoesView.update(this._negociacoes)
  }

  adiciona(event: Event) {

    event.preventDefault()

    let data = new Date(this._inputData.val().replace(/-/g, ','))
    if (!this._ehDiaUtil(data)) {
      this._mensagemView.update('Negociações somente em dias úteis.')
      return
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputvalor.val())
    )

    this._negociacoes.adiciona(negociacao)

    this._negociacoesView.update(this._negociacoes)

    this._mensagemView.update('Negociação adicionada com sucesso!')
  }

  private _ehDiaUtil(data: Date) {
    return data.getDay() != DiaSemana.Sabado && data.getDay() != DiaSemana.Domingo
  }
}

enum DiaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}