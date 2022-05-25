import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageAsyncComponent } from './list-page-async.component';

describe('ListPageAsyncComponent', () => {
  let component: ListPageAsyncComponent;
  let fixture: ComponentFixture<ListPageAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
