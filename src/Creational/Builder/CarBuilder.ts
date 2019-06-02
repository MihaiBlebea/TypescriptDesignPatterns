import IBuilder from './IBuilder'
import Car from './Car'



export default class Builder implements IBuilder<Car>
{
    private _car : Car | null = null

    constructor()
    {
        this.reset()
    }

    reset()
    {
        this._car = null
    }

    buildMandatory(
        brand : string, 
        name : string, 
        seats : number, 
        doors : number, 
        engine : string
    ) : void {
        this._car = new Car(brand, name, seats, doors, engine)
    }

    addBrakes(brakes : string) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.brakes = brakes
    }

    addWheels(wheels : number) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.wheels = wheels
    }

    addColor(color : string) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.color = color
    }
    
    addRadio(radio : boolean) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.radio = radio
    }

    addAirConditioning(airConditioning : boolean) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.airConditioning = airConditioning
    }

    addSunRoof(sunRoof : boolean) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.sunRoof = sunRoof
    }

    addGps(gps : boolean) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.gps = gps
    }

    addLaneAssist(laneAssist : boolean) : void
    {
        if(!this._car) throw Error('Build mandatory first')
        this._car.laneAssist = laneAssist
    }

    getResult() : Car
    {
        if(!this._car) throw Error('Build mandatory first')
        return this._car
    }
}