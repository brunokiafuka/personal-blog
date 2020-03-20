---
path: "/build-express-server-1"
date: 2020-03-20
title: "Building an RESTFull server in JS - PART 1"
tags: ["intermediate", "javascript", "typescript"]
---

> Representational State Transfer: is what an API that uses http requests to manipulate data. REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST leverages less bandwidth, making it more suitable for internet usage.

#### Creating a new project

- Install <a href="https://yarnpkg.com/getting-started/install" target="_blank">yarn</a>()
- open your terminal
- run `mkdir <Name of your project>`
- cd `cd <Name of your project>`
- run `yarn init -y` to create the package.json file
- open the project using your favorite folder

> For this project we will use express as framework.

### Adding a script

Create a folder called src which will house your files, then create an `index.js` file. Open the file you created and
add the code bellow

```js
console.log("hello world")
```

Then open your package.json and add the lines below.

```json
"scripts": {
    "dev": "node src/index.js"
  },
```

Lastely on your terminal run `yarn dev`. Then you should get a result similar to the one below:

```terminal
yarn run v1.15.2
$ node src/index.js
hello world
```

### Run express server

> You will want to download an http client such as <a href="https://insomnia.rest/" target="_blank">insomnia</a> or <a href="https://www.postman.com/downloads/" target="_blank">postman</a> to test your requests.

Firstly we need to add <a href="https://expressjs.com/" target="_blank">express</a> as a dependency into our project. To install express we will need to run the following command `yarn add express`

Open your index.js and add the following code:

```js
const express = require("express")
const app = express()

app.listen(3333, () => console.log("Server running @ port 3333"))
```

**Adding first method to our express server**

We will add a `get` path that returns a json object.

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({ message: "hello world" })
})

app.listen(3333, () => console.log("Server running @ port 3333"))
```

- `"/"` - endpoint path
- `req` - our http request
- `res`- our http response

The code above allows user to send a get request and and we get a json response.

**What if we want to send data to our RESTFull server?**

To send a request method we need to send a `post` request to our server. So we can add after the `get` our code so it can look like this:

```js
app.post("/", (req, res) => {
  const { name } = req.body

  res.json({ message: "success", name })
})
```

- `req.body` - contains a json object with our http request body.

When trying this you might get an error like the one bellow:

```
TypeError: Cannot destructure property `name` of 'undefined' or 'null'.
```

> To fix this you will need to install a middleware called <a href="https://expressjs.com/en/resources/middleware/body-parser.html" target="_blank">body-parser</a>. Body-parser is a middleware that allows data sent to your server on the fomarts such as json or xml, etc...

After adding the `body-parser` your code should look like this:

```js
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json({ message: "hello world" })
})

app.post("/", (req, res) => {
  const { name } = req.body

  res.json({ message: "user", name })
})

app.listen(3333, () => console.log("Server running @ port 3333"))
```

> On the next post we will be making improvements on the our server.

<a href="https://github.com/brunokiafuka/express-server" target="_blank">👉🏾 Github Repo</a>
