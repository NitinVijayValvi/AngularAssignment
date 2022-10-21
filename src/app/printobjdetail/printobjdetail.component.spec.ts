import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintobjdetailComponent } from './printobjdetail.component';

describe('PrintobjdetailComponent', () => {
  let component: PrintobjdetailComponent;
  let fixture: ComponentFixture<PrintobjdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintobjdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintobjdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
