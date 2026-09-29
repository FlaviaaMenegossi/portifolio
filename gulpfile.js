const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

// Paths
const paths = {
    scss: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist'
    },
    img: {
        src: 'src/img/**/*',
        dest: 'dist/img'
    }
};

// Sass task
function styles() {
    return gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
}

// Scripts task
function scripts() {
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
}

// HTML task
function html() {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Images task
function images() {
    return gulp.src(paths.img.src, { encoding: false })
        .pipe(gulp.dest(paths.img.dest))
        .pipe(browserSync.stream());
}

// Watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.scss.src, styles);
    gulp.watch(paths.js.src, scripts);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.img.src, images);
}

// complex tasks
const build = gulp.series(gulp.parallel(styles, scripts, html, images));
const dev = gulp.series(build, watch);

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.images = images;
exports.build = build;
exports.default = dev;
