const {
	src,
	dest
} = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');
const plumber = require('gulp-plumber');

module.exports = function rastr() {
	return src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico|webp)')
		.pipe(plumber())
		.pipe(changed('build/img'))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 2,
			},
			[
				recompress({
					loops: 6,
					min: 95,
					max: 95,
					quality: 'veryhigh',
					use: [pngquant({
						quality: [1, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(dest('build/img'))
		.pipe(bs.stream())
}