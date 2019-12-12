$(document).ready(function () {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a') 

  $('#date').html(now)

// Put inputs for each time
$('#saveBtn4a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput4a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task4am').append(taskP).append(userVal)
})

$('#saveBtn5a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput5a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task5am').append(taskP).append(userVal)
})

$('#saveBtn6a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput6a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task6am').append(taskP).append(userVal)
})

$('#saveBtn7a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput7a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task7am').append(taskP).append(userVal)
})

$('#saveBtn8a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput8a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task8am').append(taskP).append(userVal)
})

$('#saveBtn9a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput9a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task9am').append(taskP).append(userVal)
})

$('#saveBtn10a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput10a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task10am').append(taskP).append(userVal)
})

$('#saveBtn11a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput11a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task11am').append(taskP).append(userVal)
})

$('#saveBtn12p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput12p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task12pm').append(taskP).append(userVal)
})

$('#saveBtn1p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput1p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task1pm').append(taskP).append(userVal)
})

$('#saveBtn2p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput2p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task2pm').append(taskP).append(userVal)
})

$('#saveBtn3p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput3p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task3pm').append(taskP).append(userVal)
})

$('#saveBtn4p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput4p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task4pm').append(taskP).append(userVal)
})

$('#saveBtn5p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput5p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task5pm').append(taskP).append(userVal)
})

$('#saveBtn6p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput6p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task6pm').append(taskP).append(userVal)
})

$('#saveBtn7p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput7p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task7pm').append(taskP).append(userVal)
})

$('#saveBtn8p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput8p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task8pm').append(taskP).append(userVal)
})

$('#saveBtn9p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput9p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task9pm').append(taskP).append(userVal)
})

$('#saveBtn10p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput10p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task10pm').append(taskP).append(userVal)
})

$('#saveBtn11p').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput11p').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task11pm').append(taskP).append(userVal)
})

$('#saveBtn12a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput12a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task12am').append(taskP).append(userVal)
})

$('#saveBtn1a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput1a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task1am').append(taskP).append(userVal)
})

$('#saveBtn2a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput2a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task2am').append(taskP).append(userVal)
})

$('#saveBtn3a').on('click', function(event) {
  event.preventDefault()

  var userVal = $('#userInput3a').val().trim()
  var taskP = $('<p class="newTask">')

  $('#task3am').append(taskP).append(userVal)
})

















})

// Need to use moments to set hour of the object they pass into the input forms

//Day Planner homework - we are asked to display standard business hours and each hour should contain: The time
//A field to hold user input
//A save button and each timeblock is color coded to indicate whether it is in a past, present, or future hour. Should this be coded using html and css or dynamically added to the page using javascript?


//Day Planner homework - we are asked to display standard business hours and each hour should contain:
//1. The time
//2. A field to hold user input
//3. A save button
//Each time-block is color coded to indicate whether it is in a past, present, or future hour. Should this be coded using HTML and CSS or dynamically added to the page using JavaScript?

//Use a form to allow enter button for input