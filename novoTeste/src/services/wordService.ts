import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'any'
})



export class WordService{
    apiURL : string | undefined;
    constructor(private http : HttpClient){
        this.apiURL == 'http://localhost:8080';
    }

    vetorString : any;

    getColors(word : string){
        console.log(word)
        console.log('ENTREIIIIII')
        return this.http.get<Array<String>>(`http://localhost:8080/palavras/${word}`)
    } 
}



