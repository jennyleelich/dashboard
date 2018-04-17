import { Routes, RouterModule } from '@angular/router';
import { SpringComponent } from './spring.component';
import { SpringDashboardComponent } from './spring-dashboard/spring-dashboard.component';
import { SpringDetailsComponent } from './spring-details/spring-details.component';

const SPRING_ROUTES: Routes = [
  {
    path: 'spring',
    component: SpringComponent,
    children: [
      { path: 'dashboard', component: SpringDashboardComponent},
      { path: 'details', component: SpringDetailsComponent},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];
export const springRouting = RouterModule.forChild(SPRING_ROUTES);
