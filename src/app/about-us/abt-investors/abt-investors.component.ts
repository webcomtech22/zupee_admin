import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-investors',
  templateUrl: './abt-investors.component.html',
  styleUrls: ['./abt-investors.component.css']
})
export class AbtInvestorsComponent {
  investorsData: any;
  id:any = 1;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getInvestors();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }
    getInvestors(){
      this.dataService.getAbtInvestorsData(this.id).subscribe((res)=>{
        this.investorsData = res
      console.log(this.investorsData)
    })
  }
  
  editInvestors(){
    let formData = new FormData();
    if(this.file){
     formData.append('image',this.file) 
    }
    formData.append('id',this.investorsData.id)
    formData.append('image',this.investorsData.image)

    this.dataService.updateAbtInvestorsData(formData).subscribe(res=>{
      console.log(res)
    })
  }
    
}
