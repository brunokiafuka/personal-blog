---
path: "/o-que-e-necessario-para-aprender-a-programar"
date: 2020-02-01T17:12:33.962Z
title: "O que é necessário para aprender a programar 🤯?"
tags: ["beginners", "human-friendly"]
---

Muitas vezes sou questionado por diversas pessoas que aspiram estudar ou começar uma carreira em programação de softwares (ou simplesmente programação), querendo saber qual é a complexidade no aprendizado e quais os skills necessários para singrar na carreira. Pessoalmente acho que não exista uma fórmula para aprender, mas sim alguns principios e skills que devem sem adquiridos por qualquer pessoa que deseja tornar-se um programador.
Neste artigo, estarei partilhando alguns principios e skills que devemos desenvolver durante o processo de aprendizado da programação.

#### O que é programação de softwares afinal?

Quando pesquisamos por "programação de softwares" no google recebemos cerca de 28.500.000 resultados com diferentes abordagens e definições. Muita das vezes estes conteúdos são muito técnicas, ou apresentam uma linguagem muito complexa, que fazem com que os aspirantes a programadores fiquem confusos.

Sempre que fosse questionado o que é programação, a minha resposta era similar a de muitos blogs ou até mesmo a da wikipedia.

> Hoje, eu defino programação como um processo de escrita de instruções que devem ser executadas por um computador.

#### O que é necessário para aprender a programar?

Existem várias maneiras para aprendermos a “programar”, muitos de nós aprendemos porque acabamos por ter a programação como modúlo durante a nossa formação ou por mera curiosidade. Os pontos abaixo contêm aspectos que pessoalmente acho serem necessários para qualquer pessoa desejando começar com a programação:

- **Ter habilidade de resolver problemas** — Quando estamos desenvolvendo um programa na verdade, estamos escrevendo instruções de como o computador deve solucionar um dado problema. Todo programador deve ser um bom "problem solver", devemos desenvolver a capacidade de fazer analise a fim de dar solução a qualquer problema definindo uma série de interações necessárias para a resolução de dado problema.
- **Saiba como criar algoritmos** — “Os algoritmos aplicam-se em todas as áreas da nossa vida.” — Um algoritmo é simplesmente uma sequencia finita de passos para resolver um problema (lembra da definição de programação). Saber desenvolver algoritmos nos ajudará a saber como devemos estruturar as nossas soluções. Algoritmos são muito importantes pois eles nos ajudam a entender o que é necessário para solucionarmos um dado problema.

```
//Exemplo de um Algoritmo para um programa
//que calcula o a média de um aluno após entrar 3 notas
1. Começar o programa;
2. Ler as três (3) notas inseridas pelo usúario;
3. Somar as notas e dividir o resultado da soma pelo número de notas
4. Caso o resultado da divisão for maior ou igual à 50
   4.1. Informar ao usúario que o aluno foi aprovado
5. Caso o resultado for menor do que 50
   5.1. Informar ao usúario que o aluno foi reprovado
6. Terminar o programa
```

- **Aprenda a escrever pseudocódigo** — O pseudocódigo é um metódo usado para escrever de forma informal um algortimo, utilizando uma linguagem simples sem necessariamente seguir ou usar a sintaxe de uma linguagem de programação.

```
//Pseudocodigo do Algoritmo acima ...
Variaveis
   media, nota1, nota2, nota3
Inicio
  leia nota1, nota2 e nota3
  media = (nota1+nota2+nota3)/3
  Se (media >= 50)
     entao escreva “aluno aprovado”
  Senao
     escreva “aluno reprovado”
  Fim
Fim
```

- **Aprenda e domine no mínimo uma linguagem de programação** — Após aprender ou aspectos acima citados eu o aconselharia a aprender e dominar no minimo uma linguagem de programação. **Linguagem de programação** é o método formal para dizermos ao computador como executar as nossas instruções (nossos algoritmos) — todos os dias tem uma nova linguagem sendo criada, todas elas partilham o mesmo conceito mas apresentam uma sintaxe diferente. Dentro delas existem algumas são consideradas as mais faceis de se aprender, particularmente aconselho comecar com as seguintes linguagens: Python, C, C++, Java, C#, PHP e Javascript.

> As linguagens estão listadas de forma aliatória.

```
//Exemplo em Python do nosso Pseudocodigo
nota1 = int(input("Insira a primeira nota: "))
nota2 = int(input("Insira a segunda nota: "))
nota3 = int(input("Insira a terceira nota: "))
media = (nota1 + nota2 + nota3) / 3
if(media >= 50):
  print("aluno aprovado")
else:
  print("aluno reprovado")
```

- **Habilidade de pesquisa** — um programador (seja estudante ou até mesmo já exercendo a profissão) deve desenvolver o hábito de pesquisa. Muito do conteúdo exposto online (video aulas, blog posts, e etc…) ajudam-nos bastante no processo de aprendizado e/ou de desenvolvimento da carreira, visto que estaremos aprendendo com outras pessoas que têm mais experiência na nossa área de estudo.
- **Tenha domínio da língua Inglesa** — se fizermos uma analise lógica, posso afirmar que 99% das linguagens de programação existentes herdaram alguns elementos da gramática Inglesa. De igual modo, os documentos oficiais são sempre escritos primeiro em Inglês e depois traduzido noutras linguas caso seja necessário.
- **Dedicação e força de vontade** — Os aspectos acima citados são bastante importantes numa vertente mais técnica e academica, a dedicação e força de vontade tem uma aplicação muito pessoal. Muita das vezes por falta de dedicação acabamos por não por em prática aquilo que nos é ensinado ignorando o conteudo que temos em nossa posse, não só em programação mas como em toda outra área de estudo devemos ser perseverantes e investir o nosso tempo a melhorar as nossas habilitações.

#### Conclusão

Após aprendermos a programar poderemos desenvolver diversas soluções para os mais variados problemas. Estaremos hábilitados para criar aplicativos para computadores, aplicativos para móveis, aplicativos para smart TVs, etc… Mas para tudo isso seja possível é necessário muita dedicação e disciplina.

Programação pode se tornar um bicho de sete cabeças de quando em vez especialmente quando não estamos fazendo por vontade própria, mas também pode e deve ser divertido quando o fazemos com força de vontade. Os pontos abordados neste blog ajudaram-me no processo de aprendizado e até hoje uso-os como um ponto de referência no desenvolvimento das minhas soluções.

> "Aprender a programar pode ser meio frustrante no começo mas vale apena o sacrifício". **#Coding is fun :)**
