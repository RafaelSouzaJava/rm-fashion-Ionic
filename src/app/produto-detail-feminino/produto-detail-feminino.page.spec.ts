import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoDetailFemininoPage } from './produto-detail-feminino.page';

describe('ProdutoDetailFemininoPage', () => {
  let component: ProdutoDetailFemininoPage;
  let fixture: ComponentFixture<ProdutoDetailFemininoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetailFemininoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetailFemininoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
