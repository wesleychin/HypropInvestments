angular.module('starter').filter('listfilter',[ function () {
    return function(items, searchText) {
        var filtered = [];            

        angular.forEach(items, function(item) {
            var dateString = item.pubDate.toString();
            if( dateString.indexOf(searchText) >= 0 ) filtered.push(item);
        });
        return filtered;
    };
}]);