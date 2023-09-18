import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-whoweare',
  templateUrl: './abt-whoweare.component.html',
  styleUrls: ['./abt-whoweare.component.css']
})
export class AbtWhoweareComponent implements OnInit{

  whoWeAreData: any;
  id:any = 1;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getAbtWhoWeAre();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }
    getAbtWhoWeAre(){
      this.dataService.getAbtWhoWeAreData(this.id).subscribe((res)=>{
        this.whoWeAreData = res
      console.log(this.whoWeAreData)
    })
  }
  
  editWhoWeAre(){
    let formData = new FormData();
    if(this.file){
     formData.append('image',this.file) 
    }
    formData.append('id',this.whoWeAreData.id)
    formData.append('image',this.whoWeAreData.image)
    formData.append('heading',this.whoWeAreData.heading)
    formData.append('description',this.whoWeAreData.description)

    this.dataService.updateAbtWhoWeAreData(formData).subscribe(res=>{
      console.log(res)
    })
    }
  
}
