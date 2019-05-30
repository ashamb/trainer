import { Inject, OnInit, EventEmitter, OnDestroy, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormControl,FormBuilder,FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporates',
  templateUrl: './corporates.component.html',
  styleUrls: ['./corporates.component.scss']
})
export class CorporatesComponent implements OnInit {

  constructor(private httpService: HttpClient,private dialog: MatDialog,private router: Router)  { }
  openCreate(): void {
    const dialogRef = this.dialog.open(CorporateCreateComponent, {
      width: '800px',

    });
    
  }
  

  ngOnInit() {
  }

}
@Component({
  templateUrl: './corporates.dialoge.html'
})
export class CorporateCreateComponent{
 // createForm: FormGroup;
 formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  // steps = [
  //   {label: 'Confirm your name', content: 'Last name, First name.'},
  //   {label: 'Confirm your contact information', content: '123-456-7890'},
  //   {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
  //   {label: 'You are now done', content: 'Finished!'}
  // ];
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
  
  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();
 arraycorp:any[]=[];
 myobject:any;

  constructor(
    public dialogRef: MatDialogRef<CorporatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private addUser: AddUserService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
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
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email],
      contactFormCtrl:['', Validators.required],
      personFormCtrl: ['', Validators.required]
    });     
  

   
   
   }
 
array:any;
object:any;
   formsubmit(){
     this.array = this.formGroup.get('formArray').value;
    console.log(this.formGroup.get('formArray').value);
    console.log(this.array);
    this.myobject = Object.assign({},...this.array);
    console.log(this.myobject);
    this.dialogRef.close();
    
   }
   

   ngOnInit(){
   }
 
}
@Component({
  templateUrl: 'dialog.component.html'
})
export class MatConfirmDialogComponent implements OnInit{

  message: any;

  constructor(
    public dialogRef: MatDialogRef<CorporatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
     console.log(this.data);
    }

    ngOnInit(){
      
    }


    onNoClick(): void {
      this.dialogRef.close();
    }

}