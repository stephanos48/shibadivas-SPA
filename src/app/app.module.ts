import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule, ModalModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PuppyComponent } from './puppy/puppy.component';
import { AttributesComponent } from './attributes/attributes.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HistoryComponent } from './history/history.component';
import { ParentComponent } from './parent/parent.component';
import { PastpuppiesComponent } from './pastpuppies/pastpuppies.component';
import { ThedivasComponent } from './thedivas/thedivas.component';
import { NavComponent } from './nav/nav.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { RouterModule } from '@angular/router';
import { ZackComponent } from './puppy/zack/zack.component';
import { JoeyComponent } from './puppy/joey/joey.component';
import { RachelComponent } from './puppy/rachel/rachel.component';
import { ChandlerComponent } from './puppy/chandler/chandler.component';
import { ZeedonkComponent } from './parent/zeedonk/zeedonk.component';
import { HeidiComponent } from './parent/heidi/heidi.component';
import { PetservicesComponent } from './petservices/petservices.component';
import { KhalessiComponent } from './parent/khalessi/khalessi.component';
import { PennyComponent } from './pastpuppies/penny/penny.component';
import { TessaComponent } from './pastpuppies/tessa/tessa.component';
import { BrunoComponent } from './parent/bruno/bruno.component';
import { TeresaComponent } from './parent/teresa/teresa.component';
import { MichaelComponent } from './puppy/michael/michael.component';
import { JimComponent } from './puppy/jim/jim.component';
import { AngelaComponent } from './puppy/angela/angela.component';
import { PeteComponent } from './puppy/pete/pete.component';
import { ErinComponent } from './puppy/erin/erin.component';
import { PamComponent } from './puppy/pam/pam.component';
import { DwightComponent } from './puppy/dwight/dwight.component';
import { TypeComponent } from './type/type.component';


export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
     pinch: { enable: false },
     rotate: { enable: false }
  };
}

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      FooterComponent,
      PuppyComponent,
      AttributesComponent,
      FaqsComponent,
      HistoryComponent,
      ParentComponent,
      PastpuppiesComponent,
      ThedivasComponent,
      WaitlistComponent,
      ZackComponent,
      JoeyComponent,
      RachelComponent,
      ChandlerComponent,
      ZeedonkComponent,
      HeidiComponent,
      KhalessiComponent,
      PennyComponent,
      TessaComponent,
      BrunoComponent,
      TeresaComponent,
      PetservicesComponent,
      MichaelComponent,
      DwightComponent,
      JimComponent,
      AngelaComponent,
      PeteComponent,
      ErinComponent,
      PamComponent,
      TypeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      ModalModule.forRoot(),
      NgxGalleryModule
   ],
   providers: [
      { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
