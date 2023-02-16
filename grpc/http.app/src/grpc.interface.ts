import { Observable } from 'rxjs'

export interface IGrpcService {
  accumulate(numberArray: INumArray): Observable<any>
}

interface INumArray {
  data: number[]
}