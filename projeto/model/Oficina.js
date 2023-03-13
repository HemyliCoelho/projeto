const mongoose = require("../config/conexao");

const oficinaSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  endereco: String,
  proprietario: String,
  cnpj: String,
});

const oficina = mongoose.model("oficina", oficinaSchema);

module.exports = oficina;
