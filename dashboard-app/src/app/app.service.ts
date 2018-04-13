import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, Observer } from 'rxjs/Rx';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';

@Injectable()
export class AppService {
  public showSpringDetails = false;
  constructor(private http: HttpClient){

  }
  getSpringDetail() {
    return this.http.get('assets/json/spring-details.json');
  }
}
