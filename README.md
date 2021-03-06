# TimeBoxed

Your virtual task management assistant

## Table of Contents

## Resources

- [Product vision](https://docs.google.com/document/d/1-rJSuYyiyc8uJV-nX6kWqIudxJcLD56XX_fON_p-CwY/edit?ts=5b444bf3#)
- [Pitch presentation](https://docs.google.com/presentation/d/1pTBIq88aiLtiGUGYgnEgVBo_4Rb6qR74uAIsOgVJH5c/edit?usp=sharing)

## Getting Started

In order to run locally, clone repo, and enter ```npm i``` in your terminal at the project's root level to install dependencies. Create a ```.env``` file at the root level of this repo (it will be gitignored). This file will need to look like the following (with the proper google client/secret credentials:

``` env

NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/timeBoxed-testing
PORT=3000
API_URL=http://localhost:3000
CORS_ORIGINS=http://localhost:8080
CLIENT_URL=http://localhost:8080
HASH_SECRET_STRING=<long-random-string>
GOOGLE_CLIENT_ID=<google-client-id>
GOOGLE_SECRET=<google-secret>
TIMEBOXED_SECRET=<long-random-string>
HASH_SECRET_STRING=<long-random-string>
DOMAIN=localhost

```

To start, open two tabs in your terminal:

In one tab, enter the following command: ```npm run dbon```, this starts your local database and will create a /db folder (you can delete this folder at any time and it will be recreated next time you run this command). When finished testing, enter the command ```npm run dboff``` to properly turn the database off.

In the other tab, enter ```nodemon``` (note that you may need to install nodemon if you don't already have it installed globally: ```npm install -g nodemon```), this will start the server.

You will also need to start the frontend for full functionality. See instructions here:
[https://github.com/TimeBoxed/timeboxed-frontend](https://github.com/TimeBoxed/timeboxed-frontend)
