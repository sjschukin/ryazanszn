var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var themeRoot = "web/themes/blondytan2/";

gulp.task('sass', function(done) {
    gulp.src(themeRoot + "styles/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(themeRoot + 'styles/css'))
        .pipe(browserSync.reload({stream: true}));

    done();
});

gulp.task('browser-sync', function(done) {
    //watch files
    var files = [
        themeRoot + "styles/css/*.css",
        themeRoot + "js/*.js",
        themeRoot + "images/**/*",
        themeRoot + "templates/**/*.twig"
    ];
    //initialize browsersync
    browserSync.init(files, {
        proxy: "dev.upr.ryazanszn.ru"
    });

    //browserSync.watch("web/").on('change', reload);

    done();
});

gulp.task('watch', function() {
    gulp.watch(themeRoot + "styles/scss/**/*.scss", gulp.series('sass'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
