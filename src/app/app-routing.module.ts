
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProviderComponent } from './provider/provider.component';
// import { HomeComponent } from './home/home.component';
// import { DemoGrid1Component } from './demo-grid1/demo-grid1.component';
// import{AddorEditProviderComponent} from './provider/addor-edit-provider/addor-edit-provider.component'
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

const routes: Routes = [
  // { path: '', redirectTo: '/provider', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'provider', component: ProviderComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'demo-grid1', component: DemoGrid1Component },
  // {path:'addoreditprovider',component:AddorEditProviderComponent,outlet:'datachild'},
];

@NgModule({
  // imports: [ RouterModule.forRoot(routes) ,NgbModule.forRoot()],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

