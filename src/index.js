let isFirstImage = true;

function themeChange() {
  let body = document.querySelector("body");

  let michael = document.querySelector("#Michael");
  let janet = document.querySelector("#Janet");
  let dwight = document.querySelector("#Dwight");
  let jim = document.querySelector("#Jim");
  let phyllis = document.querySelector("#Phyllis");
  let stanley = document.querySelector("#Stanley");
  let andy = document.querySelector("#Andy");
  let kelly = document.querySelector("#Kelly");
  let meredith = document.querySelector("#Meredith");
  let creed = document.querySelector("#Creed");
  let angela = document.querySelector("#Angela");
  let oscar = document.querySelector("#Oscar");
  let kevin = document.querySelector("#Kevin");
  let toby = document.querySelector("#Toby");
  let pam = document.querySelector("#Pam");
  let ryan = document.querySelector("#Ryan");
  let darryl = document.querySelector("#Darryl");
  let roy = document.querySelector("#Roy");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    themeBtn.classList.add("dark");
    themeBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  }
  if (isFirstImage) {
    michael.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/021/original/michael_evil.png?1678559080";
    janet.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/053/original/jan_evil.png?1678561545";
    dwight.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/007/original/dwight_evil.png?1678558614";
    jim.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/011/original/jim_evil.png?1678558762";
    phyllis.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/027/original/phyllis_evil.png?1678559237";
    stanley.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/032/original/stanley_evil.png?1678559392";
    andy.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/999/original/andy_evil.jpg?1678558316";
    kelly.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/012/original/kelly_evil.png?1678558801";
    meredith.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/018/original/meredith_evil.png?1678559007";
    creed.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/003/original/creed_evil.png?1678558481";
    angela.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/000/original/angela_evil.png?1678558337";
    oscar.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/022/original/oscar_evil.png?1678559112";
    kevin.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/015/original/kevin_evil.png?1678558917";
    toby.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/035/original/toby_evil.jpg?1678559467";
    pam.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/026/original/pam_evil.png?1678559215";
    ryan.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/008/original/evil_ryan.png?1678558691";
    darryl.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/005/original/darryl_evil.png?1678558551";
    roy.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/030/original/roy_evil.png?1678559344";
  } else {
    michael.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/019/original/Michael.jpg?1678559033";
    janet.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/054/original/jan.png?1678561608";
    dwight.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/006/original/Dwight_.jpg?1678558579";
    jim.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/009/original/jim.png?1678558718";
    phyllis.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/028/original/Phyllis_Vance.png?1678559261";
    stanley.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/033/original/Stanley_Hudson.png?1678559416";
    andy.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/070/998/original/andy_.jpg?1678558248";
    kelly.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/050/original/Kelly_Kapoor.png?1678560601";
    meredith.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/016/original/meredith.png?1678558971";
    creed.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/002/original/creed.png?1678558432";
    angela.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/001/original/Angela_Martin.png?1678558380";
    oscar.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/023/original/Oscar_Martinez.png?1678559140";
    kevin.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/014/original/kevin.png?1678558870";
    toby.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/036/original/TobyFlenderson.png?1678559486";
    pam.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/024/original/Pam_Beesley.png?1678559186";
    ryan.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/031/original/ryan.png?1678559361";
    darryl.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/004/original/darryl.png?1678558518";
    roy.src =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/071/029/original/Roy_Anderson.png?1678559303";
  }
  isFirstImage = !isFirstImage;
}
let themeBtn = document.querySelector("#thmBtn");
themeBtn.addEventListener("click", themeChange);

let quoteBtn = document.querySelector("#quoteBtn");
let quoteDiv = document.querySelector("#quote");

function randomQuote() {
  let quotesArray = [
    {
      quote:
        "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
      author: "Michael Scott",
    },
    {
      quote:
        "Identity theft is not a joke, Jim! Millions of families suffer every year.",
      author: "Dwight Schrute",
    },
    {
      quote: "I am running away from my responsibilities. And it feels good.",
      author: "Michael Scott",
    },
    {
      quote:
        "I knew exactly what to do, but in a much more real sense I had no idea what to do.",
      author: "Michael Scott",
    },
    {
      quote: "I mean, I’m not a slut, but who knows.",
      author: "Kelly Kapoor",
    },
    {
      quote: "If I don’t have some cake soon, I might die",
      author: "Stanley Hudson",
    },
    {
      quote:
        "I miss the days when there was only one party I didn't want to go to.",
      author: "Ryan Howard",
    },
    {
      quote:
        "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.",
      author: "Dwight Schrute",
    },
  ];

  let randomIndex = Math.floor(Math.random() * quotesArray.length);
  let quoteObj = quotesArray[randomIndex];
  let quoteHTML = `<h4>"${quoteObj.quote}"<small> — ${quoteObj.author}</small></h4>`;
  quoteDiv.innerHTML = quoteHTML;
}

quoteBtn.addEventListener("click", randomQuote);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > window.innerHeight / 2) {
    document.getElementById("up-button").style.display = "block";
  } else {
    document.getElementById("up-button").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
