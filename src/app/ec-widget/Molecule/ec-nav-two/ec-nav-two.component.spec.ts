import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcNavTwoComponent } from './ec-nav-two.component';

describe('EcNavTwoComponent', () => {
  let component: EcNavTwoComponent;
  let fixture: ComponentFixture<EcNavTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcNavTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcNavTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
