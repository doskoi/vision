// app/controller/stock.js
'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async index() {
    const result = await this.service.stock.allStocks();
    const changes = await this.service.stock.changes(result);

    this.ctx.body = changes;
  }


}

module.exports = StockController;
