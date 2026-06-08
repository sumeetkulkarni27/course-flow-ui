import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExamFeedbackAndSubmitComponent } from './get-exam-feedback-and-submit.component';
import { globalTestProviders } from '../../../../testing/global-mocks';

describe('GetExamFeedbackAndSubmitComponent', () => {
  let component: GetExamFeedbackAndSubmitComponent;
  let fixture: ComponentFixture<GetExamFeedbackAndSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetExamFeedbackAndSubmitComponent],
      providers: [...globalTestProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetExamFeedbackAndSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
