function rebuildPivotTable(id, options) {
    var wpt = null;
    require(["wpt/WebPivotTable", "dijit/registry", "dojo/domReady!"], function (WebPivotTable, registry) {
        var oldWpt = registry.byId(id);
        if (oldWpt) {
            oldWpt.destroyRecursive();
        }
        wpt = WebPivotTable({ customOptions: options }, id);
    });
    return wpt;
}