
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
yarn add axios chart.js react-chartjs-2 react-moment react-number-format react-router-dom redux react-redux formik redux-logger redux-thunk url-join clsx @material-ui/lab  jsonwebtoken material-table

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
