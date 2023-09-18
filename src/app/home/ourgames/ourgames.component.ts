import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ourgames } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ourgames',
  templateUrl: './ourgames.component.html',
  styleUrls: ['./ourgames.component.css']
})
export class OurgamesComponent implements OnInit {
id:any;
file:any;
data:any;
ourgames = new ourgames()
path = 'http://localhost:3000/uploads/'
constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,private toaster:ToastrService){

}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getOurGame();
  }

  submitForm() {
    this.editOurGames();
    this.showAlert();
  }
  showAlert(){
    setTimeout(() => {
      this.router.navigate(['/showOurGames']); 
      this.toaster.success("Data Updated successfully!!!!!!");
    }, 1000);
  }
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getOurGame(){
    this.dataService.getOurGame(this.id).subscribe((res)=>{
      this.data = res;
      this.ourgames = this.data
      console.log(this.ourgames)
    })
   }
  editOurGames(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.ourgames.id)
      formData.append('name',this.ourgames.name)
      formData.append('image',this.ourgames.gameImage)
      this.dataService.updateOurGamesData(formData).subscribe(res=>{
          console.log(res);
      })
   }
  
}
