const path = require('path');
const serve = require('serve');

serve(path.join(__dirname, 'public'), {
    port: 80,
});