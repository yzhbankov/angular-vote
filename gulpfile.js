/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');
var gls = require('gulp-live-server');

//server
gulp.task('start', function(){
    gulp.src('app')
        .pipe(server({
            livereload:true,
            directoryListening: true,
            open: true
        }));
});

// start express server
gulp.task('server-start', function(){
    var server = gls.new('server.js');
    return server.start();
});

//style
gulp.task('style', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 15 versions']
        }))
        .pipe(gulp.dest('app/css'));
});

//build production files
gulp.task('build', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

//watch
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['style'])
});

gulp.task('default', ['start', 'server-start', 'watch']);
