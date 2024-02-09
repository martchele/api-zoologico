import { Animal } from "./Animal"

class Habitat {
    private nome: string
    private listaAnimais: Array<Animal>;


    constructor(_nome: string, _listaAnimais: Array<Animal>){
        this.nome = _nome;
        this.listaAnimais = _listaAnimais;
    }

    /**Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string{
        return this.nome;
    }
    /**Define o nome do ha bitat
     * 
     * @paran _listaAnimais A lsita de animais a ser atribuida ao habitat
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void{
        this.listaAnimais = _listaAnimais;
    }
}