import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-abt-video',
  templateUrl: './abt-video.component.html',
  styleUrls: ['./abt-video.component.css']
})
export class AbtVideoComponent {
  videoData: any;
  id:any = 1;
  file:any;
  path: any = "http://localhost:3000/uploads/"
    constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.getVideo();
  }
    imageUpload(event:any){
      this.file = event.target.files[0]
    }


    getVideo(){
      this.dataService.getAbtVideoData().subscribe((res)=>{
        this.videoData = res
      console.log(this.videoData)
    })
  }
  
  deleteVideo(id:any){
    this.dataService.deleteAbtVideo(id).subscribe(res=>{
      console.log(res)
    })
  }
  addVideo(){
    let formData = new FormData();
      if(this.file){
        formData.append('video',this.file)
      }
        formData.append('id',this.videoData.id)
        formData.append('video',this.videoData.video)
  
      this.dataService.insertAbtVideoData(formData).subscribe((res)=>{
        console.log(res)
      })
  }

}
