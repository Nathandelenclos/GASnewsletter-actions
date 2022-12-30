# GASNewsletter Action
***
[![version](https://img.shields.io/badge/Version-1.0.3-vert)](https://github.com/Nathandelenclos/GASNewsletter)

This project is actions for Github actions.

***
## Table of Contents

-  [About](#about)
-  [Inputs](#inputs)
-  [Outputs](#outputs)
-  [Documentation](#documentation)
-  [Languages](#languages)
-  [Contact](#contact)
-  [License](#license)
***

## About
<div id="about"></div>

This project is actions for Github actions. <br>
Its adaptation for request [GASNewsletter](https://github.com/Nathandelenclos/GASNewsletter) with github actions

***


## Inputs
<div id="inputs"></div>

### `base_url`
**Required** Url of your deployment.

### `title`
**Required** Title of your newsletter.

### `subtitle`
**Required** Subtitle of your newsletter.

### `img`
**Required** Address of a image displayed in your newsletter.

### `updateTitle`
**Required** Title of your update.

### `link`
**Required** Link redirect of `Learn more !` button.

### `password`
**Required** Password for access.

***


## Outputs
<div id="outputs"></div>

### `body`

Response body of request.

***

## Example usage
<div id="example"></div>

```yaml
name: GASNewsletter
uses: Nathandelenclos/GASnewsletter-actions@1.0.3
with:
  base_url: 'https://script.google.com/macros/s/AKfycbxa6awnYOz_-13orRJPwPcu78Cf3t5EGS4yGlHkSIXuzn3hMOgASseNCBGd9D6fVSYvfg/exec'
  title: 'Project Update'
  subtitle: ${{ github.event.repository.name }}
  img: 'https://opengraph.githubassets.com/28bc32c10307ac9a91a585056d0e2db0/Nathandelenclos/Nathandelenclos'
  updateTitle: ${{ github.event.head_commit.message }}
  link: 'https://nather.ey.r.appspot.com/'
  password: ${{ secrets.NEWSLETTER_PASSWORD }}
```

***

## Languages
<div id="languages"></div>

[![C](https://img.shields.io/badge/-Javascript-yellow)](https://github.com/dktunited/jetlane-gmao/search?l=javascript)

***

## Contact
<div id="contact"></div>

-  [Nathan DELENCLOS](mailto:nathan.delenclos@epitech.eu) - Developer

***

## License
<div id="license"></div>

[ISC](LICENSE) © Nathan DELENCLOS
