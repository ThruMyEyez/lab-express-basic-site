//fork
const colors = require("colors");
const hbs = require("hbs");
const express = require("express"),
  app = express(),
  port = 3030;

const { homeData, workData, galleryData, aboutData } = require("./src/data");

app.use(express.static(__dirname + "/views/images"));
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (request, response, next) => {
  response.render("home", homeData);
});

app.get("/about", (request, response) => {
  response.render("about", aboutData);
});

app.get("/works", (request, response) => {
  response.render("works", workData);
});

//app.get("/gallery", (request, response) => {
//  response.render("gallery");
//});
console.log(workData.title);
app.listen(port, () => console.log(`${colors.yellow.underline("server listening to port: ")} ${port}`));

/* create = app.post()
  read = app.get()
  update = app.put()
  delete = app.delete()
 */
