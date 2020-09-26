const express = require('express');
const loadViewApp = express();
const apiApp = express();
const view = require('./loadView');
const api = require('./api');


api.api(apiApp);
view.loadView(loadViewApp);






