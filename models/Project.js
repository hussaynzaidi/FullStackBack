// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed', 'cancelled', 'draft'],
    default: 'ongoing',
  },
  nextMilestone: {
    type: Date,
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
