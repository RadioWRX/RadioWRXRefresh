import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandMemberDetailPage } from './band-member-detail';

@NgModule({
  declarations: [
    BandMemberDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BandMemberDetailPage),
  ],
})
export class BandMemberDetailPageModule {}
