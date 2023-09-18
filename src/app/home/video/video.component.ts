import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoData:any;
  id:any=1;
  path = "http://localhost:3000/uploads/";
  file:any;
  constructor(private dataService:DataService){}
  
  ngOnInit(): void {
    this.getVideo()
  }

  imageUpload(event:any){
    this.file = event.target.files[0]
  }


  getVideo(){
    this.dataService.getVideoData(this.id).subscribe((res)=>{
      this.videoData= res;
      console.log(this.videoData)
    })
   }
   editVideo(){
    let formData = new FormData();
    if(this.file){
      formData.append('video',this.file)
    }
      formData.append('id',this.videoData.id)
      formData.append('heading',this.videoData.heading)
      formData.append('video',this.videoData.video)
      this.dataService.updateVideoData(formData).subscribe(res=>{
          console.log(res);
      })
   }

}
