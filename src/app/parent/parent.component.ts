import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  formdata:any;
  users:any;
  student:any;
  studentData:any = [];

  constructor(private api:ApiService, private http:HttpClient){}

  ngOnInit(): void {
    this.formdata= new FormGroup({
      name : new FormControl(""),
      email : new FormControl("",Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
      mob : new FormControl("",Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      college : new FormControl(""),

    })


  }
  Submit(data:any){
    // this.api.get("https://63c8e515904f040a965210a5.mockapi.io/api/v1/aniket").subscribe((result:any)=>{
    //   console.log(data);
    //   alert("hello")

    // })
     alert("success")
    // console.log(data);
    this.student = data;
    this.studentData.push(this.student);
    console.log(this.studentData);

    this.formdata= new FormGroup({
      name : new FormControl(""),
      email : new FormControl(""),
      mob : new FormControl(""),
      college : new FormControl(""),

    })

   localStorage.setItem("login data",JSON.stringify(this.studentData));

  }


}
