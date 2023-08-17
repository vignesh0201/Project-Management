import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvminfotechComponent } from './tvminfotech.component';

describe('TvminfotechComponent', () => {
  let component: TvminfotechComponent;
  let fixture: ComponentFixture<TvminfotechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvminfotechComponent]
    });
    fixture = TestBed.createComponent(TvminfotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
