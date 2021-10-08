import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  public openClosePage: any = [];
  public closeEdit: any = [];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    for (var i = 0; i < 4; i++) {
      this.openClosePage[i] = "";
      this.closeEdit[i] = "turnOnOff";
    }

  }
  close() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  //Edit choose page
  openEditPage(control, temp) {

    for (let i = 0; i < 4; i++) {
      if (control == i) {
        this.closeEdit[i] = '';
        continue;
      }
      this.closeEdit[i] = 'turnOnOff';
      this.openClosePage[i] = temp;


    }
  }
}
