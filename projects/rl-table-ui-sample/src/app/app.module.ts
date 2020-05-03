import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RlTableUiModule } from 'rl-table-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RlTableUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
