How to start working with project.

0. You need node.js and gulp already installed
1. Open cmd and go to the projects folder
2. Run npm i -g npm-check-updates to install update module (if EACESS error run with sudo)
3. Run ncu -u to update package.json modules for latest version
4. Run npm i to install all gulp dependencies
5. Run gulp to clean dist folder, build the new project, run local server and start watching changes
5.2 Run gulp build to build project
5.3 Run gulp watch to watch changes
5.4 Run gulp html:build to build only html files
5.5 Run gulp css:build to build only css files
5.6 Run gulp fonts:build to build only fonts
5.7 Run gulp image:build to build only images
5.8 Run gulp clean to delete dist folder
