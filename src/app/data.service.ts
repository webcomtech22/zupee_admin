import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //home

  getZupeeBannerData(id:any){
    return this.http.get("http://localhost:3000/showZupeeBanner/"+id)
  }
  updateBannerData(data:any){
    return this.http.post("http://localhost:3000/editZupeeBanner",data)
  }

  getOurGamesData(){
    return this.http.get("http://localhost:3000/showOurGames")
  }
  getOurGame(id:any){
    return this.http.get("http://localhost:3000/showOneOurGame/"+id)
  }
  insertOurGamesData(data:any){
    return this.http.post("http://localhost:3000/addOurGames",data)
  }
  updateOurGamesData(data:any){
    return this.http.post("http://localhost:3000/editOurGames",data)
  }
  deleteOurGamesData(id:any){
    return this.http.delete("http://localhost:3000/deleteOurGames/"+id)
  }

  getMoneyGamesData(){
    return this.http.get("http://localhost:3000/showMoneyGames")
  }
  getMoneyImage(id:any){
    return this.http.get("http://localhost:3000/showOneMoneyImage/"+id)
  }
  insertMoneyGamesData(data:any){
    return this.http.post("http://localhost:3000/addMoneyImage",data)
  }
  updateMoneyGamesData(data:any){
    return this.http.post("http://localhost:3000/editMoneyGames",data)
  }
  deleteMoneyGamesData(id:any){
    return this.http.delete("http://localhost:3000/deleteMoneyGames/"+id)
  }

  getRatingImageData(id:any){
    return this.http.get("http://localhost:3000/showRatingImage/"+id)
  }
  updateRatingData(data:any){
    return this.http.post("http://localhost:3000/editRatingImage",data)
  }
  deleteRatingData(id:any){
    return this.http.delete("http://localhost:3000/deleteRatingImage/"+id)
  }


  getReviewsData(){
    return this.http.get("http://localhost:3000/showReviews")
  }
  getReview(id:any){
    return this.http.get("http://localhost:3000/showOneReview/"+id)
  }
  insertReviewsData(data:any){
    return this.http.post("http://localhost:3000/addReviews",data)
  }
  updateReviewsData(data:any){
    return this.http.post("http://localhost:3000/editReviews",data)
  }
  deleteReviewsData(id:any){
    return this.http.delete("http://localhost:3000/deleteReviews/"+id)
  }

  getZupeeMemberData(){
    return this.http.get("http://localhost:3000/showZupeeMember")
  }
  getZupeeMember(id:any){
    return this.http.get("http://localhost:3000/showOneZupeeMember/"+id)
  }
  insertZupeeMemberData(data:any){
    return this.http.post("http://localhost:3000/addZupeeMember",data)
  }
  updateZupeeMemberData(data:any){
    return this.http.post("http://localhost:3000/editZupeeMember",data)
  }
  deleteZupeeMemberData(id:any){
    return this.http.delete("http://localhost:3000/deleteZupeeMember/"+id)
  }

  getFooterCustomData(id:any){
    return this.http.get("http://localhost:3000/showFooterCustom/"+id)
  }
  updateFooterCustomData(data:any){
    return this.http.post("http://localhost:3000/editFooterCustom",data)
  }

  getQueAnsData(){
    return this.http.get("http://localhost:3000/showQueAns")
  }
  getQueAns(id:any){
    return this.http.get("http://localhost:3000/showOneQueAns/"+id)
  }
  insertQueAnsData(data:any){
    return this.http.post("http://localhost:3000/addQueAns",data)
  }
  updateQueAnsData(data:any){
    return this.http.post("http://localhost:3000/editQueAns",data)
  }
  deleteQueAnsData(id:any){
    return this.http.delete("http://localhost:3000/deleteQueAns/"+id)
  }

  getVideoData(id:any){
    return this.http.get("http://localhost:3000/showVideo/"+id)
  }
  updateVideoData(data:any){
    return this.http.post("http://localhost:3000/editVideo",data)
  }

  //About Us

  getAbtBannerData(id:any){
    return this.http.get("http://localhost:3000/showAbtBanner/"+id)
  }
  updateAbtBannerData(data:any){
    return this.http.post("http://localhost:3000/editAbtBanner",data)
  }


  getAbtWhoWeAreData(id:any){
    return this.http.get("http://localhost:3000/showAbtWhoWeAre/"+id)
  }
  updateAbtWhoWeAreData(data:any){
    return this.http.post("http://localhost:3000/editAbtWhoWeAre",data)
  }


  getAbtGameCahangeData(id:any){
    return this.http.get("http://localhost:3000/showAbtGameChange/"+id)
  } 
  updateAbtGameChangeData(data:any){
    return this.http.post("http://localhost:3000/editAbtGameChange",data)
  }  


  getAbtDreamTeamData(){
    return this.http.get("http://localhost:3000/showAbtAllDreamTeam")
  } 
  updateDreamTeamData(data:any){
    return this.http.post("http://localhost:3000/editAbtDreamTeam",data)
  }
  getAbtDreamTeam(id:any){
    return this.http.get("http://localhost:3000/showOneAbtDreamTeam/"+id)
  }
  insertAbtDreamTeamData(data:any){
    return this.http.post("http://localhost:3000/addAbtDreamTeam",data)
  }  
  deleteAbtDreamTeam(id:any){
    return this.http.delete("http://localhost:3000/deleteAbtDreamTeam/"+id)
  }
 

  getAbtVideoData(){
    return this.http.get("http://localhost:3000/showAbtAllVideo")
  }
  updateAbtVideoData(data:any){
    return this.http.post("http://localhost:3000/editAbtVideo",data)
  }
  getAbtVideo(id:any){
    return this.http.get("http://localhost:3000/showOneAbtVideo/"+id)
  }
  insertAbtVideoData(data:any){
    return this.http.post("http://localhost:3000/addAbtVideo",data)
  }
  deleteAbtVideo(id:any){
    return this.http.delete("http://localhost:3000/deleteAbtVideo/"+id)
  }
  

  getAbtInvestJourneyData(id:any){
    return this.http.get("http://localhost:3000/showAbtInvestJourney/"+id)
  }
  updateAbtInvestJourneyData(data:any){
    return this.http.post("http://localhost:3000/editAbtInvestJourney",data)
  }  


  getAbtOurValuesData(id:any){
    return this.http.get("http://localhost:3000/showAbtOurValues/"+id)
  }  
  updateAbtOurValuesData(data:any){
    return this.http.post("http://localhost:3000/editAbtOurValues",data)
  } 

  getAbtInvestorsData(id:any){
    return this.http.get("http://localhost:3000/showAbtInvestors/"+id)
  }
  updateAbtInvestorsData(data:any){
    return this.http.post("http://localhost:3000/editAbtInvestors",data)
  } 
}
