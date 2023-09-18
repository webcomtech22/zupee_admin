import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { OurGamesComponent } from './our-games/our-games.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { NewsRoomComponent } from './news-room/news-room.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OurgamesComponent } from './home/ourgames/ourgames.component';
import { EditMoneyImageComponent } from './home/edit-money-image/edit-money-image.component';
import { EditReviewsComponent } from './home/edit-reviews/edit-reviews.component';
import { ZupeeMemberComponent } from './home/zupee-member/zupee-member.component';
import { EditZupeeMemberComponent } from './home/edit-zupee-member/edit-zupee-member.component';
import { EditQueAnsComponent } from './home/edit-que-ans/edit-que-ans.component';
import { ShowOurGamesComponent } from './home/show-our-games/show-our-games.component';
import { MoneyImageComponent } from './home/money-image/money-image.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { QueAnsComponent } from './home/que-ans/que-ans.component';
import { RatingDataComponent } from './home/rating-data/rating-data.component';
import { EditRatingComponent } from './home/edit-rating/edit-rating.component';
import { FooterCustomComponent } from './home/footer-custom/footer-custom.component';
import { EditFooterCustomComponent } from './home/edit-footer-custom/edit-footer-custom.component';
import { VideoComponent } from './home/video/video.component';

import { ToastrModule } from 'ngx-toastr';
import { AbtBannerComponent } from './about-us/abt-banner/abt-banner.component';
import { AbtDreamteamComponent } from './about-us/abt-dreamteam/abt-dreamteam.component';
import { AbtGamechangerComponent } from './about-us/abt-gamechanger/abt-gamechanger.component';
import { AbtInvestjourneyComponent } from './about-us/abt-investjourney/abt-investjourney.component';
import { AbtInvestorsComponent } from './about-us/abt-investors/abt-investors.component';
import { AbtOurvaluesComponent } from './about-us/abt-ourvalues/abt-ourvalues.component';
import { AbtVideoComponent } from './about-us/abt-video/abt-video.component';
import { AbtWhoweareComponent } from './about-us/abt-whoweare/abt-whoweare.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditOurValuesComponent } from './about-us/edit-our-values/edit-our-values.component';
import { EditVideoComponent } from './about-us/edit-video/edit-video.component';
import { EditDreamTeamComponent } from './about-us/edit-dream-team/edit-dream-team.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    OurGamesComponent,
    AboutUsComponent,
    FaqsComponent,
    BlogComponent,
    NewsRoomComponent,
    ContactUsComponent,
    OurgamesComponent,
    EditMoneyImageComponent,
    EditReviewsComponent,
    ZupeeMemberComponent,
    EditZupeeMemberComponent,
    EditQueAnsComponent,
    ShowOurGamesComponent,
    MoneyImageComponent,
    ReviewsComponent,
    QueAnsComponent,
    RatingDataComponent,
    EditRatingComponent,
    FooterCustomComponent,
    EditFooterCustomComponent,
    VideoComponent,
    AbtBannerComponent,
    AbtDreamteamComponent,
    AbtGamechangerComponent,
    AbtInvestjourneyComponent,
    AbtInvestorsComponent,
    AbtOurvaluesComponent,
    AbtVideoComponent,
    AbtWhoweareComponent,
    EditOurValuesComponent,
    EditVideoComponent,
    EditDreamTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
