import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { DataComponent } from './data/data.component';
import { ApplicationComponent } from './application/application.component';
import { TechnologyComponent } from './technology/technology.component';

export class AppRoutes {
}

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'business', component: BusinessComponent},
    { path: 'data', component: DataComponent},
    { path: 'application', component: ApplicationComponent},
    { path: 'technology', component: TechnologyComponent}

];
