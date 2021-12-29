function chooseGreetingPage(){
  var chooseGreetingPage = document.getElementById("chooseGreetingPage");
      if(chooseGreetingPage.style.display === "none"){
          chooseGreetingPage.style.display = "block";
      }

  var uploadImagePage = document.getElementById("uploadImagePage");
      if(uploadImagePage.style.display === "block"){
          uploadImagePage.style.display = "none";
      }
}

function chooseGreetingPage(){
  var title = document.getElementById("title");
      title.style.top = 50 + "px";

  var startPage = document.getElementById("startPage");
      startPage.style.display = "none";

  var chooseGreetingPage = document.getElementById("chooseGreetingPage");
      chooseGreetingPage.style.display = "block";

  var nextButton = document.getElementById("chooseModelNextButton");
      nextButton.style.display = "none";


}

function selectGreeting(){
  var nextButton = document.getElementById("chooseModelNextButton");
      nextButton.style.display = "block";
}

function uploadImagePage(){
  var uploadImagePage = document.getElementById("uploadImagePage");
      uploadImagePage.style.display = "block";

  var chooseGreetingPage = document.getElementById("chooseGreetingPage");
      if(chooseGreetingPage.style.display === "block"){
          chooseGreetingPage.style.display = "none"
      }

  var nextButton = document.getElementById("uploadImageNextButton");
      nextButton.style.display = "none";
}

function uploadImage(){
  alert("Uploading Image!");
}
