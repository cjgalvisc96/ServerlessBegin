const EasyGraphQLTester = require("easygraphql-tester");
const fs = require("fs");
const path = require("path");

const schemaCode = fs.readFileSync(
  path.join(__dirname, "schema", "schema.js"),
  "utf8"
);
const tester = new EasyGraphQLTester(schemaCode);

const query = `
  {
    user(id: "12343"){
        id
        name
    }
  }
`;
tester.test(true, query);
