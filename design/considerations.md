# DESIGN CONSIDERATIONS

A static site system will be used to build and maintain the website to increase speed, reliability and security. 

## Mobile or Desktop First
Although the majority of traffic is now mobile. I still develop for a desktop first design with mobile first navigation.

The reasons for this are:

1. A lot of mobile devices (all Apple iPads, and all Iphones from version 5 upwards, most recent Samsung Phones and most Android non-budget tablets) support resolutions of 1280 or even 1920 width in landscape.
2. With the exception of navigation mobiel devices in landscape are little different 
3. I only write with HTML5, CSS3 and Javascript (with transpiling and templating) and don't use non-mobile friendly technology
4. Mobile first designs often look ridiculous on laptops or desktops and you end up redesigning for desktop anyway ... You can always have two designs in a single page hidden by CSS if absolutely necessary.

## Free Running
Where possible I look to free hosting to remove running costs.

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
