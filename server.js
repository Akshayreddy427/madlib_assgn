// Mad Lib form submission handler
server.post('/ITC505/lab-7/index.html', (req, res) => {
    const { noun, verb, adjective, adverb, pluralNoun } = req.body;

    // Validate if all fields are filled
    if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
        return res.send('Submission Failed: Please fill out ALL fields in the form.');
    }

    // Construct the Mad Lib story
    const madLib = `
        In a ${adjective} forest deep within the mountains, a ${noun} decided to ${verb} ${adverb}.
        After traveling for days, they stumbled upon a mysterious cave filled with ${pluralNoun}, 
        and what happened next changed their life forever!
    `;

    // Send the Mad Lib result as plain text
    res.send(`Mad Lib Story: \n\n${madLib}\n\nCreate another Mad Lib story by submitting the form again!`);
});
