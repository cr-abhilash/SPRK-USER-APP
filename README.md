# USER-APP

User app is a simple node.js application where user can signIn/signUp with jwt authentication and search other users in dashboard.

## Technologies used
1. Node.js
2. Express.js
3. MongoDB
4. JWT
5. Mongoose

## Routes

1. POST  /api/user/signup - for signup.
2. POST /api/user/signIn - for signIn.
3. POST /api/user/signout - for logout.
4. GET  /api/user/all - to get all users.
5. GET  /api/user/search?text="" - to search users by there name or contact

#Setup
1. Clone the repo
2. install npm packages `npm install`
3. set up .env file by refering to env example file.
4. run `node index.js` to start server
