var db = firebase.firestore();

var vOneLS = localStorage.getItem("adminUid");  


db.collection("admins").doc(vOneLS)
.onSnapshot(function(doc) {
    
 $('#btnGroupDrop1').html(doc.data().username);

});
  

$("#users").click(function(){
    window.location.href = "users.html";
});

$("#recipes").click(function(){
    window.location.href = "adminRecipes.html";
});

$("#admin-logout").click(function(){

    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  
    localStorage.setItem("adminUid", null);
  
    window.location.href = 'adminLogin.html';
  
   });

