# JebHealth - Chat app

<img src='./client/src/images/logo-header.png' width='310' height='100'/>
<br/>

<h2> Steps to run the app on your computer </h2>

To run this repository on your local computer, open the terminal/command line and navigate to the directory you wish to download the repository to.
Then type this into your terminal or command line:
```
git clone 
```

After this, enter the following command:
```
cd chatapp
```

Now enter this command to install all our node dependencies:
```
npm install
```

Change directory into the client directory, using the command:
```
cd client
```

Install all our node dependencies in the client directory using:
```
npm install
```

Change back into the main chatapp directory using the command:
```
cd ..
```

<br />

(**Important**) I'll need you to have a MongoDB cluster already set up. Go into server.js/Line: 39 and set
 ```js
const uri = (your connection string to the cluster) 
```

Now, to run the app, in the main chatapp directory (where you should currently be, use the command:
```
yarn dev
```

<br />

Yarn takes a while to start the dev server. 
<br />
<br />

<h2>Technology Stack</h2>

This project was bootstrapped with [React](https://github.com/facebook/create-react-app), and used [Express](https://expressjs.com/en/guide/routing.html) to set up end points and methods that received stimulus from React components and conveyed and retrieved information from [MongoDB](http://mongodb.com) collections. 
