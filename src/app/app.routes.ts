import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AgreementPageComponent } from './components/user-test/agreement-page/agreement-page.component';
import { UserExamsComponent } from './components/user-test/user-exams/user-exams.component';
import { ExamComponent } from './components/user-test/exam/exam.component';
import { GetExamFeedbackAndSubmitComponent } from './components/user-test/get-exam-feedback-and-submit/get-exam-feedback-and-submit.component';
import { ViewResultComponent } from './components/user-test/view-result/view-result.component';
import { canActivateGuard } from './guards/login.guard';
import { canActivateAdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./components/auth-callback/auth-callback.component').then(
        (m) => m.AuthCallbackComponent
      ),
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'exam/start',
    component: AgreementPageComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'user-exams',
    component: UserExamsComponent,
    canActivate: [canActivateGuard],
  },
  { path: 'exam', component: ExamComponent, canActivate: [canActivateGuard] },
  {
    path: 'exam/feedback',
    component: GetExamFeedbackAndSubmitComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'exam/view-result',
    component: ViewResultComponent,
    canActivate: [canActivateGuard],
  },
  { path: '**', redirectTo: 'home' },
];
