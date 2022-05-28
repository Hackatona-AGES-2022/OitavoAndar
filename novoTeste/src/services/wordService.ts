import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'any'
})

export class WordService{
    apiURL : string | undefined;
    constructor(private http : HttpClient){
        this.apiURL == 'http://localhost:8080/';
    }

    getColors(word : string){
        console.log(word)
        console.log('ENTREIIIIII')
        this.http.get(`${this.apiURL}/palavras/${word}`)
    }
}


