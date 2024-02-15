import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcCarouselComponent } from './ec-carousel.component';

describe('EcCarouselComponent', () => {
  let component: EcCarouselComponent;
  let fixture: ComponentFixture<EcCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
