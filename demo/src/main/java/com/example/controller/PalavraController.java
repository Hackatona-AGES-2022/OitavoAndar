package com.example.controller;

import com.example.demo.Operacoes.Operacao;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
@RestController
public class PalavraController {
    @RequestMapping(value = "/palavras/{letras}", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Operacao.Letras>> GetByLetras(@PathVariable(value = "letras") String letras)
    {
        Operacao operacao = new Operacao();
        return new ResponseEntity<ArrayList<Operacao.Letras>>(operacao.testaPalavra(letras), HttpStatus.OK);
    }
}
