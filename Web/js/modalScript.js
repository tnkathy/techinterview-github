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
      '<button class="pubEvents" onclick="openDetail()">' +
      '<ul>' +
      '<li><b>Username:</b> '+response[i].actor.login+'</li>' +
      '<li><b>Event Type:</b> '+response[i].type+'</li>' +
      '<li><b>Repo:</b> '+response[i].repo.name+'</li>' +
      '</ul>' +
      '</button>' +
      '<div id="modalBox" class="bgModal">' +
      '<div class="modalContent">' +
      '<div class="modalHeader">' +
      '<span class="closeBtn" onclick="closeDetail()">&times;</span>' +
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
      '</div>' + //modalF
      '</div>' + //modalContent
      '</div>' //modalBox
      ;
    }
    document.getElementById('bodyContainer').innerHTML = output;



  }
}
xhr.send();


window.addEventListener('click', outsideClick);

function openDetail()
{
  var modal = document.getElementById('modalBox');
  if(modal.style.display == 'none')
  {
    modal.style.display = 'block';
  }
  else
  {
    modal.style.display = 'none';
  }
}
function closeDetail()
{
  var modal = document.getElementById('modalBox');
  if(modal.style.display == 'block')
  {
    modal.style.display = 'none';
  }
  else
  {
    modal.style.display = 'block';
  }
}
function outsideClick(e)
{
  var modal = document.getElementById('modalBox');
  if(e.target == modal)
  {
    modal.style.display = 'none';
  }
}
function refresh()
{
  location.reload(true);
}
