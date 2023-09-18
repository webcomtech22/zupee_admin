import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { ourgames } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file1!: File;
  file2!: File;
  file3!: File;
  file4!: File;
  file5!: File;
  constructor(private formBuider:FormBuilder,private dataService:DataService){}
  file:any;
  id:any=1;
  path:any="http://localhost:3000/uploads/"
  bannerData:any={
    bannerImage:'',
    heading:'',
    description:'',
  }
  ourgames = new ourgames()
  ourGamesData:any;
  moneyGamesData:any;
  ratingImageData:any={
    heading:'',
    description:'',
    image:''
  }
  reviewsData:any={
    image:'',
    name:'',
    description:'',
  }
  videoData:any={
    heading:'',
    video:''
  }
  zupeeMemberData:any;
  queAnsData:any={
    question:'',
    answer:''
  }
  footerCustomData:any;
  

  ngOnInit(): void {
    this.getZupeeBanner();
    this.getOurGames();
    this.getMoneyGames();
    this.getRatingImage();
    this.getReviews();
    this.getVideo();
    this.getZupeeMember();
    this.getQueAns();
    this.getFooterCustom();
  }

  imageUpload(event:any){
    this.file = event.target.files[0]
  }

  getZupeeBanner(){
    console.log(this.id)
      this.dataService.getZupeeBannerData(this.id).subscribe((res)=>{
        this.bannerData = res;
        console.log(this.bannerData)
      })
   }
  editBanner(){
    let formData = new FormData();
    if(this.file){
      formData.append('image',this.file)
    }
      formData.append('id',this.bannerData.id)
      formData.append('heading',this.bannerData.heading)
      formData.append('description',this.bannerData.description)
      formData.append('image',this.bannerData.bannerImage)

      this.dataService.updateBannerData(formData).subscribe(res=>{
          console.log(res);
      })
   }

  //  Our Games
   getOurGames(){
    this.dataService.getOurGamesData().subscribe((res)=>{
      this.ourGamesData = res;
      console.log(this.ourGamesData)
    })
   }
  
   deleteOurGames(id:any){
    this.dataService.deleteOurGamesData(id).subscribe(res=>{
      console.log(res)
    })
   }

   //MoneyGames
   getMoneyGames(){
    this.dataService.getMoneyGamesData().subscribe((res)=>{
      this.moneyGamesData = res;
      console.log(this.moneyGamesData)
    })
   }
  //  editMoneyGames(obj:any){
  //   let formData = new FormData();
  //   if(this.file){
  //     formData.append('image',this.file)
  //   }
  //     formData.append('id',obj.id)
  //     formData.append('image',obj.moneyImage)
  //     this.dataService.updateMoneyGamesData(formData).subscribe(res=>{
  //         console.log(res);
  //     })
  //  }
   deleteMoneyGames(id:any){
    this.dataService.deleteMoneyGamesData(id).subscribe(res=>{
      console.log(res)
    })
   }

   //Rating Data
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
  //  deleteRating(){
  //   this.dataService.deleteMneyGamesData(this.id).subscribe(res=>{
  //     console.log(res)
  //   })
  //  }

   //reviews 
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


  //  getReviewGroups(){
  //   const reviewGroups = [];
  //   for (let i = 0; i < this.reviewsData.length; i += 3){
  //     reviewGroups.push(this.reviewsData.slice(i, i + 3));
  //   }
  //   return reviewGroups
  // }

  //video
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

   //zupeeMember
  getZupeeMember(){
    this.dataService.getZupeeMemberData().subscribe((res)=>{
      this.zupeeMemberData = res;
      console.log(this.zupeeMemberData)
    })
   }
  
   deleteZupeeMember(id:any){
    this.dataService.deleteZupeeMemberData(id).subscribe(res=>{
      console.log(res)
    })
   }

   getQueAns(){
    this.dataService.getQueAnsData().subscribe((res)=>{
      this.queAnsData = res;
      console.log(this.queAnsData)
    })
   }
   addQueAns(){
    let formData = new FormData();
      formData.append('id',this.queAnsData.id)
      formData.append('question',this.queAnsData.question)
      formData.append('answer',this.queAnsData.answer)

    this.dataService.insertQueAnsData(formData).subscribe((res)=>{
      console.log(res)
    })
   }
  //  editQueAns(obj:any){
  //   let formData = new FormData();
  //     formData.append('id',obj.id)
  //     formData.append('question',obj.question)
  //     formData.append('answer',obj.answer)

  //     this.dataService.updateQueAnsData(formData).subscribe(res=>{
  //         console.log(res);
  //     })
  //  }
   deleteQueAns(id:any){
    this.dataService.deleteQueAnsData(id).subscribe(res=>{
      console.log(res)
    })
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
   getFooterCustom(){
    this.dataService.getFooterCustomData(this.id).subscribe((res)=>{
      this.footerCustomData = res;
      console.log(this.footerCustomData)
    })
   }

}
