import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaMasculinoPage } from './categoria-masculino.page';

describe('CategoriaMasculinoPage', () => {
  let component: CategoriaMasculinoPage;
  let fixture: ComponentFixture<CategoriaMasculinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaMasculinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaMasculinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
