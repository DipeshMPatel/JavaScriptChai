class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dipesh`
    }

    set password(value){
        this._password = value
    }
}

const dipesh = new User("dp@dipesh.ai", "abc")
console.log(dipesh.email);