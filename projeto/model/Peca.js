const mongoose = require("../config/conexao");

const pecaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  fabricante: String,
  cod: String,
  preco: Number,
});

const peca = mongoose.model("peca", pecaSchema);

module.exports = peca;
