import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-que-ans',
  templateUrl: './que-ans.component.html',
  styleUrls: ['./que-ans.component.css']
})
export class QueAnsComponent {

  queAnsData:any;
  path = "http://localhost:3000/uploads/"

  constructor(private dataService:DataService){}

  ngOnInit(): void {
   this.getQueAns() 
  }
  getQueAns(){
    this.dataService.getQueAnsData().subscribe((res)=>{
      this.queAnsData = res;
      console.log(this.queAnsData)
    })
   }
  
   addQueAns(){
    let formData = new FormData();
      formData.append('id',this.queAnsData.id)
      formData.append('question',this.queAnsData.question)
      formData.append('answer',this.queAnsData.answer)

    this.dataService.insertQueAnsData(formData).subscribe((res)=>{
      console.log(res)
    })
   }
   deleteQueAns(id:any){
    this.dataService.deleteQueAnsData(id).subscribe(res=>{
      console.log(res)
    })
   }

}
