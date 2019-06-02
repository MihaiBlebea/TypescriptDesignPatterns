import IBuilder from './IBuilder'


export default class Director<T>
{
    private _builder : IBuilder<T>

    constructor(builder : IBuilder<T>)
    {
        this._builder = builder
    }

    buildCheapCar(
        brand : string, 
        name : string, 
        seats : number, 
        doors : number, 
        engine : string
    ){
        this._builder.reset()
        this._builder.buildMandatory(brand, name, seats, doors, engine)
        this._builder.addBrakes('disc/drum')
        this._builder.addColor('white')
        this._builder.addWheels(4)
        this._builder.addRadio(true)
        this._builder.addAirConditioning(false)
        this._builder.addGps(false)
        this._builder.addSunRoof(false)
        this._builder.addLaneAssist(false)
        return this._builder.getResult()
    }

    buildExpensiveCar(    
        brand : string, 
        name : string, 
        seats : number, 
        doors : number, 
        engine : string
    ){
        this._builder.reset()
        this._builder.buildMandatory(brand, name, seats, doors, engine)
        this._builder.addBrakes('disc/disc')
        this._builder.addColor('black')
        this._builder.addWheels(4)
        this._builder.addRadio(true)
        this._builder.addAirConditioning(true)
        this._builder.addGps(true)
        this._builder.addSunRoof(false)
        this._builder.addLaneAssist(true)
        return this._builder.getResult()
    }
}