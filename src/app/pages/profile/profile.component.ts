import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  defaultProfile = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  profile = { ...this.defaultProfile };

  activeTab: string = 'profile';
  firstNameError = '';
  lastNameError = '';
  emailError = '';
  passwordError = '';
  confirmPasswordError = '';
  successMessage = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  validateFirstName() {
    this.firstNameError = /^[A-Za-z]+$/.test(this.profile.firstName) ? '' : 'First name must contain only letters!';
  }

  validateLastName() {
    this.lastNameError = /^[A-Za-z]+$/.test(this.profile.lastName) ? '' : 'Last name must contain only letters!';
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = emailRegex.test(this.profile.email) ? '' : 'Invalid email format!';
  }

  validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.passwordError = passwordRegex.test(this.profile.newPassword) 
      ? '' 
      : 'Password must contain upper & lowercase letters, a number, and a special character.';
  }

  validateConfirmPassword() {
    this.confirmPasswordError = this.profile.newPassword === this.profile.confirmNewPassword 
      ? '' 
      : 'Passwords do not match!';
  }

  hasErrors(): boolean {
    return !!(this.firstNameError || this.lastNameError || this.emailError || this.passwordError || this.confirmPasswordError);
  }

  cancelChanges() {
    this.profile = { ...this.defaultProfile };
    this.clearErrors();
  }

  clearErrors() {
    this.firstNameError = '';
    this.lastNameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
    this.successMessage = '';
  }

  saveChanges() {
    if (this.hasErrors()) {
      return;
    }
    this.successMessage = 'Profile updated successfully!';
  }
}
