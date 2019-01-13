const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        minfiy = require('gulp-clean-css');

const defaultSrc = 'UI-MIX/';

gulp.task('css',function(){
    return gulp.src(`${defaultSrc}/*.scss`)
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(minfiy())
    .pipe(gulp.dest('css/'))
})

// gulp.task('grid',function(){
//     return gulp.src(`${defaultSrc}grid.scss`)
//     .pipe(sass())
//     .pipe(minfiy())
//     .pipe(gulp.dest('css/'))
// })

gulp.task('watch',function(){
    gulp.watch(`${defaultSrc}**/*.scss`,gulp.series('css'))
})