// middleware/notFound.middleware.js
module.exports = (req, res) => {
    res.status(404).send(`<html>
    <head>
        <title>404</title>
    </head>
    <body>
        <h1>PAGE NOT FOUND</h1>
    </body>
</html>`);
};
