import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isIframe = false;
  loginDisplay = false;
  isAdmin = false;
  private readonly _destroying$ = new Subject<void>();
  profilePictureUrl = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  setLoginDisplay() {
  }

  checkAndSetActiveAccount() {
   
  }

  loginRedirect() {
  }

  loginPopup() {
  }

  logout(popup?: boolean) {
  }

  editProfile() {
  }


  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  getUserInfo() {
  }
}
