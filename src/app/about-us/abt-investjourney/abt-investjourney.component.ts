import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-investjourney',
  templateUrl: './abt-investjourney.component.html',
  styleUrls: ['./abt-investjourney.component.css']
})
export class AbtInvestjourneyComponent {

investJourneyData: any;
id:any = 1;
file:any;
path: any = "http://localhost:3000/uploads/"
  constructor(private dataService:DataService){}
ngOnInit(): void {
  this.getInvestJourney();
}
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getInvestJourney(){
    this.dataService.getAbtInvestJourneyData(this.id).subscribe((res)=>{
      this.investJourneyData = res
    console.log(this.investJourneyData)
  })
}

editInvestJourney(){
  let formData = new FormData();
    if(this.file){
     formData.append('image',this.file) 
    }
    formData.append('id',this.investJourneyData.id)
    formData.append('image',this.investJourneyData.image)
    formData.append('heading',this.investJourneyData.heading)

    this.dataService.updateAbtInvestJourneyData(formData).subscribe(res=>{
      console.log(res)
    })
  }
}

