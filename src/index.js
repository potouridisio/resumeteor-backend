const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/type-defs");

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, PORT } = process.env;

(async () => {
  try {
    const app = express();

    app.disable("x-powered-by");

    app.use(cors());

    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true
      }
    );

    const server = new ApolloServer({ resolvers, typeDefs });

    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
