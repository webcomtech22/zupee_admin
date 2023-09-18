import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-ourvalues',
  templateUrl: './abt-ourvalues.component.html',
  styleUrls: ['./abt-ourvalues.component.css']
})
export class AbtOurvaluesComponent {
  ourValuesData: any;
  file:any;
  id:any = 1;
  file1!: File;
  file2!: File;
  file3!: File;
  file4!: File;
  file5!: File;
  file6!: File;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getOurValues();
  }
    imageUpload(event:any,index:number){
      const f = event.target.files[0]
      if(index === 1){
        this.file1 = f
      }if(index === 2){
        this.file2 = f
      }if(index === 3){
        this.file3 = f
      }if(index === 4){
        this.file4 = f
      }if(index === 5){
        this.file5 = f
      }if(index === 6){
        this.file6 = f
      }
    }
    getOurValues(){
      this.dataService.getAbtOurValuesData(this.id).subscribe((res)=>{
        this.ourValuesData = res
      console.log(this.ourValuesData)
    })
  }
  
  editOurValues(){
    let formData = new FormData();
    if(this.file1){
      formData.append('image1',this.file1)
    }
    if(this.file2){
      formData.append('image2',this.file2)
    }if(this.file3){
      formData.append('image3',this.file3)
    }if(this.file4){
      formData.append('image4',this.file4)
    }if(this.file5){
      formData.append('image5',this.file5)
    }if(this.file6){
      formData.append('image6',this.file6)
    }
      formData.append('id',this.ourValuesData.id)
      formData.append('heading',this.ourValuesData.heading)
      formData.append('image1',this.ourValuesData.image1)
      formData.append('image2',this.ourValuesData.image2)
      formData.append('image3',this.ourValuesData.image3)
      formData.append('image4',this.ourValuesData.image4)
      formData.append('image5',this.ourValuesData.image5)
      formData.append('image6',this.ourValuesData.image6)


      this.dataService.updateAbtOurValuesData(formData).subscribe(res=>{
          console.log(res);
      })
    }

}
