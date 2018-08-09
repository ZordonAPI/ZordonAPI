/*.  .  .  .  .  .  .
  .   BROKEN TEST   .
  .  .  .  .  .  .  .*/

const app = require("../app")
const mongoose = require("../config/mongo")
const chai = require ("chai")
var chaiHttp = require("chai-http");

chai.use(chaiHttp)
mongoose.connectToMongo()

describe("RANGERS", () => {
    it("'rangers/' should return array of json objects", () => {
        chai.request(app)
            .get('/rangers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done()  
            })
    });
    it("'rangers/:id' should return a json object", () => {
        chai.request(app)
            .get('/rangers/1')
            .end((err, res) => {
                res.should.have.status(200);
                console.log(res.body)
                res.body.should.be.a('object');
                res.body.should.have.property('naasddasme');
              done()  
            })
    })
})