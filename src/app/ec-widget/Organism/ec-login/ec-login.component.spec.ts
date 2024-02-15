import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcLoginComponent } from './ec-login.component';

describe('EcLoginComponent', () => {
  let component: EcLoginComponent;
  let fixture: ComponentFixture<EcLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
