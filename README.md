# TimberCruise Getting Started - Node.js

A simple MetricKit payload collector for TimberCruise.

## Running Locally

```terminal
$ git clone https://github.com/old-growth/timber-cruise-node-js-getting-started.git # or clone your own fork
$ cd timber-cruise-node-js-getting-started
$ npm install
$ export DATABASE_URL="postgres:///timbercruise"
$ npm run start
```

## Deploying to Heroku

```terminal
$ heroku create
$ git push heroku master
$ heroku open
```

or

[![Deploy to Heroku][Deploy to Heroku Button]][Deploy to Heroku]

[Deploy to Heroku]: https://www.heroku.com/deploy/?template=https://github.com/old-growth/timber-cruise-node-js-getting-started
[Deploy to Heroku Button]: https://www.herokucdn.com/deploy/button.svg
