import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private cloudDB: AngularFireDatabase) {
    this.albums = cloudDB.list('albums');
    console.log(this.albums);
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
   this.albums.push(newAlbum);
 }

  getAlbumById(albumId: string){
    return this.cloudDB.object('albums/' + albumId);
}
}
