import { Subject } from 'rxjs';
import { of } from 'rxjs';
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MSAL_INTERCEPTOR_CONFIG,
  MsalService,
  MsalGuard,
  MsalBroadcastService,
} from '@azure/msal-angular';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

// ─── MSAL Mocks ───────────────────────────────────────────
export const msalInstanceMock = {
  getActiveAccount: () => null,
  getAllAccounts: () => [],
  setActiveAccount: () => null,
  addEventCallback: () => 'callback-id',
  removeEventCallback: () => null,
  handleRedirectObservable: () => of(null),
  initialize: () => Promise.resolve(),
};

export const msalServiceMock = {
  instance: msalInstanceMock,
  loginPopup: () => of({}),
  loginRedirect: () => of(null),
  logout: () => of(null),
  logoutRedirect: () => of(null),
  acquireTokenSilent: () => of({ accessToken: 'mock-token' }),
  handleRedirectObservable: () => of(null),
};

export const msalBroadcastMock = {
  msalSubject$: new Subject(),
  inProgress$: new Subject(),
};

// ─── BsModalService Mock ──────────────────────────────────
export const bsModalServiceMock = {
  show: () => ({ content: {}, hide: () => {} }),
  hide: () => {},
  onHidden: new Subject(),
  onShown: new Subject(),
};

export const toastrServiceMock = {
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
};

// ─── All Providers Combined ───────────────────────────────
export const globalTestProviders = [
  // HTTP
  provideHttpClient(),

  // Router
  provideRouter([]),

  // Animations (fixes RendererFactory2 error)
  provideAnimations(),

  // MSAL
  { provide: MSAL_INSTANCE, useValue: msalInstanceMock },
  { provide: MSAL_GUARD_CONFIG, useValue: { interactionType: 'popup', authRequest: {} } },
  { provide: MSAL_INTERCEPTOR_CONFIG, useValue: { interactionType: 'popup', protectedResourceMap: new Map() } },
  { provide: MsalService, useValue: msalServiceMock },
  { provide: MsalBroadcastService, useValue: msalBroadcastMock },
  { provide: MsalGuard, useValue: { canActivate: () => of(true) } },

  // BsModalService
  { provide: BsModalService, useValue: bsModalServiceMock },
    { provide: ToastrService, useValue: toastrServiceMock },

];