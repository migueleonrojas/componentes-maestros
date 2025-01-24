import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: 'graficas',
      loadChildren: () => import('@modules/graphs/graphs.module').then(m => m.GraphsModule)
   },
   {
      path: 'video',
      loadChildren: () => import('@modules/media/media.module').then(m => m.MediaModule)
   },
   {
      path: 'chat',
      loadChildren: () => import('@modules/chat/chat.module').then(m => m.ChatModule)
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
 export class HomeRoutingModule { }