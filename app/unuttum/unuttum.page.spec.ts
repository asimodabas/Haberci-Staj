import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnuttumPage } from './unuttum.page';

describe('UnuttumPage', () => {
  let component: UnuttumPage;
  let fixture: ComponentFixture<UnuttumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnuttumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnuttumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
