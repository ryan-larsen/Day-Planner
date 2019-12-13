$(document).ready(function () {
  //Sets Date and Time
  var now = moment().format('MMMM Do YYYY, h:mm:ss a')
  $('#date').html(now)

  // To set colors for Times
  var currentHour = moment().hours()
  var h1V = $('h1')
  if (h1V.val() == currentHour) {
    h1V.addClass('.present')
  } else if (h1V.val() < currentHour) {
    h1V.addClass('.past')
  } else if (h1V.val() > currentHour) {
    h1V.addClass('.future')
  }




  // Put inputs for each time
  $('#saveBtn4a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput4a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task4am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn5a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput5a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task5am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn6a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput6a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task6am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn7a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput7a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task7am').append(taskP).append(userVal)
  })

  $('#saveBtn8a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput8a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task8am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn9a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput9a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task9am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn10a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput10a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task10am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn11a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput11a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task11am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn12p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput12p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task12pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn1p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput1p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task1pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn2p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput2p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task2pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn3p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput3p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task3pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn4p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput4p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task4pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn5p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput5p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task5pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn6p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput6p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task6pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn7p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput7p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task7pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn8p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput8p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task8pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn9p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput9p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task9pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn10p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput10p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task10pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn11p').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput11p').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task11pm').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn12a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput12a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task12am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn1a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput1a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task1am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn2a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput2a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task2am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })

  $('#saveBtn3a').on('click', function (event) {
    event.preventDefault()

    var userVal = $('#userInput3a').val().trim()
    var taskP = $('<p class="newTask">')

    $('#task3am').append(taskP).append(userVal)

    localStorage.setItem(moment().get('hour'), taskP)
  })


})