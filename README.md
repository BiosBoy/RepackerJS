# RepackerJS

How to use:
  - Just go to the folder with HTML files to parse and run the CLI command then: `yarn parse {your_upload_path} {your_target_path} {pattern:some_pattern} {flags:some_flags}`.

  Example:
    `yarn parse full_path_from/folder_from_upload full_path_to/folder_to_upload 'pattern:(<div.*?\/>)|(<span.*?\/>)' flags:im`

  FAQ:
   - What flags are reqired here?
   - Just only two: `folder_from_upload` and `folder_to_upload`, the last couple is non-required and can use constants inside.