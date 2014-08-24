var request = require('request');
var cheerio = require('cheerio');

request('http://www.se-radio.net/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var date_string = $('span.meta-date').eq(0).text().trim();
    console.log( date_string.replace('on ', '') );
  }
});
