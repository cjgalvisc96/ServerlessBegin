const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
// Globals
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

//DB
mongoose.connect(
  "mongodb://admin:admin.96@ds263917.mlab.com:63917/graphql_aws",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connection Success");
});

// Routes
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);
// Server
app.listen(port, () => {
  console.log("Run in http://localhost:" + port);
});
