import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-zupee-member',
  templateUrl: './zupee-member.component.html',
  styleUrls: ['./zupee-member.component.css']
})
export class ZupeeMemberComponent implements OnInit {
  file:any;
  zupeeMemberData:any;
  path = "http://localhost:3000/uploads/"

  constructor(private dataService:DataService){}

  ngOnInit(): void {
   this.getZupeeMember() 
  }
  getZupeeMember(){
    this.dataService.getZupeeMemberData().subscribe((res)=>{
      this.zupeeMemberData = res;
      console.log(this.zupeeMemberData)
    })
   }
   imageUpload(event:any){
    this.file = event.target.files[0]
  }
   addZupeeMember(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.zupeeMemberData.id)

    this.dataService.insertZupeeMemberData(formData).subscribe((res)=>{
      console.log(res)
    })
   }
   deleteZupeeMember(id:any){
    this.dataService.deleteZupeeMemberData(id).subscribe(res=>{
      console.log(res)
    })
   }

}
