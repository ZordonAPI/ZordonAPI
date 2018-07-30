const app = require("../app")
const mongoose = require("../config/mongo")
const chai = require ("chai")
var chaiHttp = require("chai-http");
var should = chai.should();

chai.use(chaiHttp)
mongoose.connectToMongo()

describe("Endpoints", () => {
    describe("GET", () => {
        it(" FILL ME LATER ")
    })
})