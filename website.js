var express = require('express'),
	less = require('less-middleware'),
	path = require('path');

var website = express(),
    ROOT_DIRECTORY = __dirname,
    ASSETS_DIRECTORY = path.join(ROOT_DIRECTORY, 'public'),
    PAGE_DIRECTORY = path.join(ROOT_DIRECTORY, 'views');

website.set('views', PAGE_DIRECTORY);
website.set('view engine', 'ejs');
website.use(express.favicon(__dirname + '/public/images/favicon.ico'));
website.use(express.bodyParser());
website.use(express.methodOverride());
website.use(less({
  src: path.join(__dirname, '/public')
}));
website.use(express.cookieParser('JIMMY'));
website.use(express.session());
website.use(express.bodyParser());
website.use(website.router);
website.use(express.static(ASSETS_DIRECTORY));


website.get('/',function(request,response){
	response.render('index');
})

website.listen(process.env.PORT,function(){
    console.log("hack manchester has started on port ",process.env.PORT);
});