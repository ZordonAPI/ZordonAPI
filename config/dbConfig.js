const LOCAL_DB = "mongodb://localhost:27017/zordonAPI";
const PRODUCTION_DB = "mongodb://zordonAPI:Bit_rangers_94@ds259001.mlab.com:59001/zordonapi";

let useLocalDB = true

let DB = useLocalDB ? LOCAL_DB : PRODUCTION_DB

module.exports = {
    DB
}