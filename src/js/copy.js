// Creation of the function copy
function copyToClipboard(text){
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

// Using of the function
document.getElementById("mail").addEventListener("click", copyToClipboard("oscar@cyberbea.com"));


// modal
document.getElementById('mail').addEventListener('click', function() {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');
});
