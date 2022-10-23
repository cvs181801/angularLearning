import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { Blog } from '../adminShared/blog'

@Injectable()
export class BlogAdminService {

    createPost(post: Blog){
        //let storageRef = firebase.storage().ref();
        //storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
        //.then((snapshot)=> {
         //   let url = snapshot.metadata.downloadURLs[0];
        //    let dbRef = firebase.database().ref('blogPosts/')
        //})
    }
}