function onSignIn(googleUser) {
  if(googleUser){
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    sessionStorage.setItem('token', id_token);
    window.location.href = "/page?id=" + profile.getId() + '&token='+ id_token;
  }else{
      sessionStorage.removeItem('token');
      window.location.href = "/";
  }
}