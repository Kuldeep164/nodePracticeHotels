const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MenuItem = require('./models/Person');

app.get('/', function(req, res) {
    res.send('Aao swagat hai tumhara meri special haweli mein')
})


// app.post('/person')

// chlo abhi import krlete hai person routes ko
const personRoutes = require('./routes/personRoutes');
const menuItemroutes = require('./routes/menuItemRoutes');

// abhi use krlete hai unn routes ko
app.use('/person', personRoutes);
app.use('/menu', menuItemroutes);

app.listen(3000, () => {
    console.log('server is listening on Port 3000');
});
