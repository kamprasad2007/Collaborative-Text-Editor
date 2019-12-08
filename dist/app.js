

var login = document.getElementById("login");
var logout = document.getElementById("logout");

if(isUserLoggedIn()){
  location.href = "#/login";
  login.style.visibility = null;
}

var userSingedIn = false;

function onSignIn(googleUser) {
  if(googleUser){
    var profile = googleUser.getBasicProfile();
    var user = {
      ID : profile.getId(),
      Name : profile.getName(),
      Image : profile.getImageUrl(),
      Email : profile.getEmail()
    }
    logout.style.visibility = null;;
    login.style.visibility = "hidden";
    sessionStorage.setItem('user',JSON.stringify(user));
    window.location = "#/page";
  }else{
    window.location = '#/login';
    login.style.visibility = null;
  }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      logout.style.visibility = "hidden";
      login.style.visibility = null;
      sessionStorage.removeItem('user');
      location.hash = "#/login";
    });
}

function isUserLoggedIn(){
  return sessionStorage.getItem('user') !== null;
}

window.addEventListener('hashchange', function(){
  if(isUserLoggedIn()){
    if(location.hash != "#/page"){
      location.hash = "#/page";
    }
  }else{
      location.hash = "#/login";
  }
},false);