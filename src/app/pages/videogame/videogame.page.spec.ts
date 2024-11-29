import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideogamePage } from './videogame.page';

describe('VideogamePage', () => {
  let component: VideogamePage;
  let fixture: ComponentFixture<VideogamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
