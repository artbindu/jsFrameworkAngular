import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DetailsComponent } from "./components/details/details.component";

// add routes config: Lesson-10
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }, {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    }
];

export default routeConfig;
