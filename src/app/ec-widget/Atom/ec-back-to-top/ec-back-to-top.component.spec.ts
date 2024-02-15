import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcBackToTopComponent } from './ec-back-to-top.component';

describe('EcBackToTopComponent', () => {
  let component: EcBackToTopComponent;
  let fixture: ComponentFixture<EcBackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcBackToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
