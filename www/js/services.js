angular.module('WordApp.services', [])

/**
 * A semi advanced services that returns some data.
 */
.service('AuthService', function($q, $http, USER_ROLES) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;
 
  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }
 
  function useCredentials(token) {
    username = token.split('.')[0];
    isAuthenticated = true;
    authToken = token;
 
    if (username == 'admin') {
      role = USER_ROLES.admin
    }
    if (username == 'user') {
      role = USER_ROLES.public
    }
 
    // Set the token as header for your requests!
    $http.defaults.headers.common['X-Auth-Token'] = token;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }
 
  var login = function(name, pw) {
    return $q(function(resolve, reject) {
      if ((name == 'admin' && pw == '1') || (name == 'user' && pw == '1')) {
        // Make a request and receive your auth token from your server
        storeUserCredentials(name + '.yourServerToken');
        resolve('Login success.');
      } else {
        reject('Login Failed.');
      }
    });
  };
 
  var logout = function() {
    destroyUserCredentials();
  };
 
  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };
 
  loadUserCredentials();
 
  return {
    login: login,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;}
  };
})
.factory('DataLoader', function($http, $log) {

 return {
  get: function(url) {
   // Simple index lookup
   return $http.get(url);
  }
 }

})

.factory('Bookmark', function(CacheFactory) {

 if (!CacheFactory.get('bookmarkCache')) {
  CacheFactory.createCache('bookmarkCache');
 }

 var bookmarkCache = CacheFactory.get('bookmarkCache');

 return {
  set: function(id) {
   bookmarkCache.put(id, 'bookmarked');
   window.plugins.toast.showShortCenter(
    "Bookmarked",
    function(a) {},
    function(b) {}
   );
  },
  get: function(id) {
   bookmarkCache.get(id);
   console.log(id);
  },
  check: function(id) {
   var keys = bookmarkCache.keys();
   var index = keys.indexOf(id);
   if (index >= 0) {
    return true;
   } else {
    return false;
   }
  },
  remove: function(id) {
   bookmarkCache.remove(id);
   window.plugins.toast.showShortCenter(
    "Removed",
    function(a) {},
    function(b) {}
   );
  }

 }

})

.factory($localstorage',function(['$window') {
 return {
  set: function(key, value) {
  $window.localStorage[key] = value;
   return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
  },
  get: function(key, defaultValue) {
   return $window.localStorage[key] || defaultValue;
  },
  setObject: function(key, value) {
   $window.localStorage[key] = JSON.stringify(value);
  },
  getObject: function(key) {
   return JSON.parse($window.localStorage[key] || '{}');
  }
 }
}]);
