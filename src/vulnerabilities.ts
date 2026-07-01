import { exec } from 'child_process';
import fs from 'fs';
import express from 'express';

const router = express.Router();

// Vulnerability 1: Command Injection — user input passed directly to exec()
router.get('/run', (req, res) => {
    const cmd = req.query.cmd as string;
    exec(cmd, (err, stdout) => {
        res.send(stdout);
    });
});

// Vulnerability 2: Path Traversal — user controls the file path
router.get('/file', (req, res) => {
    const filename = req.query.name as string;
    const content = fs.readFileSync('/var/data/' + filename, 'utf8');
    res.send(content);
});

// Vulnerability 3: eval() with user input — arbitrary code execution
router.post('/eval', (req, res) => {
    const result = eval(req.body.expression);
    res.json({ result });
});

// Vulnerability 4: Hardcoded credentials
const DB_PASSWORD = 'admin1234';
const API_SECRET  = 'supersecretkey123';
console.log(DB_PASSWORD, API_SECRET);

// Vulnerability 5: XSS — user input reflected directly into HTML response
router.get('/greet', (req, res) => {
    const name = req.query.name as string;
    res.send(`<h1>Hello, ${name}</h1>`);
});

export default router;
