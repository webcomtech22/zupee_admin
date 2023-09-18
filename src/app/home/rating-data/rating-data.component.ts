import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-rating-data',
  templateUrl: './rating-data.component.html',
  styleUrls: ['./rating-data.component.css']
})
export class RatingDataComponent  implements OnInit{
  ratingImageData:any;
  id:any=1;
  path = "http://localhost:3000/uploads/";
  file:any;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getRatingImage()
  }

  imageUpload(event:any){
    this.file = event.target.files[0]
  }

  getRatingImage(){
    this.dataService.getRatingImageData(this.id).subscribe((res)=>{
      this.ratingImageData = res;
      console.log(this.ratingImageData)
    })
   }

   editRating(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.ratingImageData.id)
      formData.append('heading',this.ratingImageData.heading)
      formData.append('description',this.ratingImageData.description)
      formData.append('image',this.ratingImageData.image)
      this.dataService.updateRatingData(formData).subscribe(res=>{
          console.log(res);
      })
   }
}
