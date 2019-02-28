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
  
  const loginUser = function (event){ 
    event.preventDefault();
    const username = $('#login-username').val().trim();
    const password = $('#login-password').val().trim();
  
    $.post('/api/session',{email: username, password: password})
    .then(function(data){
      console.log(data);
      if(data.id){
        sessionStorage.setItem('token', data.id)
        window.location.href = "post.html";
      }
    })
  }
  
  $('#login-btn').on('click', loginUser);