'use strict';

eventsApp.filter("durations", function(){
  return function(duration){
    switch (duration) {
      case 1:
        return "Half Hourse";
      case 2:
        return "1 buoi thoi";
      case 4:
        return "Full day";
      default:
        return "Invalid value";
    }
  }
});
