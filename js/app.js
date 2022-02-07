function chooseGreetingPage(){
  var title = document.getElementById("title");
      title.style.top = 50 + "px";

  var startPage = document.getElementById("startPage");
      startPage.style.display = "none";

  var uploadImagePage = document.getElementById("uploadImagePage");
    if(uploadImagePage.style.display === "block"){
        uploadImagePage.style.display = "none";
    }

  var chooseGreetingPage = document.getElementById("chooseGreetingPage");
      chooseGreetingPage.style.display = "block";

  var nextButton = document.getElementById("chooseModelNextButton");
      // If 3D model has not been selected, don't show next button, otherwise show it
      nextButton.style.display = "none";

  const previewImage = previewContainer.querySelector(".image-preview__image");
  const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
  const previewImageAttribute = previewImage.getAttribute("src");
    if(previewImageAttribute != ""){
      previewImage.setAttribute("src", "");
      previewImage.style.display = null;
      previewDefaultText.style.display = null;
    }
}

function selectGreeting(){
  var modelTable = document.getElementById("modelTable");

  var modelTitleValue = document.getElementById("modelTitle").value;

  var cellValue;

  for(var r = 0, n = modelTable.rows.length; r < n; r++){

    for (var c = 0, m = modelTable.rows[r].cells.length; c < m; c++){
      cellValue = modelTable.rows[r].cells[c].innerText;
    }
  }

  modelTitleValue = cellValue;
  alert(modelTitleValue);

  var modelButton = document.getElementById("modelButton");
  var modelName = modelButton.name

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

  const previewImage = previewContainer.querySelector(".image-preview__image");
  const previewImageAttribute = previewImage.getAttribute("src");
  if(previewImageAttribute === ""){
    nextButton.style.display = "none";
  }else{
    nextButton.style.display = "block";
  }

    var addNamePage = document.getElementById("addNamePage");
        addNamePage.style.display = "none";
}

function addNamePage(){
  var addNamePage = document.getElementById("addNamePage");
      addNamePage.style.display = "block";

  var uploadImagePage = document.getElementById("uploadImagePage");
      uploadImagePage.style.display = "none";

    var enterEmailPage = document.getElementById("enterEmailPage");
        enterEmailPage.style.display = "none";
}

function enterEmailPage(){
  var addNamePage = document.getElementById("addNamePage");
      addNamePage.style.display = "none";

  var enterEmailPage = document.getElementById("enterEmailPage");
      enterEmailPage.style.display = "block";
}

function submitGreetingInfo(){
  alert("Submitting Greeting Info!");
  location.replace("https://www.w3schools.com");
}
