
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
document.getElementById("mail").addEventListener("click", function(){
  alert('copied!');
});