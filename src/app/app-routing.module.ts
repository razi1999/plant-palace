import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { GalleryComponent } from './compnents/gallery/gallery.component';
import { CategoriesComponent } from './compnents/categories/categories.component';
import { DetailComponent } from './compnents/detail/detail.component';
import { BlogComponent } from './compnents/blog/blog.component';
import { RegisterComponent } from './compnents/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './compnents/search/search.component';
import { FeedbackComponent } from './compnents/feedback/feedback.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { LoginComponent } from './compnents/login/login.component';
import { CartComponent } from './compnents/cart/cart.component';
import { SitemapComponent } from './compnents/sitemap/sitemap.component';

const routes: Routes = [
  // { path: '**'/, component: PageNotFoundComponent },  // Wildcard route for a 404 page
  { path: "", redirectTo: "", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "blog", component: BlogComponent },
      { path: "sitemap", component: SitemapComponent },
      { path: "contact", component: ContactComponent },
      { path: "feedback", component: FeedbackComponent },
      { path: "search/:key", component: SearchComponent },
      { path: "category/:name", component: CategoriesComponent },
      { path: "detail/:name/:id", component: DetailComponent },
      { path: "cart", component: CartComponent },
    ]
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
