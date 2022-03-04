var product = {
  product: [
    {
      name: "pineApple Phone 10",
      brand: "pineApple",
      description: "pineApple Phone 10",
      price: "280",
    },
    {
      name: "pineApple Phone 11",
      brand: "pineApple",
      description: "pineApple Phone 11",
      price: "290",
    },
    {
      name: "pineApple Phone 12",
      brand: "pineApple",
      description: "pineApple Phone 12",
      price: "300",
    },
    {
      name: "pineApple Phone 13",
      brand: "pineApple",
      description: "pineApple Phone 13",
      price: "310",
    },
    {
      name: "pineApple Phone 14",
      brand: "pineApple",
      description: "pineApple Phone 14",
      price: "320",
    },
    {
      name: "pineApple Phone 15",
      brand: "pineApple",
      description: "pineApple Phone 15",
      price: "330",
    },
    {
      name: "pineApple Phone 15",
      brand: "pineApple",
      description: "pineApple Phone 15",
      price: "330",
    },
  ],
};

var carouselItems = {
  banners: ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg"],
};

var cartItems = [];

var current = 0;

function initialize() {
  // document.getElementById("carousel").src = carouselItems.banners[1];

  for (i = 0; i <= product.product.length; i++) {
    document.getElementById("productName" + i).innerHTML =
      product.product[i].name;
    document.getElementById("productPrice" + i).innerHTML =
      product.product[i].price;
  }
}

function onCarouselBackButtonClick() {
  var carousel = document.getElementById("carousel");
  if (current == 0) {
    carousel.src = carouselItems.banners[carouselItems.banners.length - 1];
    current = carouselItems.banners.length - 1;
  } else {
    current = current - 1;
    carousel.src = carouselItems.banners[current];
  }
}

function onCarouselForwardButtonClick() {
  var carousel = document.getElementById("carousel");
  if (current == carouselItems.banners.length - 1) {
    current = 0;
    carousel.src = carouselItems.banners[0];
  } else {
    current = current + 1;
    carousel.src = carouselItems.banners[current];
  }
}

function onOrderClick(id) {
  cartItems.push(product.product[id]);
}

function openModelWindow() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
    cartItems = [];
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      cartItems = [];
    }
  };
  modal.style.display = "block";

  checkItems();
}

function checkItems() {
  for (i = 0; i <= cartItems.length; i++) {
    var el = document.getElementById("list");
    var node = document.createElement("li");
    var img = document.createElement("img");
    var name = document.createElement("p");
    var description = document.createElement("p");
    var price = document.createElement("p");
    var brand = document.createElement("p");
    var div = document.createElement("div");

    img.style.width = "150px";
    img.style.height = "150px";
    img.src = "pineapple-phone.jpg";
    name.innerHTML = "Name: " + cartItems[i].name;
    description.innerHTML = "Description: " + cartItems[i].description;
    price.innerHTML = "Price: $" + cartItems[i].price;
    brand.innerHTML = "Brand: " + cartItems[i].brand;

    div.style.marginLeft = "8px";

    img.style.border = "1px solid #9aa6ad";
    img.style.marginBottom = "14px";

    node.style.width = "100%";
    node.style.display = "flex";
    node.style.padding = "4px";
    node.style.marginBottom = "8px";
    node.style.borderBottom = "1px solid #9aa6ad";

    node.appendChild(img);
    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(brand);
    div.appendChild(price);
    node.appendChild(div);
    el.appendChild(node);
  }
}

initialize();
