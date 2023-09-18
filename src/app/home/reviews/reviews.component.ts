import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  file:any;
  reviewsData:any;
  path = "http://localhost:3000/uploads/"
  
    constructor(private dataService:DataService){}
  
    ngOnInit(): void {
     this.getReviews(); 
    }

    
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
    getReviews(){
      this.dataService.getReviewsData().subscribe((res)=>{
        this.reviewsData = res;
        console.log(this.reviewsData)
      })
     }


     addReviews(){
      let formData = new FormData();
      if(this.file){
        formData.append('image',this.file)
      }
        formData.append('id',this.reviewsData.id)
        formData.append('name',this.reviewsData.name)
        formData.append('description',this.reviewsData.description)
  
      this.dataService.insertReviewsData(formData).subscribe((res)=>{
        console.log(res)
      })
     }
  
     deleteReviews(id:any){
      this.dataService.deleteReviewsData(id).subscribe(res=>{
        console.log(res)
      })
     }
  
  

}
