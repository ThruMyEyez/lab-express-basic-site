// Here can be class generators..

const homeData = {
  test: "123",
  firstName: "Kai",
  lastName: "Ahmedi",
  age: 36,
  location: { country: "Germany", city: "Nürnberg" },
  profession: { role: "Artist", institution: "self" },
  images: { image: "/views/images/cherrys.jpg", name: "", drawingType: "" },
};

const workData = { test: "345", someArt: [{}, {}, {}] };

const galleryData = {
  images: [
    { image: "/views/images/cherrys.jpg", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
    { image: "", name: "", drawingType: "" },
  ],
};

const aboutData = {
  firstName: "Kai",
  lastName: "Ahmedi",
  age: 36,
  location: { country: "Germany", city: "Nürnberg" },
  profession: { role: "Artist", institution: "self" },
};

exports.homeData = homeData;
exports.workData = workData;
exports.galleryData = galleryData;
exports.aboutData = aboutData;
