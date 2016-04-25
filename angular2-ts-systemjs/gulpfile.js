var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var merge = require('merge2');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});

// gulp.task('js', function() {
//     var tsResult = tsProject.src()     
//       .pipe(ts(tsProject));
    
//     return tsResult.js
//       .pipe(rename({dirname: ''}))
//       .pipe(gulp.dest('dist/'));
// });

var conf = buildConf();

function buildConf(){
  var dest = 'dev';
  var src = 'src';
  return {
    src: {
      dir: src,
      js: src + '/js/**/*.ts',
      libs: [
        'node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/systemjs/dist/system-csp-production.src.js',
        'node_modules/systemjs/dist/system.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/angular2/bundles/angular2.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-shim/es6-shim.map',
      ],
      css: src + '/**/*.scss',
      html: src + '/**/*.html',
    }
    dest: {
      dir: dest,
      js: dest + '/js',
      dts: dest + '/dts',
      css: dest + '/css',
      html: dest,
    }
  }
}

gulp.task('js', function() {
    var tsResult = gulp.src(conf.src.js)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(conf.dest.js))

    // return merge([
    //     tsResult.dts.pipe(gulp.dest(conf.dest.js)),
    //     tsResult.js.pipe(gulp.dest(conf.dest.js))
    // ]);
});

gulp.task('html', function () {
    return gulp.src(conf.src.html)
        .pipe(gulp.dest(conf.dest.html));
});

gulp.task('clean', function(done) {
  del(conf.dest.dir, done);
});

gulp.task('libs', function () {
    return gulp
      .src(conf.src.libs)
      .pipe(gulp.dest(conf.dest.js));
});

gulp.task('css', function () {
  return gulp.src(conf.src.cssApp)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.dest.css));
});

gulp.task('webserver', function() {
  gulp.src(conf.dest.dir)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('watch', ['js','css'], function() {
    gulp.watch(conf.src.js, ['js']);
    gulp.watch(conf.src.css, ['css']);
});

gulp.task('serve', function(done) {
  runSequence('build', 'watch', 'webserver', done)
});

gulp.task('build', function(done) {
  runSequence( 'html', 'css', 'libs', 'js', done);
});

gulp.task('default', ['build']);


