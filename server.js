
const http = require('http');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url.toLowerCase() === '/home') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Innovate LLC - Home</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      header {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
      }
      nav {
        display: flex;
        justify-content: center;
        background-color: #444;
      }
      nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }
      nav a:hover {
        background-color: #555;
      }
      .container {
        padding: 2rem;
      }
      .hero {
        text-align: center;
        padding: 4rem 1rem;
        background-color: #5b6c8c;
        color: white;
      }
      .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }
      .services {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 2rem;
      }
      .service-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 1rem;
        padding: 1.5rem;
        width: 300px;
        text-align: center;
      }
      footer {
        text-align: center;
        padding: 1rem 0;
        background-color: #333;
        color: white;
        position: relative;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Innovate LLC</h1>
    </header>

    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="hero">
      <h1>Driving the Future of Technology</h1>
      <p>We create innovative solutions for the modern world.</p>
    </div>

    <div class="container">
      <h2 style="text-align: center">Our Services</h2>
      <div class="services">
        <div class="service-card">
          <h3>Web Development</h3>
          <p>
            Building responsive and dynamic websites tailored to your needs.
          </p>
        </div>
        <div class="service-card">
          <h3>Mobile App Development</h3>
          <p>
            Creating intuitive and powerful mobile applications for iOS and
            Android.
          </p>
        </div>
        <div class="service-card">
          <h3>Cloud Solutions</h3>
          <p>
            Leveraging the cloud to scale your business and improve efficiency.
          </p>
        </div>
      </div>
    </div>

    <footer>
      <p>
        <li><i class="ri-copyright-line"></i></li>
        2024 Innovate LLC. All rights reserved.
      </p>
    </footer>
  </body>
</html>
`);
        res.end();

    }
    else if (url.toLowerCase() === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Innovate LLC - About Us</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      header {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
      }
      nav {
        display: flex;
        justify-content: center;
        background-color: #444;
      }
      nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }
      nav a:hover {
        background-color: #555;
      }
      .container {
        padding: 2rem;
        max-width: 900px;
        margin: 0 auto;
      }
      .content-section {
        background: white;
        padding: 2rem;
        margin-top: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      footer {
        text-align: center;
        padding: 1rem 0;
        background-color: #333;
        color: white;
        position: relative;
        bottom: 0;
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Innovate LLC</h1>
    </header>

    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="container">
      <h2 style="text-align: center">About Our Company</h2>
      <div class="content-section">
        <h3>Our Mission</h3>
        <p>
          To empower businesses by providing cutting-edge technological
          solutions that drive growth, efficiency, and success. We believe in
          the power of innovation to transform industries and create a better
          future.
        </p>
      </div>
      <div class="content-section">
        <h3>Our Team</h3>
        <p>
          We are a diverse team of passionate developers, designers, and
          strategists dedicated to delivering excellence. Our collective
          experience and collaborative spirit are the cornerstones of our
          success.
        </p>
      </div>
    </div>

    <footer>
      <p>
        <i><i class="ri-copyright-line"></i></i> 2024 Innovate LLC. All rights
        reserved.
      </p>
    </footer>
  </body>
</html>
`);
        res.end();

    }
    else if (url.toLowerCase() === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Innovate LLC - Contact</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      header {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
      }
      nav {
        display: flex;
        justify-content: center;
        background-color: #444;
      }
      nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }
      nav a:hover {
        background-color: #555;
      }
      .container {
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .contact-form {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .contact-form label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }
      .contact-form input,
      .contact-form textarea {
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .contact-form button {
        background-color: #5b6c8c;
        color: white;
        padding: 1rem 1.5rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      .contact-form button:hover {
        background-color: #4a5a7b;
      }
      footer {
        text-align: center;
        padding: 1rem 0;
        background-color: #333;
        color: white;
        position: relative;
        bottom: 0;
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Innovate LLC</h1>
    </header>

    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="container">
      <h2 style="text-align: center">Get In Touch</h2>
      <div class="contact-form">
        <form action="#">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

    <footer>
      <p><i class="ri-copyright-line"></i> 2024 Innovate LLC. All rights reserved.</p>
    </footer>
  </body>
</html>
`)
        res.end();

    }
    else if (url.toLowerCase() === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Innovate LLC</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      header {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
      }
      nav {
        display: flex;
        justify-content: center;
        background-color: #444;
      }
      nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }
      nav a:hover {
        background-color: #555;
      }
      .welcome-container {
        text-align: center;
        padding: 5rem 2rem;
      }
      .welcome-container h1 {
        font-size: 3rem;
        color: #333;
      }
      .welcome-container p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
      }
      .cta-button {
        background-color: #5b6c8c;
        color: white;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.1rem;
        transition: background-color 0.3s ease;
      }
      .cta-button:hover {
        background-color: #4a5a7b;
      }
      footer {
        text-align: center;
        padding: 1rem 0;
        background-color: #333;
        color: white;
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Innovate LLC</h1>
    </header>

    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="welcome-container">
      <h1>Welcome to Innovate LLC</h1>
      <p>
        Your partner in building the future of technology, one solution at a
        time.
      </p>
      <a href="/home" class="cta-button">Explore Our Services</a>
    </div>

    <footer>
      <p><i class="ri-copyright-line"></i> 2024 Innovate LLC. All rights reserved.</p>
    </footer>
  </body>
</html>
`)
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Innovate LLC</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      header {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
      }
      nav {
        display: flex;
        justify-content: center;
        background-color: #444;
      }
      nav a {
        color: white;
        padding: 14px 20px;
        text-decoration: none;
        text-align: center;
      }
      nav a:hover {
        background-color: #555;
      }
      .welcome-container {
        text-align: center;
        padding: 5rem 2rem;
      }
      .welcome-container h1 {
        font-size: 3rem;
        color: #333;
      }
      .welcome-container p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
      }
      .cta-button {
        background-color: #5b6c8c;
        color: white;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1.1rem;
        transition: background-color 0.3s ease;
      }
      .cta-button:hover {
        background-color: #4a5a7b;
      }
      footer {
        text-align: center;
        padding: 1rem 0;
        background-color: #333;
        color: white;
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1vh;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Innovate LLC</h1>
    </header>

    <nav>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </nav>

    <div class="welcome-container">
      <h1>Welcome to Innovate LLC</h1>
      <p>
        Your partner in building the future of technology, one solution at a
        time.
      </p>
      <a href="/home" class="cta-button">Explore Our Services</a>
    </div>

    <footer>
      <p><i class="ri-copyright-line"></i> 2024 Innovate LLC. All rights reserved.</p>
    </footer>
  </body>
</html>
`)
        res.end();
    }

});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The Nodejs Server is running on:- http://localhost:${PORT}`);
})