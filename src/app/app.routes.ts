import { RouterModule, Routes } from '@angular/router';
import {
  AboutComponent,
  PortafolioComponent,
  PortfolioItemComponent,
  SerchComponent
} from "./components/index.paginas";
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio-item/:id', component: PortfolioItemComponent},
  { path: 'buscar/:termino', component: SerchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
