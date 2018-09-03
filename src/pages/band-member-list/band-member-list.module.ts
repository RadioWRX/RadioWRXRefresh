import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandMemberListPage } from './band-member-list';

@NgModule({
  declarations: [
    BandMemberListPage,
  ],
  imports: [
    IonicPageModule.forChild(BandMemberListPage),
  ],
})
export class BandMemberListPageModule {}
