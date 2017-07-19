// Hybrionic WpApp
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'WpApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'WpApp.controllers' is found in controllers.js
angular.module('WordApp', ['ionic', 'WordApp.controllers', 'WordApp.services', 'WordApp.filters', 'WordApp.directives', 'WordApp.config', 'angular-cache', 'angularMoment', 'ionicLazyLoad','starter'])

.run(function($httpBackend){
  $httpBackend.whenGET('http://localhost:8100/valid')
        .respond({message: 'This is my valid response!'});
  $httpBackend.whenGET('http://localhost:8100/notauthenticated')
        .respond(401, {message: "Not Authenticated"});
  $httpBackend.whenGET('http://localhost:8100/notauthorized')
        .respond(403, {message: "Not Authorized"});
 
  $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
 })

  .run(function($ionicPlatform, $state, ONESIGNAL_APP_ID, GOOGLE_PROJECT_NUMBER, $rootScope, $ionicHistory) {
    $ionicPlatform.ready(function() {
        var admobid = {};
        if (/(android)/i.test(navigator.userAgent)) {
            admobid = { // for Android
                banner: 'ca-app-pub-7606760144414883/9902261055'
            };
        } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            admobid = { // for iOS
                banner: 'ca-app-pub-7606760144414883/9902261055'
            };
        } else {
            admobid = { // for Windows Phone
                banner: 'ca-app-pub-7606760144414883/9902261055'
            };
        }

        if (AdMob)
            AdMob.createBanner({
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                autoShow: true
            });

        // Add additional data (data field in the REST API) when you send your notification with yourUrlKey equal to the url you want to navigate to.
        var notificationOpenedCallback = function(jsonData) {
            if (jsonData.additionalData) {
                if (jsonData.additionalData.postid)
                // alert("Notification received:\n" + jsonData.additionalData.postid);
                    $state.go('app.post', {
                    'postId': +jsonData.additionalData.postid
                });
            }
            if (jsonData.additionalData) {
                if (jsonData.additionalData.actionSelected == "id1")
                    $state.go('app.settings');
            }
            if (jsonData.additionalData) {
                if (jsonData.additionalData.actionSelected == "id2" && jsonData.additionalData.postid && jsonData.additionalData.sharelink)
                    window.plugins.socialsharing.share('Check this post here: ', null, null, jsonData.additionalData.sharelink);
            }
        }

        // Update with your OneSignal AppId and googleProjectNumber before running.
        window.plugins.OneSignal.init(ONESIGNAL_APP_ID, {
                googleProjectNumber: GOOGLE_PROJECT_NUMBER
            },
            notificationOpenedCallback);
        // Back button function
        $ionicPlatform.registerBackButtonAction(function(e) {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                window.plugins.toast.showShortBottom(
                    "Press back button again to exit",
                    function(a) {},
                    function(b) {}
                );
                setTimeout(function() {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
            e.preventDefault();
            return false;
        }, 101);

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, CacheFactoryProvider, POSTS_TEMPLATE) {

    angular.extend(CacheFactoryProvider.defaults, {
        'storageMode': 'localStorage',
        'capacity': 10,
        'maxAge': 10800000,
        'deleteOnExpire': 'aggressive',
        'recycleFreq': 10000
    })

    // Native scrolling
    if (ionic.Platform.isAndroid()) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
    }

    $stateProvider

    // Sets up our default state, all views are loaded through here
        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.posts', {
        url: "/posts",
        views: {
            'menuContent': {
                templateUrl: "templates/posts/" + POSTS_TEMPLATE + ".html",
                controller: 'PostsCtrl'
            }
        }
    })

    .state('app.bookmarks', {
        url: "/bookmarks",
        views: {
            'menuContent': {
                templateUrl: "templates/bookmarks.html",
                controller: 'BookmarksCtrl'
            }
        }
    })

    .state('app.post', {
        url: "/posts/:postId",
        views: {
            'menuContent': {
                templateUrl: "templates/post.html",
                controller: 'PostCtrl'
            }
        }
    })

    .state('app.category', {
        url: "/categories/:categoryId",
        views: {
            'menuContent': {
                templateUrl: "templates/category.html",
                controller: 'CategoryCtrl'
            }
        }
    })

    .state('app.search', {
        url: "/search/:request",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html",
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.settings', {
        url: "/settings",
        views: {
            'menuContent': {
                templateUrl: "templates/settings.html",
                controller: 'SettingsCtrl'
            }
        }
    })

    .state('app.about', {
        url: "/about",
        views: {
            'menuContent': {
                templateUrl: "templates/about.html"
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/posts');
});

.config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('main', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  .state('main.dash', {
    url: 'main/dash',
    views: {
        'dash-tab': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
    }
  })
  .state('main.public', {
    url: 'main/public',
    views: {
        'public-tab': {
          templateUrl: 'templates/public.html'
        }
    }
  })
  .state('main.admin', {
    url: 'main/admin',
    views: {
        'admin-tab': {
          templateUrl: 'templates/admin.html'
        }
    },
    data: {
      authorizedRoles: [USER_ROLES.admin]
    }
  });
  
  // Thanks to Ben Noblet!
  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("main.dash");
  });
})
