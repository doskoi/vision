// app/controller/stock.js
'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async index() {
    const result = await this.ctx.model.Stock.find({});
    this.ctx.body = result;
  }
}

module.exports = StockController;

// exports.index = function* (ctx) {
//     ctx.body = yield ctx.model.Stock.find({});
// }