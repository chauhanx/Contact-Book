var app= angular.module('myApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/home',{
        templateUrl:'default.html'}
        )
    .when('/edit/:contact_index',{
        templateUrl:'contact_form.html',
        controller:'editContactCtrl'
    })
    .when('/dialer',{
        templateUrl:'dialer.html',
        controller:'dialerCtrl'
    })
    .when('/add',{
        templateUrl:'contact_form.html',
        controller:'addContactCtrl'
    })
    .when('/contact-info/:contact_index',{
        templateUrl:'contact_info.html',
        controller:'contactInfoCtrl'
    })
    .otherwise({redirectTo:'/home'});
});
app.controller('dialerCtrl',function($scope){
    $scope.dialNumber=0;
  
    $scope.fn = function(no){
        if($scope.dialNumber=="0"){
            $scope.dialNumber=no;
        }
        else{
            $scope.dialNumber=$scope.dialNumber + String(no);
        }
    };
    $scope.cut = function(){
        $scope.dialNumber=0;
    }
    return $scope.dialNumber;
});

app.controller('homeCtrl',function($scope,contactService){
    $scope.srch = function(){
        var haha=true;
        var haha=true;
    }
    $scope.contacts = contactService.getContact();
    $scope.delete = function(item){
        var a = $scope.contacts.indexOf(item);
        $scope.contacts.splice(a,1);
    }
});

app.controller('addContactCtrl',function($location,$scope){
    $scope.path = $location.path();
    $scope.addContact = function(){
        console.log("Ssay hello");
        var contact = $scope.currentContact;
        contact.id = $scope.contacts.length;
        $scope.contacts.push(contact);
    };
});

app.controller('editContactCtrl',function($scope,$routeParams){
    $scope.index=$routeParams.contact_index;
    $scope.currentContact = $scope.contacts[$scope.index];
});

app.controller('contactInfoCtrl',function($scope,$routeParams){
    var index = $routeParams.contact_index;
    $scope.currentContact = $scope.contacts[index];
});


app.directive('contact',function(){
    return{
        restrict:'E',
        replace:'true',
        templateUrl:'contact.html'
    };
});

app.factory('contactService',function(){
    var factory={};
    factory.getContact=function(){
        return list;
    };
    var list=[
    {id: 0, name: 'Ankur Chauhan', email: 'ankur@gmail.com', phone: '981-0123-032', notes: 'M.Tech in Software Engineering'},
    {id: 1, name: 'Diya Singh', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', notes: 'Works as Software Trainee in R Systems.'},
    {id: 2, name: 'Sam Chawla', email: 'starly@castleblack.com', phone: '123-456-7890',  notes: 'Expertise in Web Development.'},
    {id: 3, name: 'Kiran Rao', email: 'jsnow@castleblack.com', phone: '123-456-7890', notes: 'Works as Software Trainee in R Systems.'},
    {id: 4, name: 'Kathrine Mills', email: 'kathrinemills@supremia.com', phone: '(827) 472-3016', notes: 'Expertise in Web Development..'},
    {id: 5, name: 'Bentley Davis', email: 'bentleydavis@supremia.com', phone: '(834) 482-2571', notes: 'Works as Software Trainee in R Systems.'},
    {id: 6, name: 'Camacho Brady', email: 'camachobrady@supremia.com', phone:'(988) 432-3165', notes: 'Expertise in Web Development..'},
    {id: 7, name: 'Willie Barron', email: 'williebarron@supremia.com', phone: '(821) 506-2135', notes: 'Works as Software Trainee in R Systems.'},
    {id: 8, name: 'Maude Bennet', email: 'maudebennett@supremia.com', phone: '(842) 533-2747',  notes: 'Expertise in Web Development.'},
    {id: 9, name: 'Elma Duke', email: 'elmaduke@supremia.com', phone: '(851) 410-3910', notes: 'Works as Software Trainee in R Systems.'},
    {id: 10, name: 'Shauna Horton', email: 'shaunahorton@supremia.com', phone: '(815) 528-3451',  notes: 'Expertise in Web Development.'},
    {id: 11, name: 'Gross Newman', email: 'grossnewman@supremia.com', phone: '(839) 445-3037',notes: 'Works as Software Trainee in R Systems.'},
    {id:12,name: "Holcomb Harrell",email: "holcombharrell@supremia.com",phone: " (862) 499-2501",  notes: 'Expertise in Web Development.'},
    {id:13, name: "Boyd Howell",email: "boydhowell@supremia.com",phone: " (807) 484-2254",notes: 'Works as Software Trainee in R Systems.'},
    {id:14,name: "Stevens Fuentes",email: "stevensfuentes@supremia.com",phone: " (927) 439-2523",  notes: 'Expertise in Web Development.'},
    {id:15,name: "Garcia Patrick",email: "garciapatrick@supremia.com",phone: " (890) 438-3843",notes: 'Works as Software Trainee in R Systems.'},
    {id:16,name: "Torres Holmes",email: "torresholmes@supremia.com",phone: " (831) 472-3649",  notes: 'Expertise in Web Development.'}
  ];
    return factory;
});