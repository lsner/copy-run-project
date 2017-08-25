/**
 * Created by wanghang on 2017/4/19.
 */
let gulp = require('gulp');
let ftp = require('vinyl-ftp');
let util = require('gulp-util');
// let resolveCwd = require("../resolveCwd");
let path = require("path");
let typedoc = require("gulp-typedoc");

// let projectPkg = require(resolveCwd("package.json"));

/*gulp.task('ftpBeta', function() {
 let conn = ftp.create({
 host: '192.168.102.199',
 user: 'cdn',
 password: 'BingkunCdn',
 log: util.log
 });

 return gulp.src([
 path.join(resolveCwd('__build__'), '/!**!/!*.js*'),
 path.join(resolveCwd('__build__'), '/!**!/!*.css*'),
 path.join(resolveCwd('__build__'), '/!**!/!*.png')
 ],
 { base: "__build__", buffer: false })
 .pipe(conn.dest(projectPkg.name + '/beta'));
 });*/

gulp.task("doc", function () {
	return gulp
		.src(["./packages/node_modules/@pekon/ginny/components/**/*.props.tsx"])
		.pipe(typedoc({
			// TypeScript options (see typescript docs)
			module: "commonjs",
			target: "es6",
			// Output options (see typedoc docs)
			json: "./packages/projects/ginny-site/src/docs/props.json",
			// TypeDoc options (see typedoc docs)
			ignoreCompilerErrors: false,
			version: true,
		}))
});


gulp.task("ftp:wss", function () {
	let conn = ftp.create({
		host: '192.168.102.199',
		user: 'cdn',
		password: 'BingkunCdn',
		log: util.log
	});

	return gulp
		.src(["./__out__/weapp-shop-standard/**/*.*"], {base: "__out__/weapp-shop-standard", buffer: false})
		.pipe(conn.dest("weapp-shop-standard"))
});

gulp.task("ftp:ops", function () {
	let conn = ftp.create({
		host: '192.168.102.199',
		user: 'cdn',
		password: 'BingkunCdn',
		log: util.log
	});

	return gulp
		.src(["./__out__/operation-site/**/*.*"], {base: "__out__/operation-site", buffer: false})
		.pipe(conn.dest("operation-site"))
});

gulp.task("ftp:mbis", function () {
	let conn = ftp.create({
		host: '192.168.102.199',
		user: 'cdn',
		password: 'BingkunCdn',
		log: util.log
	});

	return gulp
		.src(["./__out__/mobile-bi-site/**/*.*"], {base: "__out__/mobile-bi-site", buffer: false})
		.pipe(conn.dest("mobile-bi-site"))
});

gulp.task("ftp:mas", function () {
	let conn = ftp.create({
		host: '192.168.102.199',
		user: 'cdn',
		password: 'BingkunCdn',
		log: util.log
	});

	return gulp
		.src(["./__out__/mobile-audit-site/**/*.*"], {base: "__out__/mobile-audit-site", buffer: false})
		.pipe(conn.dest("mobile-audit-site"))
});

