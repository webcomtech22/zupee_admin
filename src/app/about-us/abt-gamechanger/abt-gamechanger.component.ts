import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-gamechanger',
  templateUrl: './abt-gamechanger.component.html',
  styleUrls: ['./abt-gamechanger.component.css']
})
export class AbtGamechangerComponent implements OnInit{
  file1!: File;
  file2!: File;
  file3!: File;
  file4!: File;
  file5!: File;
  file6!: File;
  gameChangeData: any;
  id:any = 1;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getGameChange();
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
    getGameChange(){
      this.dataService.getAbtGameCahangeData(this.id).subscribe((res)=>{
        this.gameChangeData = res
      console.log(this.gameChangeData)
    })
  }
  
  editGameChange(){
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
    }
      formData.append('id',this.gameChangeData.id)
      formData.append('heading',this.gameChangeData.heading)
      formData.append('image1',this.gameChangeData.image1)
      formData.append('image2',this.gameChangeData.image2)
      formData.append('image3',this.gameChangeData.image3)
      formData.append('image4',this.gameChangeData.image4)
      formData.append('image5',this.gameChangeData.image5)

      this.dataService.updateAbtGameChangeData(formData).subscribe(res=>{
          console.log(res);
      })
    }
  
}
