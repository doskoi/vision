'use strict';

const Service = require('egg').Service;

class StockService extends Service {
  async allStocks() {
    // const result = await this.ctx.model.Stock.find({'code': 300098}).sort({'datetime': -1});
    const stocks = await this.ctx.model.Stock.aggregate([
      { $sort: { datetime: -1 } },
      { $group: { _id: '$code', doc: { $first: '$$ROOT' } } },
    ]).allowDiskUse(true);
    return stocks;
  }

  async changes(originalStocks) {
    const stocks = originalStocks.map(function(meta) {
      const stock = Object.create(null);
      if (meta.doc.price) {
        stock.code = meta.doc.code;
        stock.chg = ((meta.doc.price / meta.doc.last_close - 1) * 100).toFixed(2);
        return stock;
      }
    });
    return stocks.filter(n => n !== undefined);
  }

  async glance(originalStocks) {
    const changes = await this.changes(originalStocks);
    // console.log(changes);
    const statistics = Object.create(null);
    for (const val of changes) {
      const chg = (val.chg.split('.')[0] !== '-0') ? val.chg.split('.')[0] : '0';
      if (statistics[chg]) {
        statistics[chg] += 1;
      } else {
        statistics[chg] = 1;
      }
    }
    let glances = new Array();
    for (const k in statistics) {
      const glance = Object.create(null);
      glance.chg = k;
      glance.num = statistics[k];
      glances.push(glance);
    }
    return glances.sort(function(a, b) {
      return b.chg - a.chg;
    });
  }
}

module.exports = StockService;
