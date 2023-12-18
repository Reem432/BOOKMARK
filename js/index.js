
var  index
var siteName = document.getElementById("siteName") 
var siteURL = document.getElementById("siteURL")
var visitButton = document.getElementById('visit');
var websites = []
var site 
if (localStorage.getItem("websites") != null) {
    websites = JSON.parse(localStorage.getItem("websites"))
    display();
} else {
    products = []
}


function addWebsite(){
    if (validateName(siteName.value) && validateUrl(siteURL.value) ) {
  site = {
    name: siteName.value, 
    url : siteURL.value 
  }
  websites.push(site)
  localStorage.setItem("websites",JSON.stringify(websites))

clear()
display()
 }
else{
  showSweetAlert()
}


}

    function go(index) {
        // window.location.href = websites[index].url;
        window.open(websites[index].url, '_blank');
    }
   
 
  
function display() {
    var trs = ""
    for (var i = 0; i < websites.length; i++) {
        trs += ` <tr>
        <td>${i}</td>
        <td>${websites[i].name}</td>
        <td>
          <button  id = "visit" onclick="go(${i})" class="btn btn1 text-white"><i class="fa-solid fa-eye"></i>   Visit</button>
        </td>
        <td>
          <button onclick="deleteRow(${i})" class="btn btn2 text-white"><i class="fa-solid fa-trash-can"></i>  Delete</button>
        </td>
      </tr>`
    }
    document.getElementById("tBody").innerHTML = trs
}
function clear() {
    siteName.value = ""
    siteURL.value = ""
}

  function deleteRow(index) {
    websites.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(websites))
    display()
}
function validateName(siteName) {
    var siteNameRegEx = /^[A-Za-z\s0-9\_]{3,}/
    return siteNameRegEx.test(siteName)
}

function validateUrl(siteURL) {
    var siteurlregEx = /^(https?|ftp?):\/\/[^\s\/$.?#].[^\s]*$/;
    return siteurlregEx.test(siteURL)
}



function showSweetAlert() {
  Swal.fire({
    title: "Site Name or Url is not valid, Please follow the rules below ",

    html: `
<i class="fa-regular fa-circle-right"></i>  Site name must contain at least 3 
    characters <br><i class="fa-regular fa-circle-right"></i>  Site URL must be a valid one
    `,
    showCloseButton: true,
    // showCancelButton: true,
    // focusConfirm: false,
   
   
  });
}


