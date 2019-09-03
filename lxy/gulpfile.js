// const gulp = require('gulp')
// const fileinclude = require('gulp-file-include')//共同部分写入
// const watch = require('gulp-watch')
// const runSequence = require('run-sequence')
// gulp.task('html', function () {
//   return gulp
//     .src('./src/pages/**')
//     .pipe(fileinclude({
//       prefix: '@_@', // 自定义一个标识符，当他解析的时候，解析到这个标识符了，会按照 file-include 的规则解析
//       basepath: './src/components', // 去哪里找你的片段
//     }))
// })

// gulp.task('watch', function () {
//   watch('./src/pages', function () {
//     gulp.start('html')
//   })
// })

// gulp.task('default', function () {
//   // 逐步骤完成我指定的任务
//   runSequence(
//     ['html'],
//     ['watch']
//   )
// })