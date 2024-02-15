import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcInputBoxComponent } from './ec-input-box.component';

describe('EcInputBoxComponent', () => {
  let component: EcInputBoxComponent;
  let fixture: ComponentFixture<EcInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcInputBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
