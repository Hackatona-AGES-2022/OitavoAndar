package com.example.demo.Operacoes;

import java.io.BufferedReader;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Operacao
{
    private ArrayList<String> palavrasDoDia = new ArrayList<>(Arrays.asList("ANSIEDADE"));
    private ArrayList<String> palavrasAceitas = new ArrayList<>();
    private ArrayList<Character> letrasDaPalavraDoDia = new ArrayList<>();
    private ArrayList<Character> letrasDaPalavraDigitada = new ArrayList<>();
    private String palavraDoDia = "";

    public enum Letras
    {
        Verde, Amarelo, Nada
    }

    public void exec(String letras)
    {
        escolhePalavraDia();
        importaPalavrasPossiveis();
        testaPalavra(letras);
    }

    //IMPLEMENTAR
    public void escolhePalavraDia()
    {

        palavraDoDia = "ANSIEDADE";
    }

    public void importaPalavrasPossiveis()
    {
        try{
            Path path = Paths.get("PalavrasPossiveis.txt");
            String linha = "";
            BufferedReader br = Files.newBufferedReader(path, Charset.defaultCharset());
            while((linha = br.readLine()) != null)
            {
                String palavra = linha;
                palavrasAceitas.add(palavra);
            }
        }
        catch  (Exception e)
        {

        }
    }

    public ArrayList<Letras> testaPalavra(String palavraInput)
    {
        escolhePalavraDia();
        importaPalavrasPossiveis();
        ArrayList<Letras> resultado = new ArrayList<>();
        String palavra = palavraInput.toUpperCase();
        if(palavra.length() == 9)
        {
            if(testaEntradaPalavras(palavra) == true)
            {
                for(int i = 0; i < palavraDoDia.length(); i++)
                {
                    letrasDaPalavraDoDia.add(palavraDoDia.charAt(i));
                }
                for(int i = 0; i < palavra.length(); i++)
                {
                    letrasDaPalavraDigitada.add(palavra.charAt(i));
                }
                for(int j = 0; j < letrasDaPalavraDoDia.size(); j++)
                {
                    if(letrasDaPalavraDigitada.get(j).equals(letrasDaPalavraDoDia.get(j)))
                    {
                        resultado.add(Letras.Verde);
                    }
                    else if(palavraDoDia.contains(letrasDaPalavraDigitada.get(j).toString()))
                    {
                        resultado.add(Letras.Amarelo);
                    }
                    else
                    {
                        resultado.add(Letras.Nada);
                    }
                }
                return resultado;
            }
        }
        return null;
    }

    public boolean testaEntradaPalavras(String palavra)
    {
        for(String p : palavrasAceitas)
        {
            if(palavra.toUpperCase().equals(p.toUpperCase()))
            {
                return true;
            }
        }
        return false;
    }
}
