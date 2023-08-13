import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeCaouselComponent } from './compnents/home-caousel/home-caousel.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavComponent } from './layout/header-nav/header-nav.component';
import { GalleryComponent } from './compnents/gallery/gallery.component';
import { CategoriesComponent } from './compnents/categories/categories.component';
import { DetailComponent } from './compnents/detail/detail.component';
import { BlogComponent } from './compnents/blog/blog.component';
import { RegisterComponent } from './compnents/register/register.component';
import { SearchComponent } from './compnents/search/search.component';
import { FeedbackComponent } from './compnents/feedback/feedback.component';
import { LoginComponent } from './compnents/login/login.component';
import { CartComponent } from './compnents/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantService } from './services/plant.service';
import { SitemapComponent } from './compnents/sitemap/sitemap.component';
import { ContactComponent } from './compnents/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeCaouselComponent,
    HeaderNavComponent,
    GalleryComponent,
    CategoriesComponent,
    DetailComponent,
    BlogComponent,
    RegisterComponent,
    SearchComponent,
    FeedbackComponent,
    LoginComponent,
    CartComponent,
    SitemapComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
