function buyNow() {
  document.getElementById("buyMessage").innerHTML =
    "Thank you! Your product has been selected.";
}

function changeProduct() {
  document.getElementById("productImage").src = "img21.jpg";
}

function imageOver() {
  console.log("Mouse is over the product image");

  document.getElementById("productImage").style.transform = "scale(1.1)";
}

function imageOut() {
  console.log("Mouse left the product image");

  document.getElementById("productImage").style.transform = "scale(1)";
}

function showName() {
  let name = document.getElementById("userName").value;

  document.getElementById("welcomeMessage").innerHTML =
    "Welcome, " + name + "!";
}

function changeProductInfo() {
  document.getElementById("productName").innerHTML = "Wireless Headphones";

  document.getElementById("productPrice").innerHTML = "Price: Rs. 9,500";

  document.getElementById("productDescription").innerHTML =
    "High quality wireless headphones with clear sound.";
}
