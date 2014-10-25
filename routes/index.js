var moment = require('moment');
module.exports = function(website){		
	website.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var sponsors = {headline:headlineSponsor};
		date = moment().format('DD/MM/YYYY');
		var model = {sponsors:sponsors, date:date};
		response.render('index', model);
	});

};