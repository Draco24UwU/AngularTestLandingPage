import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeLayoutComponent } from './dark-mode-layout.component';

describe('DarkModeLayoutComponent', () => {
  let component: DarkModeLayoutComponent;
  let fixture: ComponentFixture<DarkModeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkModeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
