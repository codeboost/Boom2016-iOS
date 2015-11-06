# boomfestival.org scraper

Some node.js scripts used to scrape the contents off the boomfestival.org website and create
a json file with the site content. 

This json file is then served to the iOS application which uses it for it's interface.

## Installing

	$ npm install
	$ node make-articles-db.js [--no-cache] [-output=filename] [-every=seconds]


## Options

	--no-cache
		Does not cache results

	- output
		Path where the resulting json will be stored

	- every=seconds
		Run again after number of seconds


## License

Public domain


