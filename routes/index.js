var moment = require('moment');
module.exports = function(website){		
	website.get('/',function(request,response){
		var headlineSponsor = {uri:'http://www.waukta.com/', name: 'WA:UK TA'}
		var challengeSetters = [
			{uri:'http://www.clockworksms.com/', name: 'CLOCKWORK'},
			{uri:'https://careers.autotrader.co.uk/', name: 'AUTOTRADER'},
			{uri:'http://careers.rentalcars.com/', name: 'RENTAL CARS'},
		];
		var barSponsor = {uri:'http://www.talentinternational.com/', name: 'TALENT INTERNATIONAL'};
		var supporters = [{uri:'http://www.sage.co.uk/', name:'sage'}];
		var movers = [{uri:'http://www.mspl.co.uk/', name:'MSPL'}, {uri:'http://www.manchestersciencefestival.com/', name:'#MCRSCIFEST'}];
		var mentors = [{uri:'http://www.cdl.co.uk/', name: 'CDL'}];
		var sponsors = {headline:headlineSponsor, challengeSetters:challengeSetters, 
			barSponsor:barSponsor, supporters:supporters, movers:movers, mentors:mentors};
		var model = {sponsors:sponsors};
		response.render('index', model);
	});

	website.get('/junior',function(request,response){
		response.render('junior');
	});
};