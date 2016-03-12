/*global rebuildPivotTable*/

dojoConfig = {
    async: 1,
    baseUrl: 'brightsea/dojo/'
};

document.getElementsByTagName('body')[0].className += ' claro';

require('script!./bower_components/webpivottable/public/brightsea/wpt.js');
require('script!./wpt-wrapper.js');

function WebPivotTable(id, options) {
    var webPivotTable = rebuildPivotTable(id, options);
    return webPivotTable;
}

module.exports = WebPivotTable;