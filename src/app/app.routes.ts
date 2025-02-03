import { Routes } from '@angular/router';
// defining routes for the applicaion 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { MealLogComponent } from './components/meal-log/meal-log.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';
import { ProgressComponent } from './components/progress/progress.component';

// Routes defines an arrray of route objects 
// file pates and redirects 
export const routes: Routes = [
    { path: '', component: DashboardComponent }, // this is the default route 
    { path: 'search', component: FoodSearchComponent }, 
    { path: 'log', component: MealLogComponent }, 
    { path: 'goals', component: GoalSettingComponent }, 
    { path: 'progress', component: ProgressComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'} // redirect any invalid paths to the dashboard page 
];
