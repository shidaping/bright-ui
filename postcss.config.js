console.log('111111111111111111111111111111');
module.exports = {
  // parser: 'postcss-strip-inline-comments',
  plugins: [
    require('autoprefixer')({browsers: ['last 2 versions']}),
  ],
};
