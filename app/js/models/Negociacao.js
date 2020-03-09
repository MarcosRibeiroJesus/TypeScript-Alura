class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        if (!_data)
            throw new Error('Data deve ser preenchida!');
        if (!_quantidade)
            throw new Error('Quantidade deve ser preenchida!');
        if (!_valor)
            throw new Error('Valor deve ser preenchido!');
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
