const express = require("express");
const app = express();
const path = require("path");

const OFFICE = {
  name: "Byte Bosses Law",
  address: "123 Seaseme Street",
  phone: "123-456-9876",
  staff: [
    {
      id: 1,
      name: "Joe Shmoe",
      contact: "111-222-3333",
      email: "joe.shomoe@email.com",
      category: "Defense",
    },
    {
      id: 2,
      name: "Sally Sue",
      contact: "444-555-6666",
      email: "sally.sue@email.com",
      category: "Prosecutor",
    },
    {
      id: 3,
      name: "John Doe",
      contact: "777-888-9999",
      email: "john.doe@email.com",
      category: "Judge",
    },
  ],
};

app.get("/", (req, res) => {
  console.log("Home route accessed");
  res.render("home", { title: OFFICE.name, office: OFFICE });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(3000);
console.log("Listening 3000");
