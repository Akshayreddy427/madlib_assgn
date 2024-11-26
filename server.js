const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();  // Initialize express server

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Define routes after initializing 'server'
server.get('/do_a_random', (req, res) => {
    res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Handle POST route
server.post('/ITC505/lab-7', (req, res) => {
    const { noun, verb, adjective, adverb, pluralNoun } = req.body;

    if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
        res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields.</p>
            <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
        `);
        return;
    }

    const madLib = `
        In a ${adjective} galaxy far beyond, a brave ${noun} embarked on a mission to ${verb} ${adverb}.
        During their journey, they encountered a mysterious ${pluralNoun} floating in the void,
        containing ${pluralNoun} that unlocked the secrets of the universe!
    `;

    res.send(`
        <h1>Mad Lib Story</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7/index.html">Create Another Space Adventure Mad Lib story</a>
    `);
});

const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

let port = 80;
if (process.argv[2] === 'local') {
    port = 8080;
}

server.listen(port, () => console.log(`Ready on localhost:${port}!`));
