import { IDob } from './dob.interface';
import { IId } from './id.interface';
import { ILocation } from './location.interface';
import { ILogin } from './login.interface';
import { IName } from './name.interfaces';
import { IPicture } from './picture.interface';
import { IRegistered } from './registered.interface';

export interface IResults {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDob;
  registered: IRegistered;
  phone: number;
  cell: number;
  id: IId;
  picture: IPicture;
  nat: string;
}
