import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-abt-dreamteam',
  templateUrl: './abt-dreamteam.component.html',
  styleUrls: ['./abt-dreamteam.component.css']
})

export class AbtDreamteamComponent {
  dreamTeamData: any;
  id:any = 1;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getDreamTeam();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }


    getDreamTeam(){
      this.dataService.getAbtDreamTeamData().subscribe((res)=>{
        this.dreamTeamData = res
      console.log(this.dreamTeamData)
    })
  }
  
  addDreamTeam(){
    let formData = new FormData();
      if(this.file){
        formData.append('image',this.file)
      }
        formData.append('id',this.dreamTeamData.id)
        formData.append('name',this.dreamTeamData.name)
        formData.append('post',this.dreamTeamData.post)
        formData.append('description',this.dreamTeamData.description)
  
      this.dataService.insertAbtDreamTeamData(formData).subscribe((res)=>{
        console.log(res)
      })
  }

  deleteDreamTeam(id:any){
      this.dataService.deleteAbtDreamTeam(id).subscribe(res=>{
        console.log(res)
      })
  }

}
