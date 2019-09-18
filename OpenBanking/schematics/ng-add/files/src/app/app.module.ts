import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from '/app.component';

import { DefaultInterceptor } from '@core';
import { StartupService } from '@core';

import { FormlyModule } from '@ngx-formly/core';
import { ToastrModule } from 'ngx-toastr';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MaterialModule } from './material.module';


export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ThemeModule,
    RoutesModule,
    DragDropModule,
    MaterialModule,

    FormlyModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
