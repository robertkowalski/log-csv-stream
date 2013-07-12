// builtins
var assert = require('assert')
var fs = require('fs')

// misc test helper
var mkdir = require('mkdirp')
var rimraf = require('rimraf')

// main module
var log = require('../index.js')

// settings
var tempdir = __dirname + '/out'

beforeEach(function (done) {
  rimraf(tempdir, function () {
    mkdir(tempdir, function (err) {
      done()
    })
  })
})
afterEach(function (done) {
  rimraf(tempdir, done)
})

describe('logger', function () {
  it('logs', function (done) {
    done()
  })
})