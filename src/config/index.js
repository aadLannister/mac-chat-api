import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://heroku_r4xb39vl:xukfix-rIjbid-0wuwqe@ds263156.mlab.com:63156/heroku_r4xb39vl",
  "bodyLimit": "100kb"
}
