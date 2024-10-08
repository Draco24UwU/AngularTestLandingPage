import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleDarkModeComponent } from './toogle-dark-mode.component';

describe('ToogleDarkModeComponent', () => {
  let component: ToogleDarkModeComponent;
  let fixture: ComponentFixture<ToogleDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToogleDarkModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToogleDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
