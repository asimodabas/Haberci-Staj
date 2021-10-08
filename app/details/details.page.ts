import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebModalComponent } from '../modal/web-modal/web-modal.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async openWeb() {
    const modal = await this.modalController.create({
      component: WebModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
