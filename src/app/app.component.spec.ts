import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('greeting component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
    TestBed.compileComponents();
  });

  it('should have title `Yo!`', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.innerHTML).toContain('Yo!');
    expect(compiled.querySelector('p').innerHTML).toContain('Yo!');
  }));
});
