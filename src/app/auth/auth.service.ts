import { Injectable } from '@angular/core';

export interface IUser {
  name: string;
}

@Injectable()
export class AuthService {
  currentUser: IUser = <IUser>{};
  constructor() { }
  login(name: string) {
    this.currentUser.name = name;
  }
}
