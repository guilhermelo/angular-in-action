// exemplo de service que não precisa de injeção de dependencia
export class ConfigService {
    private _api: string;

    static set(property, value) {
        this['_' + property] = value;
    }

    static get(property) {
        return this['_' + property];
    }
}
