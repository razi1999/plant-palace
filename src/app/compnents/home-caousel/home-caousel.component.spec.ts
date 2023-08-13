import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaouselComponent } from './home-caousel.component';

describe('HomeCaouselComponent', () => {
  let component: HomeCaouselComponent;
  let fixture: ComponentFixture<HomeCaouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCaouselComponent]
    });
    fixture = TestBed.createComponent(HomeCaouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
