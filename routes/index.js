var moment = require('moment');
module.exports = function(website){		
	website.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var sponsors = {headline:headlineSponsor},
			date = moment();
		var model = {sponsors:sponsors};
		response.render('index', model);
	});

};