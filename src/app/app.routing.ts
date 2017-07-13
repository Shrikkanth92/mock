import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewComponent} from '../app/component/new/new.component';
import {ResultComponent} from '../app/component/result/result.component';

const appRoutes: Routes = [
	{
		path : '',
		redirectTo: '/new',
		pathMatch: 'full'
	},
	{
		path: 'new',
		component: NewComponent
	},
	{
		path: 'result',
		component: ResultComponent
	}
	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
