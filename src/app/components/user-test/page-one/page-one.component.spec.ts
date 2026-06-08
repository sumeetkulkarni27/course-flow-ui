import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import { globalTestProviders } from '../../../../testing/global-mocks';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOneComponent],
      providers: [...globalTestProviders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
