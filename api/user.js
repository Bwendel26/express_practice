function save(req, res) {
    res.send('User > save');
}

function obtain(req, res) {
    res.send('User > obtain');
}

module.exports = { save, obtain };