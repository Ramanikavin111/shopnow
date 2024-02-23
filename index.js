let backarrow = document.getElementById("backarrow");
backarrow.addEventListener("click", () => {
  window.history.back();
});

const arrowup =document.getElementById("arrowup");
const checkbrand =document.getElementById("checkbrand");
arrowup.addEventListener("click",(e)=>{
  e.preventDefault()
  checkbrand.classList.toggle("visible")
})
const arrowleft =document.getElementById("arrow-left");
const printerfunction =document.getElementById("printer-function")
arrowleft.addEventListener("click",()=>{
  printerfunction.classList.toggle("visible");
})

function printerFunction() {
  document.getElementById("printer-function").classList.toggle("printer")
}
function printerArrow() {
  document.getElementById("arrow-left").classList.toggle("printer-arrow-left")
}
function brandArrow() {
  document.getElementById("arrowup").classList.toggle("brand-arrow-up")
}
const morebrand = document.getElementById("more-brand");
      const elevenmore = document.getElementById("11-more");
      const showless =document.getElementById("show-less");
      morebrand.addEventListener("click", (e) => { 
        e.preventDefault()
         elevenmore.classList.add("visible"); 
         showless.addEventListener("click",(e)=>{
          e.preventDefault()
           elevenmore.classList.remove("visible"); 

         })
      });






const data = [
  {
    id: 1,
    img: "/images/canon-printer.jpg",
    alt:"hp-ful-black-printer",
    name1: "HP Smart Tank 210 single",
    name2: " Function WiFi Color Ink Tank P...",
    color: "Light Basalt,White",
    rating:"4.3 ★",
    discount:"(3,653)",
    price:"₹21,029 /- ",
    del:"₹26,490",
    offer:"20% off",
    exchange:"Upto ₹400 off on Exchange",
  },
  {
    id: 2,
    img: "/images/hp-blue.jpg",
    alt:"hp-black-printer",
    name1: "HP Smart Tank All In One 580",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey, White",
    rating:"4.2 ★",
    discount:"(2,902)",
    price:"₹14,999 /- ",
    del:"₹18,848",
    offer:"20% off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 3,
    img: "/images/white-hp.jpg",
    alt:"hp-red-printer",
    name1: "HP Smart Tank All In one 529",
    name2: " Multi-function Color Ink Ta...",
    color: "Moab, White",
    rating:"4.1 ★",
    discount:"(802)",
    price:"₹10,799 /- ",
    del:"₹14,511",
    offer:"25% off",
    exchange:"Upto ₹400 off on Exchange",
  },
  {
    id: 4,
    img: "/images/hp-flat-white.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 5,
    img: "/images/hp-red.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 6,
    img: "/images/violet-printer.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 7,
    img: "/images/rounded-black.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 8,
    img: "/images/color-hp.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 9,
    img: "/images/canon-white.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 10,
    img: "/images/hp-rectangel.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 11,
    img: "/images/canon-black.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 12,
    img: "/images/hp-blue-black.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 13,
    img: "/images/canon-botels.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 14,
    img: "/images/canon-buttons.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 15,
    img: "/images/canon-white-color.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 16,
    img: "/images/hp-old-black.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 17,
    img: "/images/hp-brother.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 18,
    img: "/images/hp-old-blue.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 19,
    img: "/images/hp-latest-white.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
  {
    id: 20,
    img: "/images/hp-black.jpg",
    alt:"hp-black-printer",
    name1: "Hp Smart Tank 585 All-in-One",
    name2: " Multi-function WiFi Ink Color...",
    color: "Grey White",
    rating:"4.2 ★",
    discount:"(2,089)",
    price:"₹14,999 /- ",
    del:"₹17,882",
    offer:"15 % off",
    exchange:"Upto ₹800 off on Exchange",
  },
];
const productsContainer=document.querySelector(".printer-card");
 
function displayProducts(products) {
    const product_details= products.map((product)=>
        ` <div
    class="card ms-2 mt-2 p-3 border-0"
    style="width: 15rem; height: 23rem"
  >
    <a href="#" class="printer-img"><img
      src="${product.img}"
      class="card-img-top mt-5 mb-5" style="width:208px;height:95px"
      alt="${product.alt}"
    /></a>
    <div class="card-body p-0">
      <a href="#" class="printer-brands m-0"
        >${product.name1}</a
      >
      <a href="#" class="printer-brands m-0"
        >${product.name2}</a
      >
      <a
        href="#"
        class="card-text-disable m-0 text-decoration-none"
        > ${product.color}</a
      >
      <div class="rating">
        <a href="#"
          ><button
            class="card-button border-0 rounded-1 text-white"
          >
          ${product.rating}
          </button></a
        >
        <a
          href="#"
          class="save-amount m-0 ms-2 text-decoration-none"
          >
        ${product.discount}</a>
      </div>
      <a class="printer-rate m-0 text-decoration-none text-dark"
        > ${product.price}<del class="delete-offer">${product.del}</del>
        <span class="printer-offer">${product.offer}</span></a
      >
      <a
        href="#"
        class="card-text m-0 text-decoration-none text-dark"
        >${product.exchange}</a
      >
    </div>
  </div>`
    ).join("");
    productsContainer.innerHTML=product_details;
}
displayProducts(data);
