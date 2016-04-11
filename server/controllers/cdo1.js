'use strict';

exports.index = {
  handler: function (request, reply) {
    reply.view(
      'cdo1/index',
      {name: 'world!'}
    );
  }
};

