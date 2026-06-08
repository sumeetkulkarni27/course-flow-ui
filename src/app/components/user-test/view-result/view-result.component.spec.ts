import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultComponent } from './view-result.component';
import { globalTestProviders } from '../../../../testing/global-mocks';

describe('ViewResultComponent', () => {
  let component: ViewResultComponent;
  let fixture: ComponentFixture<ViewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewResultComponent],
      providers: [...globalTestProviders]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
