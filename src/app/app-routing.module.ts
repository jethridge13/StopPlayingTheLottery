import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PowerballComponent } from './powerball/powerball.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PowerballComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
