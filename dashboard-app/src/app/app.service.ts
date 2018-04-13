import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable, Observer } from 'rxjs/Rx';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';

@Injectable()
export class AppService {
  public showSpringDetails = false;
  public cases = [];
  public selectedIndex = 0;
  public id: any;
  public selectedCaseIndex = -1;

  constructor(private http: HttpClient){

  }
  getSpringDetail() {
    return this.http.get('assets/json/spring-details.json');
  }
  addingCase(data: any) {
    let k = 1;
    let c: any;
    this.cases.forEach( item => {
      if (item.id === data.id) {
        k = 0;
      }
    });
    if (k) {
      this.cases.push(data);
      this.selectedIndex = this.selectedCaseIndex + 1;
      this.selectedCaseIndex = this.cases.length - 1;
    }
    if (k === 0) {
      for (let z = 0; z < this.cases.length; z++ ) {
        if ( data.id === this.cases[z].id) {
          c = z;
          this.selectedIndex = this.selectedIndex + 1;

        }
      }
      this.selectedCaseIndex = c;
    }
  }
  handleClose(event: any) {
    this.id = event.id;
    this.cases.forEach(item => {
      if(item.id === this.cases[event.index - 1 ].id) {
        this.cases.splice(event.index - 1 , 1);
        this.selectedIndex = 0;
        this.selectedCaseIndex = null;
      }
    });
  }
  handleChange(event: any) {
    this.selectedIndex = event.index;
    if ( this.selectedIndex === 0 ) {
      this.selectedCaseIndex = null;
    } else {
      this.selectedCaseIndex = event.index - 1;
    }
  }
}
