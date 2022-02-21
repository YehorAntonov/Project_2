import { Request, Response } from 'express';

export class ValidationService {
    private valid: boolean;
    private req: Request;
    private res: Response;

    constructor() {
        this.req = null;
        this.res = null;
        this.valid = true;
    }

    validate() {
        if (!this.req.body) {
            this.res.status(400).end();
            this.valid = false;
        }
        if (!this.valid) this.validateDatabase();
        if (!this.valid) this.validateFullName();
        if (!this.valid) this.validateAge();
        if (!this.valid) this.validateCity();
        if (!this.valid) this.validatePhoneNumber();
        if (!this.valid) this.validateEmail();
        if (!this.valid) this.validateCompany();

        return this;
    }

    refresh(req: Request = null, res: Response = null) {
        this.valid = true;
        this.req = req;
        this.res = res;
        return this;
    }

    validateId() {
        if (!this.req.body.id || this.req.body.id === '') {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateDatabase() {
        if (!this.req.body.db) {
            this.res.status(400).end();
            this.valid = false;
        }
        const { db } = this.req.body;
        if (db !== 'mySql' && db !== 'mongoDB') {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateFullName() {
        if (!this.req.body.firstName || !this.req.body.lastName) {
            this.res.status(400).end();
            this.valid = false;
        }
        const { firstName, lastName } = this.req.body;
        const reg = /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
        if (!reg.test(firstName)  || !reg.test(lastName)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateAge() {
        if (!this.req.body.age) {
            this.req.body.age = null;
        }
        const { age } = this.req.body;
        const parsedAge = Number.parseInt(age, 10);
        if (parsedAge < 18 || parsedAge > 100) {
            this.res.status(400).end();
            this.valid = false;
        }
        this.req.body.age = parsedAge;
        return this;
    }

    validateCity() {
        if (!this.req.body.city) {
            this.req.body.city = null;
        }
        const { city } = this.req.body;
        const reg = /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
        if (!reg.test(city)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validatePhoneNumber() {
        if (!this.req.body.phoneNumber) {
            this.req.body.phoneNumber = null;
        }
        const { phoneNumber } = this.req.body;
        const reg = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if (!reg.test(phoneNumber)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateEmail() {
        if (!this.req.body.email) {
            this.req.body.email = null;
        }
        const { email } = this.req.body;
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (!reg.test(email)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateCompany() {
        if (!this.req.body.company) {
            this.req.body.company = null;
        }
        const { company } = this.req.body;
        const reg = /^([А-Я]{1}[а-яё]{2,19}$|[A-Z]{1}[a-z]{2,19})$/;
        if (!reg.test(company)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }

    validateLogin() {
        if (!this.req.body.login) {
            this.res.status(400).end();
        }

        const { login } = this.req.body;
        const reg = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

        if (!reg.test(login)) {
            this.res.status(400).end();
            this.valid = false;
        }

        return this;
    }

    validatePassword() {
        if (!this.req.body.password) {
            this.res.status(400).end();
        }

        const { password } = this.req.body;
        const reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]){8,20}$/;

        if (!reg.test(password)) {
            this.res.status(400).end();
            this.valid = false;
        }
        return this;
    }
}