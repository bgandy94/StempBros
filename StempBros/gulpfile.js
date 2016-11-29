/// <binding />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    ts = require("gulp-typescript"),
    tsconfig = require("./tsconfig"),
    sourcemaps = require("gulp-sourcemaps"),
    del = require("del");


var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css",
    libs: webroot + "libs"
};

/*<START>
----------------------------Tasks written for this project---------------------------
*/
gulp.task('compile', function () {
    return gulp
      .src(['./src/**/*.ts*'])
      .pipe(sourcemaps.init())
      .pipe(ts(tsconfig.compilerOptions))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./app/"));
});

gulp.task("dev-compile", ["copy-nonjs", "compile"]);

gulp.task('copy-nonjs', function () {
    return gulp.src('./src/**/*.{html,css}')
    .pipe(gulp.dest('./app/'));
});

gulp.task("watch", function () {
    gulp.watch(['./src/**/*.ts*', './src/**/*.html'], ["dev-compile"]);
});

gulp.task("clean-app", function () {
    del(["./app/**", "./src/**/*.js*"]);
});

gulp.task("clean-libs", function () {
    del(["./wwwroot/libs/**"]);
});

gulp.task("copy-all", ["copy-libs", "copy-typings", "copy-css"]);

gulp.task("copy-libs", () => {
    gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'
    ],
        {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("./wwwroot/libs"));
});
gulp.task("copy-css", () => {
    gulp.src(["node_modules/bootstrap/dist/css/bootstrap.css"]).pipe(gulp.dest("./wwwroot/css"));

});

gulp.task("copy-typings", () => {
    gulp.src("./typings/globals/es6-shim/index.d.ts")
        .pipe(gulp.dest("./wwwroot/libs/typings/es6-shim/"));
});

/*<END>
----------------------------Tasks written for this project---------------------------
*/


gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);