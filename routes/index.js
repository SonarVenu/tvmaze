const tvmaze = require('./tvmaze');


const constructorMethod = app => {
    app.use("/", tvmaze);

    app.use("*", (req, res) => {
        res.status(404).json({error:'Not found'});
      });
};

module.exports = constructorMethod;