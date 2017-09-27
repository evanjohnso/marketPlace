import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ AlbumService ]
})
export class MarketplaceComponent implements OnInit{
  currentRoute: string = this.router.url;
  albums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private albumService: AlbumService) {}



  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

   goToDetailPage(clickedAlbum) {
     this.router.navigate(['albums', clickedAlbum.$key]);
   }
}
