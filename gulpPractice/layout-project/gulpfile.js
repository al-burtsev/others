const { parallel, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');


const sassCompile = (done) => {
    console.log('Compile SASS to CSS');

    done();
};

const pugCompile = (done) => {
    console.log('Compile Pug to HTML');

    done();
};

const imagesOptimize = (done) => {
    console.log('Optimize Images');

    done();
};

const copyFile = () => {
    return src('src/sass/app.scss')
        .pipe(dest('build/styles'));
};

const copyScss = () => {
    return src(['src/**/*.scss', '!src/project/**'])
        .pipe(dest('build/styles'));
};

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('src/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/css/'))
        .pipe(browserSync.stream());
}

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('src/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
}

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });

    watch('src/**/sass/*.scss', buildSass);
    watch('src/pages/*.pug', buildPug);
};

const stylesConcat = () => {
    return src('build/css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(dest('build/css'));
}


const watchers = () => {
    watch('src/sass/app.scss', (done) => {
        console.log('Ой, файл app.scss изменился');

        done();
    });
};


exports.default = parallel(sassCompile, pugCompile, imagesOptimize);
exports.server = browserSyncJob;
exports.build = series(buildPug, buildSass, stylesConcat, browserSyncJob);
exports.copy = copyFile;
exports.copyScss = copyScss;
exports.layoutCompile = parallel(sassCompile, pugCompile);
exports.assetsOptimize = imagesOptimize;
exports.watchers = watchers;
