// app/model/stock.js
module.exports = app => {
  const mongoose = app.mongoose;
  var Schema = mongoose.Schema;
  const StockSchema = new mongoose.Schema({
    _id: Schema.ObjectId,
    active1: { type: Number },
    active2: { type: Number },
    amount: { type: Number },
    ask1: { type: Number },
    ask2: { type: Number },
    ask3: { type: Number },
    ask4: { type: Number },
    ask5: { type: Number },
    ask_vol1: { type: Number },
    ask_vol2: { type: Number },
    ask_vol3: { type: Number },
    ask_vol4: { type: Number },
    ask_vol5: { type: Number },
    s_vol: { type: Number },
    b_vol: { type: Number },
    bid1: { type: Number },
    bid2: { type: Number },
    bid3: { type: Number },
    bid4: { type: Number },
    bid5: { type: Number },
    bid_vol1: { type: Number },
    bid_vol2: { type: Number },
    bid_vol3: { type: Number },
    bid_vol4: { type: Number },
    bid_vol5: { type: Number },
    cur_vol: { type: Number },
    code: { type: String },
    high: { type: Number },
    low: { type: Number },
    last_close: { type: Number },
    open: { type: Number },
    price: { type: Number },
    vol: { type: Number },
    datetime: { type: Date },
    market: { type: Number }
  });
  
  return mongoose.model('Stock', StockSchema, 'realtime');
};
