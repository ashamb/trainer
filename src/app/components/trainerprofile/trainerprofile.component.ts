import { Inject, OnInit, EventEmitter, OnDestroy, Component,ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router, ActivatedRoute } from '@angular/router';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { FormGroup, AbstractControl, FormControl,FormBuilder,FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainerprofile',
  templateUrl: './trainerprofile.component.html',
  styleUrls: ['./trainerprofile.component.scss']
})
export class TrainerprofileComponent implements OnInit {
  constructor(private httpService: HttpClient,private dialog: MatDialog,private router: Router)  { }
  addcertification(): void {
    const dialogRef = this.dialog.open(CertificationCreateComponent, {
      width: '500px',

    });
    
  } 

  addskills():void{
    const dialogRef = this.dialog.open(SkillCreateComponent, {
      width: '500px',

    });
  }

 currentRate = 4;
 active: boolean = true;
 enable: boolean = false;


  editprofile(){
    this.active = false;
    this.enable = true;
  }

  ngOnInit() {

  }


  
}

@Component({
  templateUrl: './trainerprofile.dialog.html'
})
export class CertificationCreateComponent{
 // createForm: FormGroup;
 formGroup: FormGroup;


  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();
 
  constructor(
    public dialogRef: MatDialogRef<TrainerprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private addUser: AddUserService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  )
  
   {
 
   
   }
 
   ngOnInit(){
   }
 
}
// Skill Dialog

@Component({
  templateUrl: './trainerskill.dialog.html'
})
export class SkillCreateComponent{
 // createForm: FormGroup;
 formGroup: FormGroup;



 // New Code
 visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  skills: string[] = ['Java'];
  allskills: string[] = ['Angular2+', 'Javascript', 'CSS3', 'HTML5', 'Node.js'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;





  private formSubmitAttempt: boolean;

  public event: EventEmitter<any> = new EventEmitter();
 
  constructor(
    public dialogRef: MatDialogRef<TrainerprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private addUser: AddUserService,
    private _formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  )
  
   {
 
   this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allskills.slice()));
   }
   add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.skills.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }
  remove(fruit: string): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allskills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
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
    public dialogRef: MatDialogRef<TrainerprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
     console.log(this.data);
    }

    ngOnInit(){
      
    }


    onNoClick(): void {
      this.dialogRef.close();
    }

}
