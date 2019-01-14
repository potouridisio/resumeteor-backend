const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Mutation {
    createResume(resume: ResumeInput!): Resume
    updateResume(id: ID!, resume: ResumeInput!): Resume
  }

  type Query {
    resume(id: ID!): Resume
    resumes: [Resume!]!
  }

  type Resume {
    address: String
    createdAt: String
    email: String
    firstName: String
    headline: String
    id: ID
    lastName: String
    phone: String
    summary: String
    updatedAt: String
  }

  input ResumeInput {
    address: String
    email: String
    firstName: String
    headline: String
    lastName: String
    phone: String
    summary: String
  }
`;

module.exports = typeDefs;
