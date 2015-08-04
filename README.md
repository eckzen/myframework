# **My Front End Framework**

###Install Gulp in the directory

	npm install gulp --save-dev

###Run this command
	
	npm init
	
####For Ubuntu

    npm install gulp-uglify gulp-imagemin gulp-ruby-sass gulp-sourcemaps gulp-autoprefixer gulp-plumber gulp-concat imagemin-pngquant --save-dev

    npm install --save imagemin-pngquant
    
####For Windows

    npm install gulp-uglify gulp-imagemin gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-plumber gulp-concat imagemin-pngquant --save-dev

    npm install browser-sync --save-dev

####Installed Globally in Windows

        npm install -g browser-sync

* gulp = require('gulp')
* sass = require('gulp-sass')
* uglify = require('gulp-uglify')
* rename = require('gulp-rename')
* notify = require('gulp-notify')
* minifycss = require('gulp-minify-css')
* concat = require('gulp-concat')
* plumber = require('gulp-plumber')
* browserSync = require('browser-sync')
* reload = browserSync.reload
* prefix = require('gulp-autoprefixer')
* imagemin = require('gulp-imagemin')
* pngquant = require('imagemin-pngquant')