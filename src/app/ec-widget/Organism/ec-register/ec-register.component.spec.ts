import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcRegisterComponent } from './ec-register.component';

describe('EcRegisterComponent', () => {
  let component: EcRegisterComponent;
  let fixture: ComponentFixture<EcRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
