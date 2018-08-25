import { from, merge, zip, forkJoin } from 'rxjs';
import { map, concatAll, tap, combineAll, concat } from 'rxjs/operators';
import * as Feed from 'feed-to-json-promise';

const feed = new Feed();
const yankees = 'http://rssfeeds.northjersey.com/northjerseyyankees&x=1';
const mets = 'http://rssfeeds.northjersey.com/northjerseymets&x=1';

let yankees$ = from(feed.load(yankees))
                .pipe(
                    map((x: any) => x.items.slice(0,4)),
                    map(d => {
                        let set = []
                        d.forEach(el => {
                            set.push({title: el.title, link: el.guid, image: el.media[0].url})
                        });
                        return set
                    })
                );

let mets$ = from(feed.load(mets))
                .pipe(
                    map((x: any) => x.items.slice(0,4)),
                    map(d => {
                        let set = []
                        d.forEach(el => {
                            set.push({ title: el.title, link: el.guid, image: el.media[0].url })
                        });
                        return set
                    })                    
                );

let rss$ = forkJoin(yankees$, mets$)
            



rss$
    .subscribe(d => console.log(d))