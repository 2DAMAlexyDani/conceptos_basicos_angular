import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { characters } from './characters.page';


describe('characters', () => {
  let component: characters;
  let fixture: ComponentFixture<characters>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(characters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
