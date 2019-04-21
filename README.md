# RepackerJS - Parse files on NodeJS easly!  [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See&url=https://github.com/BiosBoy/coconat&via=svyat770&hashtags=js,jsx,pareser,RepackerJS,html,css)
### Make file parsing with happy and fun!

[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/BiosBoy/coconat/blob/master/LICENSE)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BiosBoy/coconat/blob/master/LICENSE)
[![GitHub package version](https://img.shields.io/badge/version-1.1.0-green.svg)](https://github.com/BiosBoy/coconat)

![logo_image](https://github.com/BiosBoy/RepackerJS/blob/master/logo.png)


## How to use:
  #### 1. Grab RepackerJS package from `npm` by:
  ```
         npm install repackerjs -g
  ``` 
   ----------or 
  ```
         yarn add repackerjs -g
  ```
  #### 2. Prepeare your files to parse in some folder: 
   - For example: `/Users/developer0ne/Desktop/` .
  #### 3. Run RepackerJS via CLI:
  `npm run parse` or `yarn parse` with the next flags `{your_upload_path} {insert:your_path_to_file_template} {pattern:some_pattern_for_match} {flags:some_flags_for_match}`

  ### Example:
    `yarn parse /Users/developer0ne/Desktop/ insert:/Users/developer0ne/project/fileTemplate.ts 'pattern:(<div.*?\/>)|(<span.*?\/>)' flags:im`

   ----
  ### *FAQ:*
   - What flags are reqired during CLI run?
   -- Only the root path (files folder) is required for parsing. All other flags you can use on your own.
