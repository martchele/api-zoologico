
class Reptil {
    private _raptil: number;

    constructor(raptil: number) {
        this._raptil = raptil;
    }

    get raptil(): number {
        return this._raptil;
    }

    set raptil(value: number) {
        this._raptil = value;
    }
}
