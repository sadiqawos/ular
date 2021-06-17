import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import axios from 'axios';
import { Title } from '@angular/platform-browser';
import { ContactContent, DataService } from 'src/app/services/data.service';
import { PhoneNumberModal } from '../main/app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  content: ContactContent = new ContactContent;
  FormData: FormGroup;
  PromoFormData: FormGroup;

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  sending = false;
  dataService: DataService = undefined;
  phoneModalOpen = false;

  constructor(dataService: DataService, private builder: FormBuilder, public dialog: MatDialog, private titleService: Title) {
    this.titleService.setTitle('Ular - Contact Us');
    this.dataService = dataService;
  }

  ngOnInit(): void {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
    this.PromoFormData = this.builder.group({
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      EmailConfirm: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    },
      {
        validator: this.matchingEmailsValidator('Email', 'EmailConfirm')
      });
  }

  matchingEmailsValidator(emailKey: string, confirmEmailKey: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {

      let email = group.controls[emailKey];
      let confirmEmail = group.controls[confirmEmailKey];

      if (email.value !== confirmEmail.value) {
        return {
          mismatch: true
        };
      }
    };
  }

  onSubmitPromo(data) {
    // if (this.sending) {
    //   return;
    // }
    // this.sending = true;
    console.log(data)
  }

  onSubmit(data) {
    if (this.sending) {
      return;
    }
    this.sending = true;
    axios.post('https://formspree.io/f/xzbybrlk', data)
      .then(() => {
        this.FormData.reset();
        this.dialog.open(SentNotification);
        this.sending = false;
      }).catch(console.error)
  }

  onContactLink(): void {
    this.phoneModalOpen = true;
    this.dialog.open(PhoneNumberModal, { panelClass: 'phone-number-modal', hasBackdrop: true })
      .afterClosed().toPromise().then(() => this.phoneModalOpen = false);
  }
}

@Component({
  selector: 'sent-notification',
  templateUrl: 'sent-notification.html',
})
export class SentNotification {
  constructor(private dialogRef: MatDialogRef<SentNotification>) {
    // close the dialog after 5 seconds
    setTimeout(() => {
      dialogRef.close();
    }, 5000);
  }
}
