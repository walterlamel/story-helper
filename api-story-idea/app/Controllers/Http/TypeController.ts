import Type from "App/Models/Type";

export default class TypeController {

    public async index(){
        return Type.all()
    }
}