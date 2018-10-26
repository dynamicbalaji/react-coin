# react-coin
First react app

### Running
To run the application
`
npm run start
`
and hit http://localhost:3000

### Building
To do prod build
`
npm run build
`

## Installing Static Server
To install static server
`
npm i -g serve
`

### Serving as a normal app
To start the static server & publish build app
`
serve build
`
and hit http://localhost:5000


The main disadvantage with this is if you hit homepage & navigate to all other pages, it will work fine. Instead if you try to hit other pages like http://localhost:5000/currency/bitcoin first, then it will through 404 error. We can either use `HashRouter` instead of `BroswerRouter` or can run application as Single Page Application (SPA) to fix this.

### Serving as a SPA
To run application as SPA  
`
serve -s build
`

Now we can hit any page in the application and it will be served properly without throwing 404 error.

## Installing Dynamic Server
To install dynamic server 'express'
`npm i express --save`

### Serving app on dynamic server
Run command `node server.js` and hit http://localhost:9000 

## Installing in Heroku
### Creating app in Heroku
Use command

`
heroku create react-coin3 --buildpack https://github.com/mars/create-react-app-buildpack.git
`

in the location of the project. You will receive message as

```
Creating ⬢ react-coin3... done
Setting buildpack to https://github.com/mars/create-react-app-buildpack.git... done
https://react-coin3.herokuapp.com/ | https://git.heroku.com/react-coin3.git
```

Now, the url allocated to our application is https://react-coin3.herokuapp.com/ and you will receive default welcome page if you hit it now

### Deploying app to Heroku
```
git add -A

git commit -m "Initial commit to Heroku"

git push heroku master
```

Now, if you hit https://react-coin3.herokuapp.com/ application will be loaded. But we will get same 404 error when trying to load the app from any page other than base page.

In order to fix this, we have to add `static.json` file with below content

```
{
    "root": "build/",
    "routes":{
        "/**": "index.html"
    }
}
```