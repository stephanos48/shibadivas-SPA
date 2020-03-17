import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { PuppyComponent } from './puppy/puppy.component';
import { PastpuppiesComponent } from './pastpuppies/pastpuppies.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ThedivasComponent } from './thedivas/thedivas.component';
import { HistoryComponent } from './history/history.component';
import { AttributesComponent } from './attributes/attributes.component';
import { WaitlistComponent } from './waitlist/waitlist.component';
import { ZackComponent } from './puppy/zack/zack.component';
import { JoeyComponent } from './puppy/joey/joey.component';
import { RachelComponent } from './puppy/rachel/rachel.component';
import { ChandlerComponent } from './puppy/chandler/chandler.component';
import { HeidiComponent } from './parent/heidi/heidi.component';
import { ZeedonkComponent } from './parent/zeedonk/zeedonk.component';
import { KhalessiComponent } from './parent/khalessi/khalessi.component';
import { BrunoComponent } from './parent/bruno/bruno.component';
import { PetservicesComponent } from './petservices/petservices.component';
import { TeresaComponent } from './parent/teresa/teresa.component';
import { PennyComponent } from './pastpuppies/penny/penny.component';
import { TessaComponent } from './pastpuppies/tessa/tessa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'puppy', component: PuppyComponent },
  { path: 'pastpuppy', component: PastpuppiesComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'thedivas', component: ThedivasComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'attributes', component: AttributesComponent },
  { path: 'waitlist', component: WaitlistComponent },
  { path: 'zack', component: ZackComponent },
  { path: 'joey', component: JoeyComponent },
  { path: 'rachel', component: RachelComponent },
  { path: 'chandler', component: ChandlerComponent },
  { path: 'heidi', component: HeidiComponent },
  { path: 'zeedonk', component: ZeedonkComponent },
  { path: 'khalessi', component: KhalessiComponent },
  { path: 'bruno', component: BrunoComponent },
  { path: 'petservices', component: PetservicesComponent },
  { path: 'teresa', component: TeresaComponent },
  { path: 'penny', component: PennyComponent },
  { path: 'tessa', component: TessaComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
