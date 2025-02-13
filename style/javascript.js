let inputype = document.getElementById("search-dropdown");
// call quote title

// Get user input
function myfunction(value) {
  console.log(value);
  if (value ==="Quoted id") {
    console.log(value)
    inputype.type = "number";
    inputype.removeAttribute("disabled");
    //   Remove disable attribute
  } else if (value === "Quoted title") {
    inputype.type = "text";
    inputype.removeAttribute("disabled");
  } else {
  }
}

function handleSearch() {
  console.log(inputype.value);
  if(inputype.value == 1) {
    // display img 
    // img.src = ""
    // display content

    // display title
    // quoute.innerHtml = "It's okay"
  }
}
