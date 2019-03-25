import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../../service/home.service";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import{Router} from '@angular/router'

@Component({
  selector: 'app-addor-edit-provider',
  templateUrl: './addor-edit-provider.component.html',
  styleUrls: ['./addor-edit-provider.component.css']
})
export class AddorEditProviderComponent implements OnInit {
  userForm: FormGroup;        
  title: string = "Add";
  constructor(private _fb: FormBuilder,private myRouter: Router,private _userService:HomeService) { 

    this.userForm = this._fb.group({
          ID: 0,
          FirstName: ['', [Validators.required,
                      Validators.minLength(3),
                      Validators.maxLength(30)]],
          LastName: ['', [Validators.required]],
          Email: ['', [Validators.required]],
          MiddleName:['',[Validators.required]],
          Mobile:['',[Validators.required]],
          SSN:['',[Validators.required]],
          NPN:['',[Validators.required]]
        })

  }

  ngOnInit() {
  }

  save=function(){
    debugger;
    // alert("p")
    this.submitted = true;
    if(!this.userForm.valid){
        return;
    }
    // alert("pp")
    alert(this.userForm.value)
    // this._customerService.saveCustomer(this.userForm.value)
    // .subscribe(custId => {
    //     //alert('Saved Successfully!')
    //     this._router.navigate(['customers', {id: custId}]);
    //  }, error => this.errorMessage = error )
  }
  cancel=function(){
    this.myRouter.navigateByUrl('/provider');
  }
}
