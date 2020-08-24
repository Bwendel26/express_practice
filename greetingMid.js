function greeting(name) {
    return function(req, res, next) {
        console.log(`Be welcome ${name}!`);
        next();
    }
}

module.exports = greeting;