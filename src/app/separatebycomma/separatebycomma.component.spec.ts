import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatebycommaComponent } from './separatebycomma.component';

describe('SeparatebycommaComponent', () => {
  let component: SeparatebycommaComponent;
  let fixture: ComponentFixture<SeparatebycommaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatebycommaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparatebycommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
