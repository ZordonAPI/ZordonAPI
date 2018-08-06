require('dotenv/config')

const LOCAL_DB = process.env.LOCAL_DB;
const PRODUCTION_DB = process.env.PRODUCTION_DB;

let useLocalDB = false

let DB = useLocalDB ? LOCAL_DB : PRODUCTION_DB

module.exports = {
    DB
}