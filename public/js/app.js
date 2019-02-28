/**
 * Register new users
 */

const registerUser = function (event){ 
    event.preventDefault();
    const username = $('#reg-username').val().trim();
    const password = $('#reg-password').val().trim();
  
    $.post('/api/user',{email: username, password: password})
    .then(function(data){
      console.log(data);
    })
  }
  
  $('#register-btn').on('click', registerUser);
  
  /**
   * Login Users
   */
  

  let usersArray = [];

  const loginUser = function (event){ 
    event.preventDefault();

    const username = $('#login-username').val().trim();
    const password = $('#login-password').val().trim();

    $.get('/api/users').then(function(data) {
      console.log(data);
      for(i = 0; i < data.length; i++) {
        usersArray.push(data[i])
      }
    }).then(function(){
    for(i = 0;i < usersArray.length;i++) {
      if(username === usersArray[i].email && password === usersArray[i].password) {
        $.post('/api/session',{email: username, password: password})
        .then(function(data){
            sessionStorage.setItem('token', data.id)
            window.location.href = "post.html";
            return
      })
    }else{
     console.log("Incorrect Account and Password")
    }
  }
 })
}
  
  $('#login-btn').on('click', loginUser);