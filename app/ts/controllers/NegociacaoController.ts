class NegociacaoController {
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputvalor: HTMLInputElement

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data')
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputvalor = <HTMLInputElement>document.querySelector('#valor')
    }

    adiciona(event: Event) {

        event.preventDefault()

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputvalor.value)
        )

        console.log(negociacao) 
    }
}