// app/controller/stock.js
'use strict';

// const Controller = require('egg').Controller;

// class StockController extends Controller {
//   async index() {
//     const result = yield ctx.model.Stock.find({});
//     ctx.body = result;
//   }
// }

// module.exports = StockController;

exports.index = function* (ctx) {
    console.log(ctx.model.Stock);
    ctx.body = yield ctx.model.Stock.find({});
}