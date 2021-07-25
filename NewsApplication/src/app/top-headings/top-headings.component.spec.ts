import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadingsComponent } from './top-headings.component';

describe('TopHeadingsComponent', () => {
  let component: TopHeadingsComponent;
  let fixture: ComponentFixture<TopHeadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
