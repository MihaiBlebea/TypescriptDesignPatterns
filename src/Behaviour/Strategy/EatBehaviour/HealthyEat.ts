import IEatBehaviour from './IEatBehaviour'

export default class HealthyEat implements IEatBehaviour
{
    private _protein : number

    private _carbs : number

    private _fat : number


    constructor(protein : number, carbs : number, fat : number)
    {
        this._protein = protein
        this._carbs   = carbs
        this._fat     = fat
    }

    eat() : void
    {
        console.log(`I eat healthy. ${ this._protein }g of protein, ${ this._carbs }g of carbs and ${ this._fat }g of fat`)
    }
}