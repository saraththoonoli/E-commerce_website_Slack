import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcFooterComponent } from './ec-footer.component';

describe('EcFooterComponent', () => {
  let component: EcFooterComponent;
  let fixture: ComponentFixture<EcFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
