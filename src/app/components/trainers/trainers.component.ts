import { Inject, OnInit, EventEmitter, OnDestroy, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormControl,FormBuilder,FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  constructor(private httpService: HttpClient,private dialog: MatDialog,private router: Router)  { }
  openCreate(): void {
    const dialogRef = this.dialog.open(TrainerCreateComponent, {
      width: '600px',
                                     
    });
    
  }
  
  
  ngOnInit() {
  }

}
@Component({
  templateUrl: './trainers.dialoge.html'
})
export class TrainerCreateComponent{
 formGroup: FormGroup;
 arraycorp:any[]=[];
 myobjecttrainrs:any;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<TrainersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private addUser: AddUserService,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  )
   {
  this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          trainernameFormCtrl: ['', Validators.required],
          expFormCtrl: ['', Validators.required],
          skillFormCtrl: ['', Validators.required],
         
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email],
          contactFormCtrl:['', Validators.required],
        }),
      ])
    });
    
    this.nameFormGroup = this._formBuilder.group({
      trainernameFormCtrl: ['', Validators.required],
      expFormCtrl: ['', Validators.required],
      skillFormCtrl: ['', Validators.required],
      
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email],
      contactFormCtrl:['', Validators.required],
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
  this.dialogRef.close();
                        
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
@Component({
  templateUrl: 'dialog.component.html'
})
export class MatConfirmDialogComponent implements OnInit{

  message: any;

  constructor(
    public dialogRef: MatDialogRef<TrainersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
     console.log(this.data);
    }

    ngOnInit(){
      
    }


    onNoClick(): void {
      this.dialogRef.close();
    }

}