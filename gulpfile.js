var gulp         = require('gulp');
var pump         = require('pump');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var del          = require('del');

gulp.task('sass', function(cb) {
	pump([
			gulp.src('app/components/sass/main.sass'),
			sass(),
			autoprefixer(),
			gulp.dest('app/css'),
			browserSync.reload({ stream: true })
		],
		cb
	);
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
		},
		notify: false,
	});
});

gulp.task('jsLib', function(cb) {
	pump([
			gulp.src([
					// libraries
					'node_modules/jquery/dist/jquery.min.js',
					'node_modules/slick-carousel/slick/slick.min.js',
					'node_modules/moment/min/moment.min.js',
					'node_modules/popper.js/dist/umd/popper.min.js',
					'node_modules/bootstrap/dist/js/bootstrap.min.js',
					'node_modules/angular/angular.min.js',
				]),
			concat('libs.min.js'),
			uglify(),
			gulp.dest('app/js')
		],
		cb
	);
});

gulp.task('jsApp', function(cb) {
	pump([
			gulp.src([
					// custom
					'app/js/app/**/*.js',
					'app/components/blocks/jmedia/index.js',
					'app/components/blocks/jcounter/index.js',

					// APP ANGULAR
					// application
					'app/js/app.js',

					// config
					'app/js/shared/config/config.js',

					// services
					'app/js/shared/services/promotions.js',
					'app/js/shared/services/services.js',
					'app/js/shared/services/medialist.js',
					'app/js/shared/services/notification.js',

					// directives
					'app/js/shared/directives/slick.js',
					
					// controllers
					'app/js/components/promotions/controller.js',
					'app/js/components/services/controller.js',
					'app/js/components/media/controller.js',
					'app/js/components/feedback/controller.js',
				]),
			concat('app.min.js'),
			// uglify(),
			gulp.dest('app/js')
		],
		cb
	);
});

gulp.task('watch', ['browser-sync', 'sass', 'jsLib', 'jsApp'], function() {
	gulp.watch('app/components/**/*.+(scss|sass)', ['sass']);

	gulp.watch('app/components/**/*.js', ['jsApp']);
	gulp.watch('app/js/**/*.js', ['jsApp']);

	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('build', ['clean', 'sass', 'jsLib'], function() {
	var buildCss = gulp.src([
			'app/css/main.css',
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);