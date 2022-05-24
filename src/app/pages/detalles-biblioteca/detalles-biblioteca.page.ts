import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalles-biblioteca',
  templateUrl: './detalles-biblioteca.page.html',
  styleUrls: ['./detalles-biblioteca.page.scss'],
})
export class DetallesBibliotecaPage implements OnInit {
  movie = null;
  imageBaseUrl = environment.images;
 
  constructor(
    private route: ActivatedRoute,
    private bibliotecaService: BibliotecaService
  ) {}
 
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bibliotecaService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
 
  openHomepage(url) {
    window.open(url, '_blank');
  }
}
