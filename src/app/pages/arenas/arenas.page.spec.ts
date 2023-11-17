import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArenasPage } from './arenas.page';

describe('ArenasPage', () => {
  let component: ArenasPage;
  let fixture: ComponentFixture<ArenasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
