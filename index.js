require('./wpt.less');

require('script!jquery/dist/jquery.min.js');
require('script!highcharts-release/highcharts.js');
require('script!highcharts-release/highcharts-3d.js');
require('script!highcharts-release/highcharts-more.js');
require('script!./lib/grouped_categories/grouped-categories.js');
require('jszip');
require('script!xlsx/dist/ods.js');
require('script!xlsx/dist/xlsx.min.js');

function requireAll(r) { r.keys().forEach(r); }
requireAll(
    require.context(
        'file?name=[path][name].[ext]&context=./!./static',
        true,
        /.*/));

module.exports = require('./web-pivot-table.js');