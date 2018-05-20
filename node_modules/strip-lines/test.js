'use strict'

var test = require('tape')
var strip = require('./')

test('CRLF', function (t) {
  t.equal(strip('foo\r\nbar\r\nbaz', 1), 'bar\r\nbaz')
  t.end()
})

test('CR', function (t) {
  t.equal(strip('foo\rbar\rbaz', 1), 'bar\rbaz')
  t.end()
})

test('LF', function (t) {
  t.equal(strip('foo\nbar\nbaz', 1), 'bar\nbaz')
  t.end()
})

test('Mixed line break', function (t) {
  t.equal(strip('foo\r\nbar\nbaz', 1), 'bar\nbaz')
  t.end()
})

test('empty string', function (t) {
  t.equal(strip('', 1), '')
  t.end()
})

test('undefined', function (t) {
  t.equal(strip(undefined, 1), '')
  t.end()
})

test('CRLF (2 lines)', function (t) {
  t.equal(strip('foo\r\nbar\r\nbaz', 2), 'baz')
  t.end()
})

test('CR (2 lines)', function (t) {
  t.equal(strip('foo\rbar\rbaz', 2), 'baz')
  t.end()
})

test('LF (2 lines)', function (t) {
  t.equal(strip('foo\nbar\nbaz', 2), 'baz')
  t.end()
})

test('Mixed line break (2 lines)', function (t) {
  t.equal(strip('foo\r\nbar\nbaz', 2), 'baz')
  t.end()
})

test('empty string (2 lines)', function (t) {
  t.equal(strip('', 2), '')
  t.end()
})

test('undefined (2 lines)', function (t) {
  t.equal(strip(undefined, 2), '')
  t.end()
})
