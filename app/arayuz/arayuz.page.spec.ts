import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArayuzPage } from './arayuz.page';

describe('ArayuzPage', () => {
  let component: ArayuzPage;
  let fixture: ComponentFixture<ArayuzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArayuzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArayuzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
