const app = require("../app")
const mongoose = require("../config/mongo")
const chai = require ("chai")
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp)
mongoose.connectToMongo()

describe("RANGERS", () => {
    it("'rangers/' should return array of json objects", async () => {
        let res = await chai.request(app)
            .get('/rangers')
        res.should.have.status(200)
        res.body.should.be.a('array')
    });
    it("'rangers/:id' should return a json object", async () => {
        let res = await chai.request(app)
            .get('/rangers/1')
        res.should.have.status(200)
        res.should.be.json
        res.body.should.have.property("name")
    })
})

describe("SEASONS", () => {
    it("'seasons/' should return array of json objects", async () => {
        let res = await chai.request(app)
            .get('/seasons')
        res.should.have.status(200)
        res.body.should.be.a('array')
    });
    it("'seasons/:id' should return a json object", async () => {
        let res = await chai.request(app)
            .get('/seasons/1')
        res.should.have.status(200)
        res.should.be.json
        res.body.should.have.property("name")
    })
})