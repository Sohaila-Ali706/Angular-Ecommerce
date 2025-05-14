import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.css'],
  standalone: false
})
export class BankPaymentComponent {
  checkoutData: any;

  // نموذج بيانات البنك
  bankData = {
    bankName: '',
    accountNumber: ''
  };

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.checkoutData = nav?.extras?.state?.['checkout'];
  }

  // تأكيد الدفع البنكي بعد تعبئة النموذج
  confirmPayment(form: NgForm) {
    if (form.valid) {
      console.log('Bank Data:', this.bankData);

      this.router.navigate(['/order-confirmation'], {
        state: {
          checkout: this.checkoutData,
          paymentInfo: this.bankData
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/checkout']);
  }
}
