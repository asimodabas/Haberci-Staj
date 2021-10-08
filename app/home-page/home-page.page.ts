import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../modal/profile-modal/profile-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  public resultOnOff: any;
  public listOnOff: any;
  public key_word: string;
  public newKeyPageOnOff;
  public homePageOnOff;
  constructor(public modalController: ModalController, public router: Router) { }

  ngOnInit() {
    this.listOnOff = "";
    this.resultOnOff = "turnOnOff";
    this.newKeyPageOnOff = "turnOnOff";
    this.homePageOnOff = "";
  }

  //open profile modal
  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfileModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  //open details
  openDetails() {
    this.router.navigate(['details']);
  }

  turnOnOff(event) {
    if (event == "") {
      this.listOnOff = "";
      this.resultOnOff = "turnOnOff";
    } else {
      this.listOnOff = "turnOnOff";
      this.resultOnOff = "";
    }
  }
  searchOldKey(key_word) {

  }
  //Open close key
  turnOnOffNewKyePage(control) {
    if (control == true) {
      this.newKeyPageOnOff = "";
      this.homePageOnOff = "turnOnOff";
    } else {
      this.newKeyPageOnOff = "turnOnOff";
      this.homePageOnOff = "";
    }

  }

  //Press event
  onPress(event) {
    console.log("onPress", event);
  }
}
