import { atom } from 'nanostores'

export interface User {
    login: string,
    password: string
}

export const $users = atom<User[]>([{login: 'testuser', password: 'testpassword'}])