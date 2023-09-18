import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-money-image',
  templateUrl: './money-image.component.html',
  styleUrls: ['./money-image.component.css']
})
export class MoneyImageComponent implements OnInit{
moneyGamesData:any;
path = "http://localhost:3000/uploads/"
file:any;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
   this.getMoneyGames() 
  }

  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getMoneyGames(){
    this.dataService.getMoneyGamesData().subscribe((res)=>{
      this.moneyGamesData = res;
      console.log(this.moneyGamesData)
    })
   }

   addMoneyImage(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.moneyGamesData.id)

    this.dataService.insertMoneyGamesData(formData).subscribe((res)=>{
      console.log(res)
    })
   }

   deleteMoneyGames(id:any){
    this.dataService.deleteMoneyGamesData(id).subscribe(res=>{
      console.log(res)
    })
   }

}
