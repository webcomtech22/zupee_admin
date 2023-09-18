import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OurGamesComponent } from './our-games/our-games.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { NewsRoomComponent } from './news-room/news-room.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { OurgamesComponent } from './home/ourgames/ourgames.component';
import { EditMoneyImageComponent } from './home/edit-money-image/edit-money-image.component';
import { EditReviewsComponent } from './home/edit-reviews/edit-reviews.component';
import { EditZupeeMemberComponent } from './home/edit-zupee-member/edit-zupee-member.component';
import { EditQueAnsComponent } from './home/edit-que-ans/edit-que-ans.component';
import { ShowOurGamesComponent } from './home/show-our-games/show-our-games.component';
import { MoneyImageComponent } from './home/money-image/money-image.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { ZupeeMemberComponent } from './home/zupee-member/zupee-member.component';
import { QueAnsComponent } from './home/que-ans/que-ans.component';
import { RatingDataComponent } from './home/rating-data/rating-data.component';
import { VideoComponent } from './home/video/video.component';
import { FooterCustomComponent } from './home/footer-custom/footer-custom.component';

import { AbtBannerComponent } from './about-us/abt-banner/abt-banner.component';
import { AbtDreamteamComponent } from './about-us/abt-dreamteam/abt-dreamteam.component';
import { AbtGamechangerComponent } from './about-us/abt-gamechanger/abt-gamechanger.component';
import { AbtInvestjourneyComponent } from './about-us/abt-investjourney/abt-investjourney.component';
import { AbtInvestorsComponent } from './about-us/abt-investors/abt-investors.component';
import { AbtOurvaluesComponent } from './about-us/abt-ourvalues/abt-ourvalues.component';
import { AbtVideoComponent } from './about-us/abt-video/abt-video.component';
import { AbtWhoweareComponent } from './about-us/abt-whoweare/abt-whoweare.component';

import { EditDreamTeamComponent } from './about-us/edit-dream-team/edit-dream-team.component';
import { EditVideoComponent } from './about-us/edit-video/edit-video.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'ourgames',component:OurGamesComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'blog',component:BlogComponent},
  {path:'newsroom',component:NewsRoomComponent},
  {path:'contactus',component:ContactUsComponent},

  {path:'showOurGames',component:ShowOurGamesComponent},
  {path:'moneyImage',component:MoneyImageComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'zupeeMember',component:ZupeeMemberComponent},
  {path:'queAns',component:QueAnsComponent},
  {path:'rating',component:RatingDataComponent},
  {path:'video',component:VideoComponent},
  {path:'footer',component:FooterCustomComponent},

  {path:'ourgames2/:id',component:OurgamesComponent},
  {path:'editMoneyImage/:id',component:EditMoneyImageComponent},
  {path:'editReviews/:id',component:EditReviewsComponent},
  {path:'editZupeeMember/:id',component:EditZupeeMemberComponent},
  {path:'editQueAns/:id',component:EditQueAnsComponent},

  {path:'abt_banner',component:AbtBannerComponent},
  {path:'abt_whoweare',component:AbtWhoweareComponent},
  {path:'abt_gamechange',component:AbtGamechangerComponent},
  {path:'abt_dreamteam',component:AbtDreamteamComponent},
  {path:'abt_investjourney',component:AbtInvestjourneyComponent},
  {path:'abt_ourvalues',component:AbtOurvaluesComponent},
  {path:'abt_investors',component:AbtInvestorsComponent},
  {path:'abt_video',component:AbtVideoComponent},

  {path:'editdreamteam/:id',component:EditDreamTeamComponent},
  {path:'editvideo/:id',component:EditVideoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
