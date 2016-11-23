const gulp = require('gulp');
const del = require('del');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const usemin = require('gulp-usemin');

const htmlPath = 'src/*.html';
const lessPath = 'src/less';
const dest = 'dist';

gulp.task('clean', function() {
	return del([dest]);
});

gulp.task('build', ['clean'], function() {
	return gulp.src(htmlPath)
		.pipe(usemin({
			less: [ sourcemaps.init(), 'concat', less({paths: [lessPath]}), postcss([]), sourcemaps.write('.') ]
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('default', ['build']);
