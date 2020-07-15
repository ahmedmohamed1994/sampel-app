import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalRxjsService {

  public behaviorSubject = new BehaviorSubject<boolean>(false);
  private subject = new Subject<any>();


  constructor() { }

    // Behavior Subject
  getBehaviorSubject(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }
  
  // subject
  sendSubject(data: any) {
    this.subject.next({ data: data });
}

clearSubject() {
    this.subject.next();
}

getSubject(): Observable<any> {
    return this.subject.asObservable();
}
}
