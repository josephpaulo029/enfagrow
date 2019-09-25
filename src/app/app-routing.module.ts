import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'newregister', loadChildren: './newregister/newregister.module#NewregisterPageModule' },
  { path: 'reglist', loadChildren: './reglist/reglist.module#ReglistPageModule' },
  { path: 'waveandsign', loadChildren: './waveandsign/waveandsign.module#WaveandsignPageModule' },
  { path: 'successreg', loadChildren: './successreg/successreg.module#SuccessregPageModule' },
  { path: 'secondregister', loadChildren: './secondregister/secondregister.module#SecondregisterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
