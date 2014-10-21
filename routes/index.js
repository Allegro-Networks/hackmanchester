module.exports = function(website){		
	app.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var sponsors = {headline:headlineSponsor};
		var model = {sponsors:sponsors};
		response.render('index', model);
	});

};