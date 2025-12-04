import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { DataComponent } from './data/data.component';
import { ApplicationComponent } from './application/application.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export class AppRoutes {
}

export const routes: Routes = [
    { path: '', redirectTo: 'home' , pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'business', component: BusinessComponent},
    { path: 'data', component: DataComponent},
    { path: 'application', component: ApplicationComponent},
    { path: 'technology', component: TechnologyComponent},
    { path: 'contact-us', component: ContactUsComponent}

];
