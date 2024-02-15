import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcHomeComponent } from './ec-home.component';

describe('EcHomeComponent', () => {
  let component: EcHomeComponent;
  let fixture: ComponentFixture<EcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
