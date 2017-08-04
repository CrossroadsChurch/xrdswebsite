# DESIGN CONSIDERATIONS

## Build System Requirements
I would like to have the following supported:
- SASS
- Javascript
- Templated HTML 
    - Jade?
    - Liquid?
    - Handlebars?
- Node Based .... try to avoid Jekyll & Ruby as I have had too many issues with keeping specific versions from breaking 
- GitHub based hosting
- Travis CI to manage build from repository
- Ideally Jekyll compatible so that HTML/md files can be edited by user using (forestry.io)[http://forestry.io]

## Build System
I have chosen XXXXX as the static site compiler for the project

## Workflow
### User Workflow
1. User logs into (forestry.io)[http://forestry.io], selects page and commits edits. 
2. Forestry then pushes commits to GitHub *master* branch
3. (Travis CI)[http://travis-ci.org] notices the change and performs build committing to gh-pages branch in the _site directory which is automatically published by GitHub.

### Developer Workflow
The workflow for the developer is similar but uses Cloud9 as a development IDE. 

Developer uses *GitFlow* for managing changes in seperate branches. Finalised changes are pushed to *master* and the background build process is used for release.

Commits go into the same build process as above.
