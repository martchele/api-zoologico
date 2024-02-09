import { Animal } from "./Animal";

class Atracao {
    private nome: string;
    private listaAnimais: Array<Animal>; 

    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /** Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /** Define a lista de animais.
     * 
     * @param _listaAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void {
        this.listaAnimais = _listaAnimais;
    }
}
