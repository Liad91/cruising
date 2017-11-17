import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { AgmCoreModule } from '@agm/core/core.module';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    AgmCoreModule
  ],
})
export class MapPageModule {}
