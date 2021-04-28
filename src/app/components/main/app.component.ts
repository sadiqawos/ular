import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ular-agency';
  restaurants = [];
  error = null;
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


  flipperPrefix: Array<string> = [
    'Spectac',
    'Partic',
    'Irreg',
    'Vocab',
    'Ang',
    'Pop',
  ];
  prefixIndex: number = 0;
  cycleTimeoutSeconds: number = 5000;
  dataService: DataService = undefined;
  phoneModalOpen = false;

  constructor(dataService: DataService, public router: Router, public dialog: MatDialog) {
    this.dataService = dataService;
  }

  ngOnInit() {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
    this.beginTimeout();
  }

  tryToLookInside() {
    if (this.router.url === '/contact') {
      this.dataService.lookInside = !this.dataService.lookInside;
    }
  }

  beginTimeout(): void {
    setTimeout(() => {
      this.changeIndex();
      this.beginTimeout();
    }, this.cycleTimeoutSeconds);
  }

  flipperAnimation = {
    in: false
  };

  changeIndex(): void {
    if (this.prefixIndex + 1 > this.flipperPrefix.length - 1) {
      this.prefixIndex = 0;
    } else {
      this.prefixIndex += 1;
    }
    let target = document.getElementById(`slide-${this.prefixIndex}`);
    let parent = target.parentNode as HTMLElement;
    parent.scrollTop = target.offsetTop - parent.offsetTop;

    let targetDot = document.getElementById(`dot-${this.prefixIndex}`);
    let parentDot = targetDot.parentNode as HTMLElement;
    if (targetDot.offsetTop + targetDot.offsetHeight > parentDot.offsetTop + parentDot.offsetHeight) {
      parentDot.scrollTop = (targetDot.offsetTop + targetDot.offsetHeight) - parentDot.offsetTop;
    }
    if (targetDot.offsetTop - targetDot.offsetHeight < parentDot.offsetTop) {
      parentDot.scrollTop = targetDot.offsetTop - parentDot.offsetTop;
    }
  }

  alternateAnimation(): void {
    this.flipperAnimation.in = false
  }

  onContactLink(): void {
    if (this.router.url === '/contact' && !this.phoneModalOpen) {
      this.phoneModalOpen = true;
      this.dialog.open(PhoneNumberModal, { panelClass: 'phone-number-modal', hasBackdrop: true })
        .afterClosed().toPromise().then(() => this.phoneModalOpen = false);
    } else {
      this.router.navigateByUrl('/contact');
    }
  }
}

@Component({
  selector: 'phone-number-modal',
  templateUrl: 'phone-number-modal.html',
})
export class PhoneNumberModal implements OnInit {
  PromoFormData: FormGroup;

  constructor(public dialogRef: MatDialogRef<PhoneNumberModal>, private builder: FormBuilder) { }

  ngOnInit(): void {
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
}
