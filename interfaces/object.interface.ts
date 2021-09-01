import { IResults } from './result.interfaces';

export interface IObject {
  results: IResults[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: number;
  };
}
