# RepackerJS - Parse files on NodeJS easly!  [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See&url=https://github.com/BiosBoy/coconat&via=svyat770&hashtags=js,jsx,pareser,RepackerJS,html,css)
### Make file parsing with happy and fun!

[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/BiosBoy/coconat/blob/master/LICENSE)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BiosBoy/coconat/blob/master/LICENSE)
[![GitHub package version](https://img.shields.io/badge/version-1.1.0-green.svg)](https://github.com/BiosBoy/coconat)

![logo_image](https://github.com/BiosBoy/RepackerJS/blob/master/logo.png)

How to use:
  - Just go to the folder with HTML files to parse and run the CLI command then: `yarn parse {your_upload_path} {your_target_path} {pattern:some_pattern} {flags:some_flags}`.

  Example:
    `yarn parse full_path_from/folder_from_upload full_path_to/folder_to_upload 'pattern:(<div.*?\/>)|(<span.*?\/>)' flags:im`

  FAQ:
   - What flags are reqired here?
   - Just only two: `folder_from_upload` and `folder_to_upload`, the last couple is non-required and can use constants inside.
