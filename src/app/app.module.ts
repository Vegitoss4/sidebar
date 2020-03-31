import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { OfficeSidebarComponent } from './office-sidebar/office-sidebar.component';

const appRoutes: Routes = [
  { path: 'officesidebar', component: OfficeSidebarComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    OfficeSidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
