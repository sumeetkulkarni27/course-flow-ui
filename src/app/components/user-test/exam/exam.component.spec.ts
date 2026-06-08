import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamComponent } from './exam.component';
import { globalTestProviders } from '../../../../testing/global-mocks';

describe('ExamComponent', () => {
  let component: ExamComponent;
  let fixture: ComponentFixture<ExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamComponent],
      providers: [...globalTestProviders]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
