/**
 * Imports Express and creates an app instance.
 * Sets the port to use based on environment variable or default.
 * Configures middleware for static assets, parsing request bodies,
 * and routing. Starts listening on the configured port.
 */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
