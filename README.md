# DashboardApp  Angular 5 Application

visit: https://angular5-dashboard.herokuapp.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

Delplyment and Running Envirentment Request:

(1) Get the application source codes.

    a) Download from the github website, or
    b) run git command:  git clone https://github.com/jennyleelich/dashboard.git

(2) Deployment to local

    a) Go to the project folder, run command: npm install
    b) run command "ng build -aot -prod" to generate the release version UI.
    c) run the server command, run command: ng serve
    d) open your browser, open the url:  http://localhost:4200

(3) Deployed on the Heroku.

     The application has been deployed on the Heroku with the link: https://angular5-dashboard.herokuapp.com
   
(4) About the Router structure of dashboard application.
   
    a) const APP_ROUTES: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        { path: 'spring', loadChildren: 'app/spring/spring.module#SpringModule'},
        { path: 'summer', component: SummerComponent }, 
        { path: 'fall', component: FallComponent },
        { path: 'winter', component: WinterComponent }, 
        { path: 'dashboard', component: DashboardComponent },
        { path: '', redirectTo: '', pathMatch: 'full'} 
        ]
    
    b) const SPRING_ROUTES: Routes = [
        { path: 'spring',
          component: SpringComponent,
          children: [
          { path: 'dashboard', component: SpringDashboardComponent},
          { path: 'details', component: SpringDetailsComponent},
          { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ] ;
                                           
   
