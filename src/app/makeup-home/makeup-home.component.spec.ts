import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupHomeComponent } from './makeup-home.component';

describe('MakeupHomeComponent', () => {
  let component: MakeupHomeComponent;
  let fixture: ComponentFixture<MakeupHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
