var moment = require('moment');
module.exports = function(website){		
	website.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var sponsors = {headline:headlineSponsor},
			date = moment();
		var model = {sponsors:sponsors, hackEvent:hackEvent, video:video};
		console.log(date.format('DD/MM/YY h:mm:ss'));
		console.log(model);
		response.render('index', model);
	});

};