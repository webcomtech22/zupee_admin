import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { reviews } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-reviews',
  templateUrl: './edit-reviews.component.html',
  styleUrls: ['./edit-reviews.component.css']
})
export class EditReviewsComponent implements OnInit {
  id:any;
file:any;
data:any;
reviews = new reviews()
path = 'http://localhost:3000/uploads/'
constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
  private toastr : ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getReview();
  }

  submitForm() {
    this.editReviews();
    this.showAlert();
  }
  showAlert(){
    this.toastr.success("Data Updated successfully!!!!!!");
    setTimeout(() => {
      this.router.navigate(['/reviews']); // Replace '/home' with the actual route of your home page
    }, 1000);
  }
  imageUpload(event:any){
    this.file = event.target.files[0]
  }
  getReview(){
    this.dataService.getReview(this.id).subscribe((res)=>{
      this.data = res;
      this.reviews = this.data
      console.log(this.reviews)
    })
   }
   editReviews(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.reviews.id)
      formData.append('name',this.reviews.name)
      formData.append('description',this.reviews.description)
      formData.append('image',this.reviews.image)
      this.dataService.updateReviewsData(formData).subscribe(res=>{
          console.log(res);
      })
   }

}
