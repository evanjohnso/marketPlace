import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private cloudDB: AngularFireDatabase) {
    this.albums = cloudDB.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
   this.albums.push(newAlbum);
 }

 updateAlbum(localUpdatedAlbum) {
   let albumInFireBase = this.getAlbumById(localUpdatedAlbum.$key);
   console.log(albumInFireBase);

   //update is a method on FirebaseObservable Object
   albumInFireBase.update( {
     title: localUpdatedAlbum.title,
     artist: localUpdatedAlbum.artist,
     description: localUpdatedAlbum.description
   });
 }

  getAlbumById(albumId: string){
    return this.cloudDB.object('albums/' + albumId);
}
}
