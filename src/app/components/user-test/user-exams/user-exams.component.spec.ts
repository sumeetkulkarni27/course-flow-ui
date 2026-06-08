import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamsComponent } from './user-exams.component';
import { globalTestProviders } from '../../../../testing/global-mocks';

describe('UserExamsComponent', () => {
  let component: UserExamsComponent;
  let fixture: ComponentFixture<UserExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExamsComponent],
      providers: [...globalTestProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
