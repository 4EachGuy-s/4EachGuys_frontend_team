import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login',
        },
    },
    {
        path: 'dashboard',
        //canActivate: [authGuard],
        loadChildren: () =>
            import('./pages/dashboard/dashboard.routes').then(
                (r) => r.DASHBOARD_ROUTES
            ),
    },
];
