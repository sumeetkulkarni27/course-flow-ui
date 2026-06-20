import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { globalTestProviders } from '../../testing/global-mocks';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CoursesService,
        ...globalTestProviders
      ]
    }).compileComponents();

    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});