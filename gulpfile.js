var gulp = require('gulp'); 
var sass = require('gulp-ruby-sass'); 
// var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

/* Setup scss path */
var paths = {
    scss: '_/sass/*.scss'
};

/* Scripts task */
gulp.task('scripts', function() {
  return gulp.src([
    /* Add your JS files here, they will be combined in this order */
    '_/js/bootstrap.js',
    '_/js/jquery.js',
    '_/js/myscript.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('_/components/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('_/components/js'));
});

/* Sass task */
gulp.task('sass-style', function () {
    return sass('_/sass/style.scss', {container: 'gulp-ruby-sass-style'})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('_/css/style'));
});

gulp.task('sass-bootstrap', function () {
    return sass('_/sass/bootstrap.scss', {container: 'gulp-ruby-sass-bootstrap'})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('_/css/bootstrap'));
});

gulp.task('sass', ['sass-style', 'sass-bootstrap']);
// gulp.task('sass', function () {  
//     gulp.src([
//         '_/sass/style.scss',
//         '_/sass/bootstrap.scss'
//     ])
//     .pipe(plumber())
//     .pipe(prefix('last 2 versions'))
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('_/css/'))
//     .pipe(browserSync.stream());
   

//     gulp.task('sass', function () {
//       gulp.src('_/sass/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.init())
//           .pipe(sass())
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('_/css'));
//     });
     
//     gulp.task('sass:watch', function () {
//       gulp.watch('_/sass/*.scss', ['sass']);
//     });

   
      
    // .pipe(sass({
    //     includePaths: ['sass'].concat/*(neat)*/
    // }))
    // .pipe(gulp.dest('_/css/style.css'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(minifycss())
    // .pipe(gulp.dest('_/components/css'))
    // /* Reload the browser CSS after every change */
    // .pipe(reload({stream:true}));
// });

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/style.scss', ['sass']);
// });



/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['_/css/*.css', '_/js/*.js'], {
       ui: {
           port: 80
       }
        
    });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['sass', 'browser-sync'], function () {
    /* Watch scss, run the sass task on change. */
    gulp.watch(['_/sass/*.scss', '_/sass/**/*.scss'], ['sass'])
    /* Watch app.js file, run the scripts task on change. */
    gulp.watch(['_/js/myscript.js'], ['scripts'])
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['*.php'], ['bs-reload']);
});