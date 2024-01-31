class Ave {

    private _envergadura: number;

    constructor(envergadura: number) {
        this._envergadura = envergadura;
    }

    get envergadura(): number {
        return this._envergadura;
    }

    set envergadura(value: number) {
        this._envergadura = value;
    }
}
