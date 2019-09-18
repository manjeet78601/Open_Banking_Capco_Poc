import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './sessions/login/login.component';

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [ LoginComponent],
  entryComponents: [],
})
export class RoutesModule {}
