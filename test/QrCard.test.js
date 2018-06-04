const chai = require("chai")
const qrcrypto = require("../index.js")

const expect = chai.expect

describe("QrCard", () => {
    it("should have QrCard defined ", () => {
        expect(qrcrypto).not(undefined)
    })
})