

var login = document.getElementById("login");
var logout = document.getElementById("logout");

if(!isUserLoggedIn()){
  routePage();
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
    sessionStorage.setItem('user',JSON.stringify(user));
    routePage()
  }else{
    routeLogin()
  }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      sessionStorage.removeItem('user');
      routeLogin()
    });
}

function isUserLoggedIn(){
  return sessionStorage.getItem('user') !== null;
}

window.addEventListener('hashchange', function(){
  if(isUserLoggedIn()){
    if(location.hash != "#/page"){
      routePage()
    }
  }else{
    routeLogin();
  }
},false);

function routeLogin(){
  location.hash = "#/login";
}

function routePage(){
  location.hash = "#/page";
}