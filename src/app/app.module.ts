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
import { CategoryFormComponent } from './category-form/category-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { EmplacementFormComponent } from './emplacement-form/emplacement-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { FormeFormComponent } from './forme-form/forme-form.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalCategoryComponent } from './modal-category/modal-category.component';


@NgModule({
  imports: [
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
    CategoryFormComponent,
    OrderFormComponent,
    StockFormComponent,
    EmplacementFormComponent,
    ArticleFormComponent,
    FormeFormComponent,
    ModalCategoryComponent,

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
