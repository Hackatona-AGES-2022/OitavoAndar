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

    async getColors(word : string){
        console.log(word)
        console.log('ENTREIIIIII')
        this.vetorString = await this.http.get(`http://localhost:8080/palavras/${word}`).subscribe(data => {
            console.log(data)
        })
        console.log(this.vetorString)
        
    } 
}



