var moment = require('moment');
module.exports = function(website){		
	website.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var sponsors = {headline:headlineSponsor},
			date = moment(),
			video = "true",
			hackEvent = 'Day 1';
		if (date.isAfter('2014-10-26')){
			hackEvent = 'Day 2';
		}
		if (date.isAfter('2014-10-26 18:00')){
			hackEvent = 'Awards';
		}
		if (date.isAfter('2014-10-27')){
			video = "false";
		}
		var model = {sponsors:sponsors, hackEvent:hackEvent, video:video};
		console.log(date.format('DD/MM/YY h:mm:ss'));
		response.render('index', model);
	});

};