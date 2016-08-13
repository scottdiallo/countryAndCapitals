//making api call to geonames

angular.module('DataServices', [])

.factory('dataFactory', ['$http', '$route', '$q', function ($htpp, $route, $q) {

    var username = "scottdiallo";
    var urlBase = "http://api.geonames.org/";

    return {
        getCountries: function () {
            var defer = $q.defer();
            var url = urlBase + "countryInfoJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                username: username
            };

            $htpp({
                method: 'JSONP',
                url: url,
                params: request,
                cache: true
            })

            .success(function (data status, headers, config) {
                if (typeof data.status == 'object') {
                    console.log("Error'" + data.status.message + "'");
                    defer.reject(data.status);
                } else {
                    defer.resolve(data);
                }
            })

            .error(function (data, status, headers, config) {
                console.log(status + " error attempting to access geonames.org");
                defer.reject();
            });
            return defer.promise;
        },

        getCountry: function (countryCode) {
            var defer = $q.defer();
            var url = urlBase + "countryInfoJSON";
            var request = {
                callback: 'JSON_CALLBACK',
                country: countryCode,
                username: username
            };
            $http({
                method: 'JSONP',

            })

        }

    })
}
}

}])
