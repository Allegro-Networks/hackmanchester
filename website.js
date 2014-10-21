var express = require('express'),
	less = require('less-middleware'),
    registerRoutes = require('./registerRoutes'),
	path = require('path');

var app = express(),
    ROOT_DIRECTORY = __dirname,
    ASSETS_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'),
    PAGE_DIRECTORY = path.join(ROOT_DIRECTORY, 'views');

app.set('views', PAGE_DIRECTORY);
app.set('view engine', 'ejs');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(less({
  src: path.join(__dirname, '/public')
}));
app.use(express.cookieParser('JIMMY'));
app.use(express.session());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(ASSETS_DIRECTORY));

registerRoutes(app, function(){
    app.listen(process.env.PORT,function(){
	    console.log("hack manchester has started on port ",process.env.PORT);
	});
});
