import {JwtFromRequestFunction} from 'passport-jwt';
interface JwtOptions {
    jwtFromRequest: JwtFromRequestFunction,
    secretOrKey: string
}

interface Payload {
    sub: string,
    role: string,
    iat: number,
    exp: number
}

interface PayloadLogin {
    sub?: number,
    role?: string,
}

export {JwtOptions, Payload, PayloadLogin};