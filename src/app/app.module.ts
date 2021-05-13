import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FsvpAgentServiceComponent } from './services/fsvp-agent-service/fsvp-agent-service.component';
import { CommonContactUsComponent } from './common/common-contact-us/common-contact-us.component';
import { CommonHowWeCanHelpComponent } from './common/common-how-we-can-help/common-how-we-can-help.component';
import { CommonBannerComponent } from './common/common-banner/common-banner.component';
import { FsvpAmazonComponent } from './services/fsvp-amazon/fsvp-amazon.component';
import { FdaFoodFacilityRegistrationComponent } from './services/fda-food-facility-registration/fda-food-facility-registration.component';
import { UsLabelReviewComponent } from './services/us-label-review/us-label-review.component';
import { FdaImportAlertRemovalServiceComponent } from './services/fda-import-alert-removal-service/fda-import-alert-removal-service.component';
import { SeafoodHaccpComponent } from './services/additional-services/seafood-haccp/seafood-haccp.component';
import { UsImportingMarketEntryPlanComponent } from './services/additional-services/us-importing-market-entry-plan/us-importing-market-entry-plan.component';
import { LowAcidCannedFoodsComponent } from './services/additional-services/low-acid-canned-foods/low-acid-canned-foods.component';
import { TradeshowsComponent } from './services/additional-services/tradeshows/tradeshows.component';
import { ForeignExporterServicesComponent } from './services/additional-services/foreign-exporter-services/foreign-exporter-services.component';
import { JuiceHaccpComponent } from './services/additional-services/juice-haccp/juice-haccp.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FsvpBlogComponent } from './fsvp-blog/fsvp-blog.component';
import { PcqiTeamComponent } from './pcqi-team/pcqi-team.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { FsvpHelpComponent } from './fsvp-help/fsvp-help.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FsvpAgentServiceComponent,
    CommonContactUsComponent,
    CommonHowWeCanHelpComponent,
    CommonBannerComponent,
    FsvpAmazonComponent,
    FdaFoodFacilityRegistrationComponent,
    UsLabelReviewComponent,
    FdaImportAlertRemovalServiceComponent,
    SeafoodHaccpComponent,
    UsImportingMarketEntryPlanComponent,
    LowAcidCannedFoodsComponent,
    TradeshowsComponent,
    ForeignExporterServicesComponent,
    JuiceHaccpComponent,
    JoinUsComponent,
    ContactUsComponent,
    FsvpBlogComponent,
    PcqiTeamComponent,
    ServicesComponent,
    FaqComponent,
    FsvpHelpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'fsvp-agent-service', component: FsvpAgentServiceComponent
      },
      {
        path: 'fsvp-amazon', component: FsvpAmazonComponent
      },
      {
        path: 'fda-food-facility-registration', component: FdaFoodFacilityRegistrationComponent
      },
      {
        path: 'us-label-review', component: UsLabelReviewComponent
      },
      {
        path: 'fda-import-alert-removal-service', component: FdaImportAlertRemovalServiceComponent
      },
      {
        path: 'seafood-haccp', component: SeafoodHaccpComponent
      },
      {
        path: 'us-importing-market-entry-plan', component: UsImportingMarketEntryPlanComponent
      },
      {
        path: 'low-acid-canned-foods', component: LowAcidCannedFoodsComponent
      },
      {
        path: 'tradeshows', component: TradeshowsComponent
      },
      {
        path: 'foreign-exporter-services', component: ForeignExporterServicesComponent
      },
      {
        path: 'juice-haccp', component: JuiceHaccpComponent
      },
      {
        path: 'call-for-food-safety-professionals', component: JoinUsComponent
      },
      {
        path: 'contact', component: ContactUsComponent
      },
      {
        path: 'blogs', component: FsvpBlogComponent
      },
      {
        path: 'pcqi-team', component: PcqiTeamComponent
      },
      {
        path: 'services', component: ServicesComponent
      },
      {
        path: 'fsvp-template', component: FaqComponent
      },
      {
        path: 'fsvp-help', component: FsvpHelpComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

