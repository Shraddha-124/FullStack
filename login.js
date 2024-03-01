<script>
          function auth() {
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;
          if(email== "admin@gmail.com" && password=="admin123") {
          window.location.assign("index.html");
          alert("Login Successfully ");
          }
          else{
          alert("Invalid Information ");
          return;
          }
          }
          
</script>

        