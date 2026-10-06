# Smart Utility Toolkit

A collection of small Node.js utilities built using only core (built-in) modules:
`process`, `http`, `fs`, and `crypto`. No npm packages needed.

## How to Run

Open a terminal inside this folder, then run each command below one at a time.

### 1. Calculator
```
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

### 2. Custom Modules Demo (isEven + logger)
```
node app.js
```

### 3. HTTP Server
```
node server.js
```
Then open these in your browser:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/randomPage (shows 404)

Press `Ctrl + C` in the terminal to stop the server.

### 4. File Manager (Create, Read, Update, Delete)
```
node fileManager.js
```
This will create `test.txt`, write to it, read it, update it, read it again,
then delete it — all while printing each step to the terminal.

### 5. Dice Generator
```
node dice.js
```
Rolls a secure random dice (1–6) five times.

## Folder Structure
```
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```

## Key Concepts Used
- **process.argv** — reading command-line input
- **module.exports / require()** — creating and reusing custom modules
- **http.createServer()** — building a basic web server with routes
- **fs.writeFile / readFile / appendFile / unlink** — full file CRUD
- **crypto.randomInt()** — secure random number generation
