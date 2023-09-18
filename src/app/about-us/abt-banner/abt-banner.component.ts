import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-banner',
  templateUrl: './abt-banner.component.html',
  styleUrls: ['./abt-banner.component.css']
})
export class AbtBannerComponent implements OnInit{

bannerData: any;
id:any = 1;
file:any;
path: any = "http://localhost:3000/uploads/"
  constructor(private dataService:DataService){}
ngOnInit(): void {
  this.getAbtBanner();
}
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getAbtBanner(){
    this.dataService.getAbtBannerData(this.id).subscribe((res)=>{
      this.bannerData = res
    console.log(this.bannerData)
  })
}

  editBanner(){
    let formData = new FormData();
    if(this.file){
     formData.append('image',this.file) 
    }
    formData.append('id',this.bannerData.id)
    formData.append('image',this.bannerData.image)

    this.dataService.updateAbtBannerData(formData).subscribe(res=>{
      console.log(res)
    })
  }

}
