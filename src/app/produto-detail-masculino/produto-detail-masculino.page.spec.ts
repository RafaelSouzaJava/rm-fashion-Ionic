import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoDetailMasculinoPage } from './produto-detail-masculino.page';

describe('ProdutoDetailMasculinoPage', () => {
  let component: ProdutoDetailMasculinoPage;
  let fixture: ComponentFixture<ProdutoDetailMasculinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetailMasculinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetailMasculinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
