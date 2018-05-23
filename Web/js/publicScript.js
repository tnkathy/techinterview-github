  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/events', true);
  xhr.onload = function()
  {
    if(this.status == 200)
    {
      var response = JSON.parse(this.responseText);

      var output = '';
      var modalResult = '';
      for(var i in response)
      {
        output +=
        //I'm using the id of the events to add on to the name of data-modal as a way of matching it up to the id of the modal later
        '<button class="pubEvents" data-modal="modal'+response[i].id+'">' +
        '<ul>' +
        '<li><b>Username:</b> '+response[i].actor.login+'</li>' +
        '<li><b>Event Type:</b> '+response[i].type+'</li>' +
        '<li><b>Repo:</b> '+response[i].repo.name+'</li>' +
        '</ul>' +
        '</button>' +
        //'<div id="modal'+response[i].id+'" class="bgModal">' + //This is commented out so you can see all the detail's modals
        '<div class="modalContent">' +
        '<div class="modalHeader">' +
        '<span class="closeBtn">&times;</span>' +
        '<img src="'+response[i].actor.avatar_url+'"class="avatar" width="100px" height="100px">' +
        '<h2><b>'+response[i].actor.login+'</b></h2>' +
        '</div>' + //modalHeader
        '<div class="modalBody">' +
        '<ul>' +
        '<li><b>Event Type:</b> '+response[i].type+'</li>' +
        '<li><b>Repo:</b> '+response[i].repo.name+'</li>' +
        '</ul>' +
        '</div>' + //modalBody
        '<div class="modalFooter">' +
        '<h2><a href="https://github.com/'+response[i].repo.name+'" target="_blank">Check out this repository here!</a></h2>' +
        '</div>' + //modalFooter
        '</div>' + //modalContent
        '</div>' //modalBox
        ;
      }
      document.getElementById('bodyContainer').innerHTML = output;
    }
  }
  xhr.send();


function refresh()
{
  location.reload(true);
}

/* //Here is my code where I try to "connect" the modal to its respective button.
  //I've tried researching the problem and implement the result I've found but nothing seems to work
  //and I'm not sure why. My guess is that, my buttons and modals are being "generated" instead of hard-coding
  //in the HTML? But even so, it is still there. It still exists, so I'm not sure.
//Select all the button of events
var modalBtn = document.querySelectorAll('.pubEvents');
if(modalBtn) //If modalBtn exists
{
  //For each button, create an 'onclick' event
  modalBtn.forEach(function(btn){
    btn.onclick = function()
    {
      //Get the data-modal attribute of the button to "compare/match" to the id element of the modal
      var modalID = btn.getAttribute('data-modal');
      if(document.getElementById(modalID).style.display == "none")
      {
        document.getElementById(modalID).style.display = "block";
      }
    }
  });
}*/
