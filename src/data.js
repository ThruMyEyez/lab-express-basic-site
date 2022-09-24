// Here can be class generators..

const homeData = {
  test: "123",
  firstName: "Kai",
  lastName: "Ahmedi",
  age: 36,
  location: { country: "Germany", city: "Nürnberg" },
  profession: { role: "Artist", institution: "self" },
  image: { src: "/cherrys.jpg", name: "", drawingType: "" },
};

const workData = { test: "345", title: "My artworks", someArt: [{}, {}, {}] };

const galleryData = {
  images: [
    { src: "/cherrys.jpg", name: "", drawingType: "Aquarelle" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
    { src: "", name: "", drawingType: "" },
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
