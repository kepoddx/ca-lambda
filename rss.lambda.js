const map = require('rxjs/operators').map    
    ,from = require('rxjs').from;

const Feed = require('feed-to-json-promise')
    , feed = new Feed();

const yankees = 'http://rssfeeds.northjersey.com/northjerseyyankees&x=1';
const mets = 'http://rssfeeds.northjersey.com/northjerseymets&x=1';


const handler = () => {

};


module.e