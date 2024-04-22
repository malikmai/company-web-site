const express = require("express");
const app = express();
const path = require("path");

const OFFICE = {
  name: "Byte Bosses Law",
  address: "123 Sesame Street",
  phone: "123-456-9876",
  staff: [
    {
      id: 1,
      name: "Joe Shmoe",
      contact: "111-222-3333",
      email: "joe.shomoe@email.com",
      category: "Defense Attorney",
    },
    {
      id: 2,
      name: "Sally Sue",
      contact: "444-555-6666",
      email: "sally.sue@email.com",
      category: "Prosecutor Attorney",
    },
    {
      id: 3,
      name: "John Doe",
      contact: "777-888-9999",
      email: "john.doe@email.com",
      category: "Judge",
    },
  ],
  reviews: [
    {
      client: "Alice Johnson",
      text: "Excellent service with a personal touch. Highly recommended!",
      rating: 5,
    },
    {
      client: "Bobby Smith",
      text: "Very professional team. They handled my case with care and expertise.",
      rating: 4,
    },
    {
      client: "Cathy Lee",
      text: "Outstanding commitment and results! Thank you!",
      rating: 5,
    },
  ],
};

app.get("/", (req, res) => {
  console.log("Home route accessed");
  res.render("home", { title: OFFICE.name, office: OFFICE });
});
app.get("/staff", (req, res) => {
  console.log("Staff page accessed");
  res.render("staff", { title: "Our Staff - " + OFFICE.name, office: OFFICE });
});
app.get("/reviews", (req, res) => {
  console.log("Reviews page accessed");
  res.render("reviews", {
    title: "Client Reviews - " + OFFICE.name,
    office: OFFICE,
    reviews: OFFICE.reviews,
  });
});
app.get("/contact", (req, res) => {
  console.log("Contact page accessed");
  res.render("contact", {
    title: "Contact Us - " + OFFICE.name,
    office: OFFICE,
  });
});
app.get("/about", (req, res) => {
  console.log("About page accessed");
  res.render("about", {
    title: "Company History - " + OFFICE.name,
    office: OFFICE,
    established: 2010,
    history:
      "Founded in 2010, Byte Bosses Law has rapidly grown to become a trusted partner in the community. With a dedication to justice and a passion for advocacy, our firm has handled thousands of cases with a focus on providing personalized legal solutions. Our team of seasoned attorneys brings a wealth of expertise in various fields of law, including corporate, criminal defense, and family law. Over the years, we have expanded our services and staff to better serve our clients' needs, ensuring that each client receives the attention and expertise they deserve.",
  });
});
app.post("/submit-contact-form", (req, res) => {
  console.log("Received contact form submission");
  // Here you would handle the form data, e.g., store it in a database or send an email
  res.send("Thank you for your message. We will get back to you soon.");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.listen(3000);
console.log("Listening 3000");
