import { Injectable } from '@angular/core';
import { UserModel } from '@app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  public user : UserModel = null;
  constructor() { }
}
