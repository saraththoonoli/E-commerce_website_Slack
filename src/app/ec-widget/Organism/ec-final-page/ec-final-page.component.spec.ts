import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcFinalPageComponent } from './ec-final-page.component';

describe('EcFinalPageComponent', () => {
  let component: EcFinalPageComponent;
  let fixture: ComponentFixture<EcFinalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcFinalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcFinalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
