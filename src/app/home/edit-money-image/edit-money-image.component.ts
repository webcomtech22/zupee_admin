import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { moneyImage } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-money-image',
  templateUrl: './edit-money-image.component.html',
  styleUrls: ['./edit-money-image.component.css']
})
export class EditMoneyImageComponent implements OnInit{
  id:any;
  file:any;
  data:any;
  moneyImage = new moneyImage()
  path = 'http://localhost:3000/uploads/'
  constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
    private toastr:ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getMoneyImage(); 
  }

  submitForm() {
    this.editMoneyGames();
    this.showAlert();
  }
  showAlert(){
     this.toastr.success("Data Updated successfully!!!!!!");
    setTimeout(() => {
      this.router.navigate(['/moneyImage']); // Replace '/home' with the actual route of your home page
    }, 1000);
  }
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  
  getMoneyImage(){
    this.dataService.getMoneyImage(this.id).subscribe((res)=>{
      this.data = res;
      this.moneyImage = this.data
      console.log(this.moneyImage)
    })
  }

   editMoneyGames(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.moneyImage.id)
      formData.append('image',this.moneyImage.moneyImage)
      this.dataService.updateMoneyGamesData(formData).subscribe(res=>{
          console.log(res);
      })
   }
}
