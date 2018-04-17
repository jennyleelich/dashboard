import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spring-details',
  templateUrl: './spring-details.component.html',
  styleUrls: ['./spring-details.component.css']
})
export class SpringDetailsComponent implements OnInit {
  @Input() data;
  details: any;
  constructor() { }

  ngOnInit() {
    this.details = this.data;
  }

}
