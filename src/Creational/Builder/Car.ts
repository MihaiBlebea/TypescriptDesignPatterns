export default class Car
{
    private _brand : string

    private _name : string

    private _seats : number

    private _doors : number

    private _engine : string

    private _brakes? : string

    private _wheels? : number

    private _color? : string

    private _radio? : boolean

    private _airConditioning? : boolean

    private _sunRoof? : boolean

    private _gps? : boolean

    private _laneAssist? : boolean


    constructor(
        brand : string, 
        name : string, 
        seats : number, 
        doors : number, 
        engine : string, 
        brakes? : string, 
        wheels? : number, 
        color? : string, 
        radio? : boolean, 
        airConditioning? : boolean, 
        sunRoof? : boolean, 
        gps? : boolean,
        laneAssist? : boolean
    ) {
        this._brand           = brand
        this._name            = name
        this._seats           = seats
        this._doors           = doors
        this._engine          = engine
        this._brakes          = brakes
        this._wheels          = wheels
        this._color           = color
        this._radio           = radio
        this._airConditioning = airConditioning
        this._sunRoof         = sunRoof
        this._gps             = gps
        this._laneAssist      = laneAssist
    }

    set brakes(value : string)
    {
        this._brakes = value
    }

    set wheels(value : number)
    {
        this._wheels = value
    }

    set color(value : string)
    {
        this._color = value
    }

    set radio(value : boolean)
    {
        this._radio = value
    }

    set airConditioning(value : boolean)
    {
        this._airConditioning = value
    }

    set sunRoof(value : boolean)
    {
        this._sunRoof = value
    }

    set gps(value : boolean)
    {
        this._gps = value
    }

    set laneAssist(value : boolean)
    {
        this._laneAssist = value
    }
}