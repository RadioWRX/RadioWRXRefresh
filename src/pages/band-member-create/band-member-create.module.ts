import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandMemberCreatePage } from './band-member-create';

@NgModule({
  declarations: [
    BandMemberCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BandMemberCreatePage),
  ],
})
export class BandMemberCreatePageModule {}
