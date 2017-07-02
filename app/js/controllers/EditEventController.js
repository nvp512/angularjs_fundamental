'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope){
  $scope.saveEvent = function(event, newEventForm){
    console.log(newEventForm);
    if (newEventForm.$valid) {
      window.alert(event.name + "ok, saved!");
    }
  };

  $scope.cancelEvent = function(event){
    window.location = "/EventDetails.html"
  };
});
