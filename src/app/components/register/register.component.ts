import { Inject, OnInit, EventEmitter, OnDestroy, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormControl,FormBuilder,FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 formGroup: FormGroup;
 arraycorp:any[]=[];
 myobjecttrainrs:any;
 myobjecttrainrs1:any;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  nameFormGroup1: FormGroup;
  emailFormGroup1: FormGroup;
  addressFormGroup1: FormGroup;
  formGroup1: FormGroup;
  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    //private addUser: AddUserService,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private router: Router,
    // public dialog: MatDialog
  )
  {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          corporatenameFormCtrl: ['', Validators.required],
          corporateidFormCtrl: ['', Validators.required],
          addressFormCtrl: ['', Validators.required],
         
        }),
        this._formBuilder.group({
          trainersreqFormCtrl: ['', Validators.required],
          nostudentsFormCtrl: ['', Validators.required],
          remarksFormCtrl: ['', Validators.required]
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email],
          contactFormCtrl:['', Validators.required],
          personFormCtrl: ['', Validators.required],
        }),
      ])
    });
    
    this.nameFormGroup = this._formBuilder.group({
      corporatenameFormCtrl: ['', Validators.required],
      corporateidFormCtrl: ['', Validators.required],
      addressFormCtrl: ['', Validators.required],
      
    });

    this.addressFormGroup = this._formBuilder.group({
      trainersreqFormCtrl: ['', Validators.required],
      nostudentsFormCtrl: ['', Validators.required],
      remarksFormCtrl: ['', Validators.required]
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email],
      contactFormCtrl:['', Validators.required],
      personFormCtrl: ['', Validators.required]
    });     
  
//Trainers
this.formGroup1 = this._formBuilder.group({
  formArray1: this._formBuilder.array([
    this._formBuilder.group({
      trainernameFormCtrl1: ['', Validators.required],
      expFormCtrl1: ['', Validators.required],
      skillFormCtrl1: ['', Validators.required],
     
    }),
    this._formBuilder.group({
      emailFormCtrl1: ['', Validators.email],
      contactFormCtrl1:['', Validators.required],
    }),
  ])
});

this.nameFormGroup1 = this._formBuilder.group({
  trainernameFormCtrl1: ['', Validators.required],
  expFormCtrl1: ['', Validators.required],
  skillFormCtrl1: ['', Validators.required],
  
});

this.emailFormGroup1 = this._formBuilder.group({
  emailCtrl1: ['', Validators.email],
  contactFormCtrl1:['', Validators.required],
});     

   
   
   }
 
  
arraytrainrs:any;
objecttrainrs:any;
   formsubmit(){
    
    //console.log(this.myobject);
    
  this.arraytrainrs = this.formGroup.get('formArray').value;
  console.log(this.formGroup.get('formArray').value);
  console.log(this.arraytrainrs);
  this.myobjecttrainrs = Object.assign({},...this.arraytrainrs);
  console.log(this.myobjecttrainrs);
  alert("Registered SuccessFully!! Please login");
  this.router.navigateByUrl('/login');
                        
   }

   arraytrainrs1:any;
objecttrainrs1:any;
   formsubmit1(){
    
    //console.log(this.myobject);
    
  this.arraytrainrs1 = this.formGroup1.get('formArray1').value;
  console.log(this.formGroup1.get('formArray1').value);
  console.log(this.arraytrainrs1);
  this.myobjecttrainrs1 = Object.assign({},...this.arraytrainrs1);
  console.log(this.myobjecttrainrs1);
  alert("Registered SuccessFully!! Please login");
  this.router.navigateByUrl('/login');
                        
   }
   
  

  ngOnInit(){
    
  }
  // createUser(firstname, lastname, username, phone, email, password, roleid){

  //   this.addUser.createUser(firstname, lastname, username, phone, email, password, roleid).subscribe(res => {
  //     let data = res;
  //     console.log(res);
  //     this.dialogRef.close();
  //     setTimeout(() => {
  //       if(data.hasOwnProperty('error') ){
  //         alert("Username Already Exist. Please Try Other Username.")
  //       }
  //     }, 200);


  //     this.router.navigate['/user']
  //     });
  // }
}
