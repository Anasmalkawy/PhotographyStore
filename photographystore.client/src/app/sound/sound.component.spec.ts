import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundComponent } from './sound.component';

describe('SoundComponent', () => {
  let component: SoundComponent;
  let fixture: ComponentFixture<SoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
