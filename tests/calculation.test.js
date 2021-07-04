let describe = require('mocha').describe
let it = require('mocha').it
let expect = require ('chai').expect
let strictEqual = require('../calculation.js')

describe ('equality',() => {
  describe ('strictEqualsTest', () => {
    it ('numbers are strictly equal', () => {
      let strictEqualResult = strictEqual (5,5)
      expect (strictEqualResult).to.equal(true)
    })

    it('strings are strictly equal',() => {
      let strictEqualResult = strictEqual ('six','six')
      expect(strictEqualResult).to.equal(true)
    })

    it('strings are not strictly equal',() => {
      let strictEqualResult = strictEqual('six','ten')
      expect(strictEqualResult).to.equal(false)
    })
  })
})