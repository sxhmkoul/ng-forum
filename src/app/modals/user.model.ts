export class User {
    constructor(
        public email: string,
        public userId: string,
        private _token: string,
        private _expiredIn: number
    ) {}

    get getToken() {
        const date = new Date;
        if(date.getTime() < this._expiredIn){
            console.log('valid token time', date.getTime(), this._expiredIn);
            return this._token;
        }
        return null;
    }
}