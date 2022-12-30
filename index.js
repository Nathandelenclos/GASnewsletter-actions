const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');

try {
  const base_url = core.getInput("base_url")
  const title = core.getInput("title")
  const subtitle = core.getInput("subtitle")
  const img = core.getInput("img")
  const updateTitle = core.getInput("update_title")
  const password = core.getInput("password")
  const link = core.getInput("link")
  var options = {
    'method': 'POST',
    'url': `${base_url}?title=${title}&subtitle=${subtitle}&img=${img}&updateTitle=${updateTitle}&link=${link}&time=${(new Date()).toTimeString()}&password=${password}`,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    core.setOutput("body", response.body);
  });
} catch (error) {
  core.setFailed(error.message);
}
