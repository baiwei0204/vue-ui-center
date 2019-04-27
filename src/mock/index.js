const Mock = require('mockjs');
import Summary from './lib/summary'
Mock.setup({
    timeout: 1000
})
Mock.mock(/\/api\/()\/*\w*\/*\w*/, 'get', Summary)
