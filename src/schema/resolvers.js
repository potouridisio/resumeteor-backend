const Resume = require("../models/resume");

const resolvers = {
  Mutation: {
    createResume: async (parent, args) => await Resume.create(args.resume),
    updateResume: async (parent, args) =>
      await Resume.findByIdAndUpdate(args.id, args.resume, {
        new: true
      })
  },
  Query: {
    resume: async (parent, args) => await Resume.findById(args.id),
    resumes: async () => await Resume.find()
  }
};

module.exports = resolvers;
