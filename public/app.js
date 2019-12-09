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
      window.location.href = "/user?userid=" + profile.getId();
    }else{
        sessionStorage.removeItem('user');
        window.location.href = "/";
    }
  }

  function logout(){
    sessionStorage.removeItem('user');
    window.location.href = "/";
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
        
    // });
  }