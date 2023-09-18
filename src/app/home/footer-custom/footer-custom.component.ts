import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer-custom',
  templateUrl: './footer-custom.component.html',
  styleUrls: ['./footer-custom.component.css']
})
export class FooterCustomComponent implements OnInit{

  footerCustomData:any;
  id:any=1;
  path = "http://localhost:3000/uploads/";
  file1!: File;
  file2!: File;
  file3!: File;
  file4!: File;
  file5!: File;

  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.getFooterCustom()
  }

  imageUpload2(event:any,index:number){
    const f= event.target.files[0]
    if(index === 1){
      this.file1 = f;
    } if(index === 2){
      this.file2 = f;
    } if(index === 3){
      this.file3 = f;
    } if(index === 4){
      this.file4 = f;
    } if(index === 5){
      this.file5 = f;
    }
   }

   getFooterCustom(){
    this.dataService.getFooterCustomData(this.id).subscribe((res)=>{
      this.footerCustomData = res;
      console.log(this.footerCustomData)
    })
   }

   editfooterCustom(){
    let formData = new FormData();
    if(this.file1){
      formData.append('logoImage',this.file1)
    }
    if(this.file2){
      formData.append('facebook',this.file2)
    }if(this.file3){
      formData.append('instagram',this.file3)
    }if(this.file4){
      formData.append('youtube',this.file4)
    }if(this.file5){
      formData.append('messanger',this.file5)
    }
      formData.append('id',this.footerCustomData.id)
      formData.append('logoImage',this.footerCustomData.logoImage)
      formData.append('facebook',this.footerCustomData.facebook)
      formData.append('instagram',this.footerCustomData.instagram)
      formData.append('youtube',this.footerCustomData.youtube)
      formData.append('messanger',this.footerCustomData.messanger)
      formData.append('lastText',this.footerCustomData.lastText)


      this.dataService.updateFooterCustomData(formData).subscribe(res=>{
          console.log(res);
      })
   }


}
