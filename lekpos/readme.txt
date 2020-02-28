
#Setup React Material
----------------------
npm i -g yarn
yarn add @material-ui/core @material-ui/icons
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


Material Links#
Icon: https://material-ui.com/components/material-icons/
Typography: https://material-ui.com/api/typography/#main-content
Grid: https://material-ui.com/api/grid/
theme.breakpoints.up("sm")


# Edit Emmet Auto-Suggestion Problem (Add in setup JSON)
"emmet.syntaxProfiles": {
    "javascript": "jsx"
},
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
"emmet.triggerExpansionOnTab": true,



# React.JS Frontend Dependency
yarn add axios chart.js react-chartjs-2 react-moment react-number-format react-router-dom redux react-redux formik redux-logger redux-thunk url-join clsx @material-ui/lab  jsonwebtoken material-table formik-material-ui

# NodeJS Backend Dependency
npm i express body-parser fs-extra formidable cors bcryptjs rand-token jsonwebtoken mongoose mongoose-sequence onesignal-node

# Page Components
// In Pages
npx crcf -f LoginPage 
npx crcf -f RegisterPage
npx crcf -f ReportPage
npx crcf -f StockPage
npx crcf -f StockCreatePage
npx crcf -f StockEditPage
npx crcf -f TransactionPage
npx crcf -f ShopPage

// In Fragment
npx crcf -f Payment
npx crcf -f StockCard


mongorestore -d cmpos /Users/chaiyasit/Desktop/codemobiles/reactjs/my_react_workshops/lekpos/backend/dummy_db_cmpos 
git reset --hard


http://travistidwell.com/jsencrypt/demo/


#no sub-folder        
location / {
    try_files $uri $uri/ /index.html;
}

# have sub-folder named "demo"        
location /demo {
    try_files $uri $uri/ /demo/index.html; 
}        


"homepage": "/demo/",



npx pm2 start server.js == npx nodemon server.js
npx pm2 start server.js
npx pm2 status
npx pm2 stop server
npx pm2 stop 0
npx pm2 start server
npx pm2 (start/stop/restart) all
npx pm2 log 
npx pm2 log server/0
npx pm2 start server/0 --watch
npx pm2 delete server/0

https://www.youtube.com/watch?v=e1GY-x-sX_E&list=PLjPfp4Ph3gBqx47PXPdBpWcK16HVxtxF5

http://travistidwell.com/jsencrypt/demo/




Day 1#
1. What and Why React?
2. Installation
3. New Project - npx react-create-app <project-name>
4. VSCode Extension
5. Emmet 
6. Components (Class : rcc and Functional : rfc)
7. Variables : 1. normal variable, [2. state, 3. props]
8. React Hooks
   - useState
   - useEffect
   - useMemo
   - useCallback
9. Integration Material UI


Day 2#
1. Formik [handleChange, value, handleSubmit, Field, Form, initialValue, enableReinitialized]
2. Redux
   - Action : received action call from components and update result to reducers
   - Reducer : Define states and update state according to action type
   - Combined Reducer
   - Store 
   - Provider
   - Middlewares
   - Redux logger
   - Thunk
3. Redux Hooks - useDispatch, useSelector

Day 3#
1. Axios Promised-base Http client
2. Node.JS
   Express, Router, CORS, BodyParser, Formidable, JWT, Interceptor, Static file
   (req, res)=>{}
   Response res.end, res.json
3. Login/Register CORS
4. MongoDB - Instllation and configure (/data/db)
5. MongoDB - mongod
6. MongoDB - NoSQL, Robo3T
7. MongoDB - Restore mongorestore -d cmpos ....
8. POSTMan
9. JWT - Interceptor
10. React-Router-Dom (Router, Switch, Route, Link, Location, Match, Exact, Params, push, goBack, History)

Day 4#
1. Stock
2. Secure Route
4. Material table - columns and data, option, actions
5. Dialog
6. Card
7. Grid (Container and Item)
8. Flex (display : flex, flexDirection, justifyContent, alignItems)
9. MongoDB : Mongoose, findOne, find, findOneAndUpdate, findOneAndDelete, Aggreegate

Day 5#
1. ChartJS - Line, Bar, Pie, data props, dataset
2. Transaction Detail
3. Refresh Token
4. Production and Development Environments
5. Push Notification with onesignal
6. npm run build, fallback, subfolder
7. nginx
8. pm2 