import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController,ModalController  } from '@ionic/angular';
import {FeedbackPage} from '../feedback/feedback.page'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segment="dashboard";
 
  buttonColor: string = '#e2e2ea';
  constructor(private modalctrl:ModalController) { }

  ngOnInit() {
  }
  colorid
  someAction(id) {
    this.colorid=id;
    console.log('id',id)
    console.log('colorid', this.colorid)
    if(this.colorid === id){
      this.buttonColor = '#87ceea'; //desired Color
    }else {
      this.buttonColor = '#e2e2ea';
    }
  }

  async GoesTOFeedBack(){
    const modal=await this.modalctrl.create({
      component:FeedbackPage,
      cssClass:'Feedback-modal'
    })
    modal.present();
  }
}
