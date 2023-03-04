import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnInit {
  @Input() studentData:any;
  users:any;

  constructor(private api:ApiService){}


  ngOnInit(): void {
  //   this.api.get("https://63c8e515904f040a965210a5.mockapi.io/api/v1/aniket").subscribe((result:any)=>{
  //   this.users = result;

  // });



}
}
