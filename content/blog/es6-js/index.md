---
path: "/javascript-es6"
date: 2020-02-03
title: "Javascript ES6"
tags: ["beginners", "javascript", "es6"]
---

**Javascript** é uma linguagem de programação que ganhou a sua popularidade por permitir que as páginas web fossem mais interactivas. Mas com passar do tempo as está linguagem foi ganhando novas funcionalidades com que ela não se limitasse apenas em criar animações mas também a criação de programas que funcionam nos servers.

Em 2015, a linguagem sofreu uma "super" evolução com a aprovação do **ECMAScript6 (também conhecido como ES6)**, o ES6 trouxe novas funcionalidades ao Javascript, tronando o desenvolvimento com o javascript mais intuitivo. Neste poste irei apresentar algumas destas novas funcionalidades:

> **TL;DR**

##### 1. Const e Let

Estamos acostumados a usar o `var` quando declaramos as nossas variáveis no Javacript, usamos está **keyword** para definir variáveis mutavais e constantes.

- **const**: usamos o const para variáveis que não são mutaveis durante a execução da nossa script.

```javascript
// Por exemplo o valor de PI não é mutável.
const PI = 3.14
```

- **let**: ao contrário do `const` o `let` permite-nos ter variáveis que poder ter os seus valores alterados.

```javascript
let buz = 'buzz'
...
buzz = 'feed'
```

> Quando iteramos por um ciclo de repetição devemos sempre usar o `let` ao invés de `const`.

##### 2. Template Strings

As **template strings**, ajudam-nos a construir as nossas strings de uma forma mais semântica. O uso das template strings vem dar resposta à problema da manipulação de strings, evitando o uso da contactenização e gerando strings mais intuitivas.

```javascrip
// Criação básica de uma string literal
`JavaScript '\n' é top 🚀.`

// String com multiplas linhas
`Em JavaScript, isso é
  não é legal.`

// Interpolação de String
const name = "Bruno", time = "hoje";
`Olá ${name}, como estás ${time}?`

```

##### 3. Arrow Functions

**Arrow functions** (também conhecidas com fat arrow functions), é uma das funcionalidades mais populares do ES6. As arrow functions permite-nos escrever funções de uma maneira menos verbosa.

Anteriormente as funcões era escritas da seguinte maneira:

```javascript
const multiplyNumByTwo = function(params) {
  return params * 2
}

multiplyNumByTwo(4) // 8
```

Com a introdução das arrow functions a mesma função pode ser escrita da seguinte forma:

```javascript
const multiplyNumByTwo = params => {
  return params * 2
}

multiplyNumByTwo(4) // 8
```

> Fica mais curto! Se a função tiver apenas uma instrução e a instrução retornar um valor, você poderá remover os colchetes e a keyword **return**:

```javascript
const multiplyNumByTwo = params => params * 2

multiplyNumByTwo(4) // 8
```

##### 4. Spread Operator

Está é pessoalmente uma das minhas funcionalidades favoritas! - Os **spread operators** (que em português significa, operadores de propagação), são 3 pontos `...` seguidos de uma vector (ou algum elemento iterável, como objectos) e expande a vector em elementos individuais. Podemos usar os spread operators nos seguintes casos:

```javascript
// Adicionar elementos em uma vector existente
const lettersToAdd = ["C", "D"]
const letters = ["A", "B", ...lettersToAdd, "E", "F"]
console.log(letters) // ["A", "B", "C", "D", "E", "F"]

// Passar elementos de uma vector como argumentos de uma função
const sumAll = (x, y, z) => console.log(x + y + z)
const params = [1, 2, 3]
sumAll(...params) // 6

// Concatenar vectores
let arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]
arr1 = [...arr1, ...arr2]
console.log(arr1) // [0, 1, 2, 3, 4, 5]
```

##### 5. Object Destructuring

**Object Destructuring** (desconstrução de objecto), é outra super funcionalidade disponibilizada pelo ES6, que faz com que a manipulação de objectos muito mais intuitiva no javascript. Anteriormente para iterar um objecto costumava a ser um processo entediante, como no exemplo abaixo:

```javascript
const person = { name: "Bruno", age: 23, superPower: "writing code" }

const name = person.name
const age = person.age
const superPower = person.superPower

console.log(name) // "Bruno"
console.log(age) // 23
console.log(superPower) // "Writing code"
```

Como podemos ver o exemplo acima mostra-se muito verboso, usando o conceito de object destructuring, podemos ter um exemplo mais simples:

```javascript
const person = { name: "Bruno", age: 23, superPower: "writing code" }

const { name, age, superPower } = person

console.log(name) // "Bruno"
console.log(age) // 23
console.log(superPower) // "Writing code"
```

Além destas cinco (5) funcionalidades listadas neste poste, o ES6 tem muitas outras como:

- Default Parameters
- Rest Parameters
- Promises
- Classes
- Import and export
- For Of Comprehensions
- E outras...

> **#CodingIsFun🚀**
