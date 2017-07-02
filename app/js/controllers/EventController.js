'use strict';

eventsApp.controller('EventController', function EventController($scope){

  $scope.buttonDisabled  = true;

  $scope.sortOrder = "name"

  $scope.event = {
    name: "勉強会",
    date: "2017/07/07",
    time: "12:12:12: 2017",
    location: {
      address: "TOKYO"
    },
    imageUrl: "/img/angularjs-logo.png",
    sessions: [
      {
        name: "LARAVEL",
        creatorName: 'ABC',
        level: 'beginer',
        duration: 1,
        upVoteCount: 0
      },
      {
        name: "RUBY",
        creatorName: 'ZABC',
        level: 'beginer',
        duration: 2,
        upVoteCount: 0
      },
      {
        name: "GO-LANG with beginer",
        creatorName: 'HOHO',
        level: 'advance',
        duration: 4,
        upVoteCount: 0
      }
    ]
  }

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  }

  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  }

});
