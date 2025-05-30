import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CategoryComponent } from './category/category.component';
import { FormeComponent } from './forme/forme.component';
import { ArticleComponent } from './article/article.component';
import { EmplacementComponent } from './emplacement/emplacement.component';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalCategoryComponent } from './modal-category/modal-category.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalFormeComponent } from './modal-forme/modal-forme.component';
import { ModalArticleComponent } from './modal-article/modal-article.component';
import { ModalEmplacementComponent } from './modal-emplacement/modal-emplacement.component';
import { ModalOrderComponent } from './modal-order/modal-order.component';
import { ModalStockComponent } from './modal-stock/modal-stock.component';
import { UserComponent } from './user/user.component';
import { ModalUserComponent } from './modal-user/modal-user.component';


@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    BrowserModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    ConfirmComponent,
    AppComponent,
    AdminLayoutComponent,
    CategoryComponent,
    FormeComponent,
    ArticleComponent,
    EmplacementComponent,
    StockComponent,
    OrderComponent,
    ModalCategoryComponent,
    ModalFormeComponent,
    ModalArticleComponent,
    ModalEmplacementComponent,
    ModalOrderComponent,
    ModalStockComponent,
    UserComponent,
    ModalUserComponent,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
