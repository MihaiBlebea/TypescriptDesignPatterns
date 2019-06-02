export default interface IBuilder<T>
{
    reset() : void

    buildMandatory(
        brand : string, 
        name : string, 
        seats : number, 
        doors : number, 
        engine : string
    ) : void

    addBrakes(brakes : string) : void

    addWheels(wheels : number) : void

    addColor(color : string) : void
    
    addRadio(radio : boolean) : void

    addAirConditioning(airConditioning : boolean) : void

    addSunRoof(sunRoof : boolean) : void

    addGps(gps : boolean) : void

    addLaneAssist(laneAssist : boolean) : void

    getResult() : T
}