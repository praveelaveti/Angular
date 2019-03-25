import {Component,OnInit} from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
selector:'my-reactiveform',
templateUrl:'./reactiveform.Component.html',
styleUrls:['./reactiveform.component.css']
})

export class ReactiveForm implements OnInit{
//  registerForm: FormGroup;
//     submitted = false;
//     userList:any=[];
    constructor() { }

    ngOnInit() {
        // this.registerForm = this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     email: ['', [Validators.required, Validators.email]],
        //     password: ['', [Validators.required, Validators.minLength(6)]]
        // });
       // console.log(localStorage.getItem('userList'));
        //this.userList=JSON.parse(localStorage.getItem('userList'));
    }

    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }
  //  UserClick(user){
  //    debugger;
    
  //     this.registerForm = this.formBuilder.group({
  //           firstName: [user.firstName, Validators.required],
  //           lastName: [user.lastName, Validators.required],
  //           email: [user.email,[Validators.required, Validators.email]],
  //           password: [user.password, [Validators.required, Validators.minLength(6)]]
  //       });


  //  }
    // onSubmit() {
    //     this.submitted = true;

    //     // stop here if form is invalid
    //     if (this.registerForm.invalid) {
    //         return;
    //     }
    //       this.userList.push(this.registerForm.value);
    //       //console.log(this.userList);
    //       this.registerForm.reset();
    //       this.registerForm.markAsUntouched();
    //       localStorage.setItem('userList',JSON.stringify(this.userList));
        
    //     //https://www.techiediaries.com/angular-by-example-httpclient-get/
    //    // https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/
    // }
}