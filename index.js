const core = require('@actions/core');
const request = require('request');

try {
  const options = {
    'method': 'POST',
    'url': core.getInput("base_url"),
    'headers': {
    },
    formData: {
      'title': core.getInput("title"),
      'subtitle': core.getInput("subtitle"),
      'img': core.getInput("img"),
      'updateTitle': core.getInput("update_title"),
      'link': core.getInput("link"),
      'time': (new Date()).toTimeString(),
      'password': core.getInput("password")
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    core.setOutput("body", response.body);
  });
} catch (error) {
  core.setFailed(error.message);
}
