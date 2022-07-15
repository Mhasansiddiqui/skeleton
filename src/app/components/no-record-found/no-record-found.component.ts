import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-record-found',
  templateUrl: './no-record-found.component.html',
  styleUrls: ['./no-record-found.component.scss']
})
export class NoRecordFoundComponent implements OnInit {

   @Input() errorMessage : string  ;
   @Input() infoMessage : string  ;
   @Input() noRecordMessage : string  ;
  constructor() { }

  ngOnInit(): void {
  }

}
