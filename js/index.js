function onInit() {
  console.log("ready");
  renderPersonalDetails();
  renderSoftware();
  renderLanguages();
  renderWorkExperience();
  renderEducation();
  renderSocial();
  renderMyProjects();
}

var personalDetails = [
  {
    item: "Name",
    value: "Fadi Khier",
  },
  {
    item: "Tel",
    value: "+972-53-520-2511",
  },
  {
    item: "Email",
    value: "fk.1996.5@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value: "with Web Applications, Vue, Angular and Office",
  },
  {
    item: "Very good",
    value: "control of Firebase",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB",
  },
];
var languages = [
  {
    item: "Arabic",
    value: "Mother's tongue",
  },
  {
    item: "Hebrew",
    value: "Full command",
  },
  {
    item: "English",
    value: "Very good command",
  },
];
var workExperience = [
  {
    title: "2022 – Today, Carpenter and renovations man",
    items: ["Carpenter and renovations man"],
  },
  {
    title: "2015 – 2019, Carpentry worker",
    items: [
      "First begin as CNC machiene worker",
      "after that planning and supervision",
    ],
  },
  {
    title: "2014 – 2015, Renovations man",
    items: ["All renovation works such as plaster, paint, flooring and more"],
  },
];
var education = [
  {
    title: "2023 – Full Stack programming course at Coding Academy College",
    items: ["Frontend: Vue, React, Angular", "Backend: Node.js, MongoDB"],
  },
  {
    title: "2023 – Software Practical Engineer, Ort Brauda College",
    items: ["Administrative site for a planning and construction company"],
  },
  {
    title: "2014 – 2017, Mechatronics Practical Engineer, Ort Brauda College",
    items: [
      "I developed textbooks for the public schools based on my analysis of the Arabic language's grammatical structure",
    ],
  },
];
var social = [
  {
    item: "Development",
    value:
      "and publication of a grammatical analysis method in Arabic helping teachers and students understand the various topics of syntax",
  },
  {
    item: "Volunteering",
    value: "in helping Arabic students reach matriculation",
  },
  {
    item: "Representative",
    value: "of the Student Association at TAU",
  },
  {
    item: "2 years",
    value:
      "participation in a 'Perah' project at an innovative school in Yarka",
  },
];

var myProjects = [
  {
    title: "To Be Programmer",
    desc: "A website for a programming course",
    technologise: ["HTML", "CSS", "JavaScript"],
    createdAt: "1/3/2023",
    link: "https://fadi2109.github.io/ProCode-ToBeProgrammer/",
    img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_05-1.jpg",
  },
  {
    title: "To Be Programmer",
    desc: "A website for a programming course",
    technologise: ["HTML", "CSS", "JS"],
    createdAt: "1/3/2023",
    link: "https://fadi2109.github.io/ProCode-ToBeProgrammer/",
    img: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_05-1.jpg",
  },
];

var ePersonaDetails = document.querySelector(".personalDetails");
var eSoftware = document.querySelector(".software");
var eLanguages = document.querySelector(".languages");
var eWorkExperience = document.querySelector(".workExperience");
var eEducation = document.querySelector(".education");
var eSocial = document.querySelector(".social");
var eMyProjects = document.querySelector(".myProjects");

function renderPersonalDetails() {
  var strHTML = "";
  personalDetails.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (ePersonaDetails) ePersonaDetails.innerHTML = strHTML;
}

function renderSoftware() {
  var strHTML = "";
  software.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSoftware) eSoftware.innerHTML = strHTML;
}

function renderLanguages() {
  var strHTML = "";
  languages.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eLanguages) eLanguages.innerHTML = strHTML;
}

function renderWorkExperience() {
  var strHTML = "";
  workExperience.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eWorkExperience) eWorkExperience.innerHTML = strHTML;
}

function renderEducation() {
  var strHTML = "";
  education.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eEducation) eEducation.innerHTML = strHTML;
}

function renderSocial() {
  var strHTML = "";
  social.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSocial) eSocial.innerHTML = strHTML;
}

function renderMyProjects() {
  console.log("myProjects", myProjects);
  var strHTML = "";
  myProjects.forEach(function (item) {
    (strHTML += `<div class="card m-1 cardProj" style="width: 18rem">
    <img
      src="${item.img}"
      class="card-img-top"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        <span class="fs-5 fw-bolder">technologies:</span>
        <ul>
          `),
      item.technologise.forEach(function (item) {
        strHTML += `<li>${item}</li>`;
      }),
      (strHTML += `
      </ul>
      <p class="fs-6 text-primary">Created at: ${item.createdAt}</p>
      </p>
      <a href="${item.link}" target="_blank" class="btn btn-success col-12">Visit Project</a>
    </div>
  </div>`);
  });
  if (eMyProjects) eMyProjects.innerHTML = strHTML;
}
