import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThinkingComponent } from './views/thinking/new-thinking/new-thinking.component';
import { ListThinkComponent } from './views/thinking/list-think/list-think.component';

const routes: Routes = [
  {
    path: 'newThink',
    component: NewThinkingComponent
  },
  {
    path: '',
    redirectTo: 'listThink',
    pathMatch: 'full'
  },
  {
    path: 'listThink',
    component: ListThinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
