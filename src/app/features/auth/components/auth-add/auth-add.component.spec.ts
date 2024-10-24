import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAddComponent } from './auth-add.component';

describe('AuthAddComponent', () => {
  let component: AuthAddComponent;
  let fixture: ComponentFixture<AuthAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
