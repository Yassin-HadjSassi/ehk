import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { CategoryComponent } from 'app/category/category.component';
import { FormeComponent } from 'app/forme/forme.component';
import { ArticleComponent } from 'app/article/article.component';
import { EmplacementComponent } from 'app/emplacement/emplacement.component';
import { StockComponent } from 'app/stock/stock.component';
import { OrderComponent } from 'app/order/order.component';
import { UserComponent } from 'app/user/user.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: '',      component: DashboardComponent , canActivate: [AuthGuard]},
    { path: 'dashboard',      component: DashboardComponent , canActivate: [AuthGuard]},
    { path: 'category',      component: CategoryComponent , canActivate: [AuthGuard]},
    { path: 'forme',      component: FormeComponent , canActivate: [AuthGuard]},
    { path: 'article',      component: ArticleComponent , canActivate: [AuthGuard]},
    { path: 'emplacement',      component: EmplacementComponent , canActivate: [AuthGuard]},
    { path: 'stock',      component: StockComponent , canActivate: [AuthGuard]},
    { path: 'order',      component: OrderComponent , canActivate: [AuthGuard]},
    { path: 'user',      component: UserComponent , canActivate: [AuthGuard]},
    { path: 'user-profile',   component: UserProfileComponent , canActivate: [AuthGuard]},
    { path: '**', component: DashboardComponent , canActivate: [AuthGuard]},
];
