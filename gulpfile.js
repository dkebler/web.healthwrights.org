// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass = require('gulp-sass');
var bower = require('gulp-bower');

var config = {
     sassPath: './framework/scss',
     bowerDir: './framework/bower_components' ,
    cssPath:  './static/framework/css'
}

// Bower
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});


gulp.task('sass', function() { 
    return gulp.src(config.sassPath + '/sitestyle.scss')
         .pipe(sass({
              sourceComments: 'map',
  //           style: 'compressed',
              errLogToConsole: true,
             includePaths: [
                 config.sassPath,
                 config.bowerDir + '/foundation/scss/',
                config.bowerDir + '/foundation/scss/foundation/components/'
              ]
         }) )
         .pipe(gulp.dest(config.cssPath)); 
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);