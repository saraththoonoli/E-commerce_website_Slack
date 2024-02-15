import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcCartComponent } from './ec-cart.component';

describe('EcCartComponent', () => {
  let component: EcCartComponent;
  let fixture: ComponentFixture<EcCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
