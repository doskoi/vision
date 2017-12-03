// app/controller/stock.js
'use strict';

const Controller = require('egg').Controller;

class StockController extends Controller {
  async index() {
    const result = await this.allStocks();
    const changes = await this.changes(result);

    this.ctx.body = changes;
  }

  async allStocks() {
    // const result = await this.ctx.model.Stock.find({'code': 300098}).sort({'datetime': -1});
    const stocks = await this.ctx.model.Stock.aggregate([
        { $sort: { datetime: -1 } },
        { $group: { _id: '$code', doc: { $first: '$$ROOT' } } },
      ]).allowDiskUse(true);
    return stocks;
  }

  async changes(originalStocks) {
    let stocks = originalStocks.map(function(meta) {
        let stock = {'code': meta.doc.code,
                     'chg': ((meta.doc.price / meta.doc.last_close - 1) * 100).toFixed(2)};
      //   console.log(stock);
        return stock;
      });
    return stocks;
  }
}

module.exports = StockController;
