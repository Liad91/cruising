import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewLocationPage } from './new-location';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NewLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewLocationPage),
    TranslateModule.forChild()
  ],
})
export class NewLocationPageModule {}
