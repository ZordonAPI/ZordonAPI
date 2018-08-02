require('dotenv/config')

const LOCAL_DB = "mongodb://localhost:27017/zordonAPI";
const PRODUCTION_DB = "mongodb://zordonAPI:"+process.env.DB_PWD+"@ds259001.mlab.com:59001/zordonapi";

let useLocalDB = false

let DB = useLocalDB ? LOCAL_DB : PRODUCTION_DB

module.exports = {
    DB
}