import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent {
  videoData: any;
  id:any;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService,private route: ActivatedRoute,private router:Router,
      private toastr : ToastrService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getVideo();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }

    submitForm() {
      this.editVideo();
      this.showAlert();
    }

    showAlert(){
      this.toastr.success("Data Updated successfully!!!!!!");
      setTimeout(() => {
        this.router.navigate(['/abt_video']); // Replace '/home' with the actual route of your home page
      }, 1000);
    }

  getVideo(){
      this.dataService.getAbtVideo(this.id).subscribe((res)=>{
        this.videoData = res
      console.log(this.videoData)
    })
  }

  editVideo(){
    let formData = new FormData();
    if(this.file){
     formData.append('video',this.file) 
    }
    formData.append('id',this.videoData.id)
    formData.append('video',this.videoData.video)
    this.dataService.updateAbtVideoData(formData).subscribe(res=>{
      console.log(res)
    })
    }
}
