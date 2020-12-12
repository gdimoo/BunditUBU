import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraHomeComponent } from './camera-home/camera-home.component';
import { MakeupHomeComponent } from './makeup-home/makeup-home.component';
import { SelectServiceComponent } from './select-service/select-service.component';

const routes: Routes = [
  {path: '',
component: SelectServiceComponent},
{path: 'camera',
component: CameraHomeComponent},
{path: 'makeup',
component: MakeupHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
