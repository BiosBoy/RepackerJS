# RepackerJS - Parse files on NodeJS easly!  [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=You%20will%20never%20know%20how%20everything%20work%20but%20you%20should%20understand%20the%20system&url=https://github.com/BiosBoy/coconat&via=svyat770&hashtags=js,jsx,pareser,RepackerJS,html,css)
### Make file parsing with happy and fun!

How to use:
  - Just go to the folder with HTML files to parse and run the CLI command then: `yarn parse {your_upload_path} {your_target_path} {pattern:some_pattern} {flags:some_flags}`.

  Example:
    `yarn parse full_path_from/folder_from_upload full_path_to/folder_to_upload 'pattern:(<div.*?\/>)|(<span.*?\/>)' flags:im`

  FAQ:
   - What flags are reqired here?
   - Just only two: `folder_from_upload` and `folder_to_upload`, the last couple is non-required and can use constants inside.
