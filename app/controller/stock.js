// app/controller/stock.js
'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async index() {
    // const result = await this.ctx.model.Stock.find({'code': 300098}).sort({'datetime': -1});
    const result = await this.ctx.model.Stock.aggregate([
      { $sort: { datetime: -1 } },
      { $group: { _id: '$code', doc: { $first: '$$ROOT' } } },
    ]).allowDiskUse(true);

    let stocks = result.map(function(meta) {
      let stock = {'code': meta.doc.code,
                   'chg': (meta.doc.price / meta.doc.last_close - 1) * 100};
    //   console.log(stock);
      return stock;
    });

    this.ctx.body = stocks;
  }
}

module.exports = StockController;
