import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraHomeComponent } from './camera-home.component';

describe('CameraHomeComponent', () => {
  let component: CameraHomeComponent;
  let fixture: ComponentFixture<CameraHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
