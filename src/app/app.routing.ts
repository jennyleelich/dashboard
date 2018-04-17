import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpringComponent } from './spring/spring.component';
import { SummerComponent } from './summer/summer.component';
import { FallComponent } from './fall/fall.component';
import { WinterComponent } from './winter/winter.component';
const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'spring', loadChildren: 'app/spring/spring.module#SpringModule'},
  // { path: 'summer', loadChildren: 'app/summer/summer.module#SummerModule'},
  // { path: 'fall', loadChildren: 'app/fall/fall.module#FallModule'},
  // { path: 'winter', loadChildren: 'app/winter/winter.module#WinterModule'},
  // { path: 'spring', component: SpringComponent },
  { path: 'summer', component: SummerComponent },
  { path: 'fall', component: FallComponent },
  { path: 'winter', component: WinterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '***', redirectTo: '', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
