# Hello world JavaScript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log. To learn how this action was built, see "[Creating a JavaScript action](https://help.github.com/en/articles/creating-a-javascript-action)" in the GitHub Help documentation.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@main
with:
  base_url:
    description: 'base url of gas project'
    required: true
  title:
    description: 'Title of newsletter'
    required: true
  subtitle:
    description: 'Subtitle of newsletter'
    required: true
  img:
    description: 'Image in newsletter'
    required: true
  updateTitle:
    description: 'Title of this update'
    required: true
  link:
    description: 'link redirect of learn more button'
    required: true
  password:
    description: 'password for access'
    required: true
```
