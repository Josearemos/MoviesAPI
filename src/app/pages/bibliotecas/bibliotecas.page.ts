import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.page.html',
  styleUrls: ['./bibliotecas.page.scss'],
})
export class BibliotecasPage implements OnInit {

  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;


  constructor(
    private bibliotecaService: BibliotecaService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
 
    this.bibliotecaService.getTopRatedMOvies(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.movies.push(...res.results);
 
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

}
