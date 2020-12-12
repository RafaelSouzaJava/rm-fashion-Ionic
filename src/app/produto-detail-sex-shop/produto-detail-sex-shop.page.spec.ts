import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoDetailSexShopPage } from './produto-detail-sex-shop.page';

describe('ProdutoDetailSexShopPage', () => {
  let component: ProdutoDetailSexShopPage;
  let fixture: ComponentFixture<ProdutoDetailSexShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetailSexShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetailSexShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
