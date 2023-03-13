const mongoose = require("mongoose");
const banco =
  "mongodb://Hemyli:batataeS2@ac-odltz8p-shard-00-00.eqh4qjm.mongodb.net:27017,ac-odltz8p-shard-00-01.eqh4qjm.mongodb.net:27017,ac-odltz8p-shard-00-02.eqh4qjm.mongodb.net:27017/?ssl=true&replicaSet=atlas-enzqec-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(banco);

module.exports = mongoose;
