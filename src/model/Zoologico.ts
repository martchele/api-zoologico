import { Animal } from "./Animal";

class Zoologico {
    private nome: string;
    private listaAtracoes: Array<Animal>;  

    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaAtracoes = _listaAnimais;  
    }

    /** Retorna o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /** Define a lista de atrações.
     * 
     * @param _listaAnimais A lista de animais a ser atribuída às atrações.
     */
    public setListaAtracoes(_listaAnimais: Array<Animal>): void {  
        this.listaAtracoes = _listaAnimais; 
    }
}
