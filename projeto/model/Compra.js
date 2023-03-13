const mongoose = require("../config/conexao");

const compraSchema = new mongoose.Schema({
  peca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "peca",
  },
  quantidade: Number,
  precoTotal: Number,
  precoPeca: Number,
  comprador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "oficina",
  },
});

const compra = mongoose.model("compra", compraSchema);

module.exports = compra;
