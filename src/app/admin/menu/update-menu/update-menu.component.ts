import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  category:any[] = [];
  menuForm!:FormGroup;
  menuid:any


  constructor(private api:ApiService,private fb:FormBuilder,public dialogRef: MatDialogRef<UpdateMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: any }){
      this.menuid=data.userId

      console.log("this is menu id",this.menuid)
      this.menuForm=fb.group({
        name: [''],
      price: [''],
      description:[''],
      
      image:['null'],
      
      position:['']

      })


  }
  ngOnInit(): void {
    const resId = sessionStorage.getItem('restaurant_id') || '';
  

    this.api.getCategory(resId).subscribe(
      res=>{
        this.category=res
      }
    )
   
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.menuForm.patchValue({
        image: file
      });
    }
  }
  saveChanges() {
    console.log(this.menuForm.value);
  }




}
