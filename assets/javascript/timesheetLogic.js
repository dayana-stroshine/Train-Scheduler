// Firebase
var config = {
    apiKey: "AIzaSyAm6f34rwdvWcqpsXc5GMBYO9E9fpyZjQI",
    authDomain: "train-scheduler-2858e.firebaseapp.com",
    databaseURL: "https://train-scheduler-2858e.firebaseio.com",
    projectId: "train-scheduler-2858e",
    storageBucket: "train-scheduler-2858e.appspot.com",
    messagingSenderId: "36523496139"
  };
  firebase.initializeApp(config);

var database = firebase.database();


$("#add-train-btn").on("click", function(event) {
  event.preventDefault();


  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var trainFrequency = $("#frequency-input").val().trim();


  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency,
  };


  database.ref().push(newTrain);


  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);


  alert("Train successfully added");


  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;


  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  //var empStartPretty = moment.unix(empStart).format("HH:mm");

  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);

  // // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);


  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  trainFrequency + "</td><td>" + trainTime + "</td><td>" + empStartPretty + "</td></tr>");
});

