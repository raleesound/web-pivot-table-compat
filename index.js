require('./bower_components/webpivottable/public/brightsea/wpt/wpt.css');
require('./bower_components/webpivottable/public/brightsea/wpt/wptReport.css');

require('./wpt.css');

require('script!./bower_components/webpivottable/public/lib/jquery/dist/jquery.min.js');
require('script!./bower_components/webpivottable/public/lib/highcharts-release/highcharts.js');
require('script!./bower_components/webpivottable/public/lib/highcharts-release/highcharts-3d.js');
require('script!./bower_components/webpivottable/public/lib/highcharts-release/highcharts-more.js');
require('script!./bower_components/webpivottable/public/lib/grouped_categories/grouped-categories.js');
require('script!./bower_components/webpivottable/public/lib/jszip/jszip.min.js');
require('script!./bower_components/webpivottable/public/lib/js-xlsx/dist/ods.js');
require('script!./bower_components/webpivottable/public/lib/js-xlsx/dist/xlsx.min.js');

function requireAll(r) { r.keys().forEach(r); }
requireAll(
    require.context(
        'file?name=[path][name].[ext]&context=./node_modules/web-pivot-table-compat/bower_components/webpivottable/public!./bower_components/webpivottable/public/brightsea',
        true,
        /.*/));

module.exports = require('./web-pivot-table.js');