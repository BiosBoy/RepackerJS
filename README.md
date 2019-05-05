# RepackerJS - Parse files via NodeJS easly!  [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See&url=https://github.com/BiosBoy/coconat&via=svyat770&hashtags=js,jsx,pareser,RepackerJS,html,css)
### Make file parsing with happy and fun!

[![npm](https://badgen.net/npm/v/repackerjs)](https://www.npmjs.com/package/repackerjs)
[![Price](https://img.shields.io/badge/price-FREE-purple.svg)](https://github.com/BiosBoy/repackerJS/blob/master/LICENSE)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BiosBoy/repackerJS/blob/master/LICENSE)
[![GitHub package version](https://img.shields.io/badge/version-1.1.8-green.svg)](https://github.com/BiosBoy/repackerJS)

![logo_image](https://raw.githubusercontent.com/BiosBoy/RepackerJS/master/logo.png)


## Motivation
 Every one of use doesn't like to do/repeat routine tasks. Especially in case of a data transferring for a large pack of files. If this is so boring for you too (as for me) this is what you need! With **RepackerJS** you'll have an opportunity to cut/get any data from the file and insert it inside another one in a few clicks by just CLI command. The most interesting that you can use it for a large pack of the files without recursively! For more info check out the example below, please.

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
  `npm run repackerjs` or `yarn repackerjs` with the next flags `{your_upload_path} {insert:your_path_to_file_template} {pattern:some_pattern_for_match} {flags:some_flags_for_match}`

  ### Example:
    `yarn repackerjs /Users/developer0ne/Desktop/ insert:/Users/developer0ne/project/fileTemplate.ts 'pattern:(<div.*?\/>)|(<span.*?\/>)' flags:im`
    
![RepackerJS Example](https://raw.githubusercontent.com/BiosBoy/RepackerJS/master/Exemple.gif)

Here you can see how easily we can grab some inner data from the large pack of the SVG icons. Then we put founded by regular expression in data from the document by `pattern:` and `flags` CLI flags inside new one file. AS you see we made it recursively for all files in the folder without any efforts or tears! It's so easy and fun to use. So what are you waiting for? Enjoy it! :)

### API
  
You can run the parser in a various ways, but I suppose most of all would like to run RepackerJS with custom flags anyway. Currently, it includes constants in case of non-provided during CLI run. Lets see what we can use among all them in CLI:
  - `your_upload_path` - aka your folder url. It must contain all files to process. Only this one flag is required.  
  - `insert:` - enables custom ability to set template file to process parsed data from ogirinal one.
  - `pattern:` - allows us to set custom regular expression to process the files data, by cutting data from original in various ways.
  - `flags:` - custom flags for regular expression that makes all work for us. It's very useful when we need to work with non-regular strings: different string-case, multy-strings, etc.). 
   ----
  ### *FAQ:*
   - What flags are reqired during CLI run?
   -- Only the root path (files folder) is required for parsing. All other flags you can use on your own.
