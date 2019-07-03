app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('main', {
        url:'/',
        component: 'main'
    }).
    state('login', {
        url:'/login',
        component: 'login'
    }).state('profile',{
        url:'/profile',
        component:'profile'

    }).state('register',{
        url:'/register',
        component:'register'

    }).state('ustanove',{
        url:'/ustanove',
        component:'ustanovePage'

    }).state('smjerovi',{
        url:'/smjerovi',
        component:'smjeroviPage'

    }).state('profesori',{
        url:'/profesori',
        component:'profesoriPage'

    }).state('korisnici',{
        url:'/korisnici',
        component:'korisniciPage'
    }).state('ocjene',{
        url:'/:x',
        component:'ocjeneProf'
    });

    $urlRouterProvider.otherwise('/');


});