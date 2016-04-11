'use strict';

var fs = require('fs');


var registerPlugins = function (server) {

  var plugins = [
    require('inert'),
    require('vision'),
    require('./socketio')
  ];

  var goodOptions = {
    reporters: [{
      reporter: require('good-console'),
      events: { log: '*', response: '*' }
    }]
  };

  plugins.push({
    register: require('good'),
    options: goodOptions
  });

  plugins.push({
    register: require('hapi-redirects'),
    options: {
      redirects: {
        '/pdf/AgileInASentence.pdf': '/resources/agile-in-a-sentence.pdf',
        '/pdf/AgileandLean.pdf': '/resources/agile-and-lean.pdf',
        '/pdf/AgileFramework.pdf': '/resources/agile-framework.pdf',
        '/pdf/Alacrity%20Johannesburg%20Event%20Invitation.pdf': '/resources/Alacrity-johannesburg-event-invitation.pdf',
        '/pdf/CodeMetrics.pdf': '/resources/code-metrics.pdf',
        '/pdf/InterviewQuestions.pdf': '/resources/interview-questions.pdf',
        '/pdf/Kanban.pdf': '/resources/kanban.pdf',
        '/pdf/MetricPlanningSheet.pdf': '/resources/metric-planning-sheet.pdf',
        '/pdf/PostTrainingCommitment.pdf': '/resources/post-training-commitment.pdf',
        '/pdf/PracticalPrioritization.pdf': '/resources/practical-prioritization.pdf',
        '/pdf/Scrum.pdf': '/resources/scrum.pdf',
        '/pdf/XPPlanningFeedbackLoops.pdf': '/resources/xp-planning-feedback-loops.pdf'
      }
    }
  });

  server.register(plugins, function (err) {
    if (err) {
      throw err;
    }
  });

};

module.exports = registerPlugins;
