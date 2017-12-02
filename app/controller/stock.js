// app/controller/stock.js
'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async index() {
    const result = await this.ctx.model.Stock.aggregate([
        { $sort: { code : 1, datetime: -1 } },
        { $group: { _id: "$code", doc: { $first: "$$ROOT" } } }
      ]).allowDiskUse(true);
    
    this.ctx.body = result;
  }
}

module.exports = StockController;
