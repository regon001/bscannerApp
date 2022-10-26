import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private objectSource = new BehaviorSubject<'Observable any non-nullish value'>('Observable any non-nullish value');
  // eslint-disable-next-line @typescript-eslint/member-ordering
  $getObjectSource = this.objectSource.asObservable();
  constructor() { }

sendObjectSource(data: any){
  this.objectSource.next(data);
}

}
