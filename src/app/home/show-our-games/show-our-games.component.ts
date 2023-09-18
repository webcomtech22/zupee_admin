import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder } from '@angular/forms';
import { ourgames } from '../home.model';

@Component({
  selector: 'app-show-our-games',
  templateUrl: './show-our-games.component.html',
  styleUrls: ['./show-our-games.component.css']
})
export class ShowOurGamesComponent implements OnInit{
  ourgames = new ourgames()
  ourGamesData:any;
  file:any;
  path = "http://localhost:3000/uploads/"

  constructor(private formBuider:FormBuilder,private dataService:DataService){}

ngOnInit(): void {
  this.getOurGames();
}
imageUpload(event:any){
  this.file = event.target.files[0]
}
getOurGames(){
    this.dataService.getOurGamesData().subscribe((res)=>{
      this.ourGamesData = res;
      console.log(this.ourGamesData)
    })
   }

   addOurGames(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.ourGamesData.id)
      formData.append('name',this.ourGamesData.name)

    this.dataService.insertOurGamesData(formData).subscribe((res)=>{
      console.log(res)
    })
   }

  deleteOurGames(id:any){
    this.dataService.deleteOurGamesData(id).subscribe(res=>{
      console.log(res)
    })
   }

}
