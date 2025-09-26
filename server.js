
const http = require('http');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url.toLowerCase() === '/home') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home Page</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        background-color: #333;
      }
      header {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      nav {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
      }
      .left_nav_sec {
        height: 100%;
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .logo_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4vw;
      }
      .right_nav_sec {
        height: 100%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tags_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        margin-left: 8vw;
      }
      .tag {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
        transition: 0.8s;
      }
      .tag:hover{
        color: crimson;
      }
      

      .landing_page {
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .left_home {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        flex-direction: column;
      }
      .para_home {
        font-size: 1.3rem;
        font-weight: 500;
        width: 90%;
      }
      .cta_home{
        padding: 2vh 5vh;
       border: 2px solid crimson;
        border-radius: 5px;
        background: transparent;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        transition: 0.8s;
      }
      .cta_home:hover{
        background-color: #3f3e3e;
      }
       .right_home{
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

      }
      .img_div_home{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: 5vw;
      }
    </style>
  </head>
  <body>
    <header>
      <nav>
        <div class="left_nav_sec">
          <div class="logo_div">
            <h2 class="logo">My_Tech</h2>
          </div>
        </div>
        <div class="right_nav_sec">
          <div class="tags_div">
            <a href="/" class="tag">Default</a>
            <a href="/contact" class="tag">Contact</a>
            <a href="/about" class="tag">About_us</a>
          </div>
        </div>
      </nav>
      <div class="landing_page">
        <div class="left_home">
          <h1 class="heading_home">Welcome to My_Tech Industry</h1>
          <p class="para_home">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptates dolore placeat dolor, facere expedita soluta optio
            beatae, necessitatibus, commodi voluptatibus excepturi consectetur.
            Aliquid, rem? Fugiat repellendus impedit eius quasi?
          </p>
          <button class="cta_home">More Info..</button>
        </div>
        <div class="right_home">
          <div class="img_div_home">
            <img
              src="https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home_img"
              height="300px"
            />
          </div>
        </div>
      </div>
    </header>
  </body>
</html>
`)
        res.end();

    }
    else if (url.toLowerCase() === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About_us</title>
    <style>   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        background-color: #333;
      }
      header {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      nav {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
      }
      .left_nav_sec {
        height: 100%;
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .logo_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4vw;
      }
      .right_nav_sec {
        height: 100%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tags_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        margin-left: 8vw;
      }
      .tag {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
        transition: 0.8s;
      }
      .tag:hover{
        color: crimson;
      }
      .about_sec{
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .upper_about_sec{
        height: 15%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5vh;
      }
      .upper_about_sec > h1{
        font-size: 2rem;
        color: white;
        font-weight: 700;
      }
      .lower_about_sec{
        height: 85%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        gap:2vh;
      }
      .cntnt_upr_div, .cntnt_lwr_div{
        height: 35%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid white;
        border-radius: 10px;
        gap: 2vh;
      }
      .hdng_upr_div, .hdng_lwr_div{
        font-size: 2rem;
        font-weight: 700;
        width: 95%;
      }
      .cnt_upr_div, .cnt_lwr_div{
        width: 95%;
        font-size: 1rem;
        font-weight: 500;
      }

      </style>
</head>
<body>
    <header>
      <nav>
        <div class="left_nav_sec">
          <div class="logo_div">
            <h2 class="logo">My_Tech</h2>
          </div>
        </div>
        <div class="right_nav_sec">
          <div class="tags_div">
            <a href="/home" class="tag">Home</a>
            <a href="/" class="tag">Default</a>
            <a href="/contact" class="tag">Contact</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="about_sec">
        <div class="upper_about_sec">
            <h1>About Our Company</h1>
        </div>
        <div class="lower_about_sec">
            <div class="cntnt_upr_div">
                <h2 class="hdng_upr_div">Our Mission</h2>
                <p class="cnt_upr_div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati temporibus voluptatem voluptate deleniti ab ratione id atque reiciendis optio nihil pariatur expedita impedit sapiente esse consectetur quos, odit iusto neque ullam numquam totam mollitia!</p>
            </div>
            <div class="cntnt_lwr_div">
                <h2 class="hdng_lwr_div">Our Team</h2>
                <p class="cnt_lwr_div">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, obcaecati repudiandae? Aspernatur cumque culpa, voluptatibus dolores obcaecati officia laborum exercitationem rerum, facilis voluptas maiores nulla provident beatae in saepe unde architecto harum repellendus nisi incidunt?</p>
            </div>
        </div>
    </div>
</body>
</html>`)
        res.end();

    }
    else if (url.toLowerCase() === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Page</title>
    <style>
         * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        background-color: #333;
      }
      header {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      nav {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
      }
      .left_nav_sec {
        height: 100%;
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .logo_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4vw;
      }
      .right_nav_sec {
        height: 100%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tags_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        margin-left: 8vw;
      }
      .tag {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
        transition: 0.8s;
      }
      .tag:hover{
        color: crimson;
      }
      .contact_section{
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .upper_contact{
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cntc_page{
        color: white;
        font-size: 2rem;
        font-weight: 700;
      }
     .lower_contact{
        height: 90%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
     }
     form{
        height: 100%;
        width: 50%;
        border: 1px solid white;
        display: flex;
        padding: 4vh;
        gap: 2vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
     }
     .username, .email, .message{
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: left;
        width: 80%;
     }
     #username, #email, #msg{
        height: 35px;
        width: 80%;
        border: none;
        background-color: #c0bcbc;
        border-radius: 10px;
        outline: none;
     }
     .submit{
        padding: 2vh 7vh;
        border: 1px solid crimson;
        border-radius: 5px ;
        background: transparent;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 2vh;

     }
    </style>
    
</head>
<body>
      <header>
      <nav>
        <div class="left_nav_sec">
          <div class="logo_div">
            <h2 class="logo">My_Tech</h2>
          </div>
        </div>
        <div class="right_nav_sec">
          <div class="tags_div">
            <a href="/home" class="tag">Home</a>
            <a href="/" class="tag">Default</a>
            <a href="/about" class="tag">About_us</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="contact_section">
        <div class="upper_contact">
            <h1 class="cntc_page">Get in Touch</h1>
        </div>
        <div class="lower_contact">
            <form action="#">
               <p class="username">Name</p>
               <input type="text" name="" id="username" required>
               <p class="email">Email</p>
               <input type="email" name="" id="email">
               <p class="message">Message</p>
               <textarea name="" id="msg"></textarea>
               <input type="submit" value="submit" class="submit">
            </form>
        </div>

    </div>
    
</body>
</html>`)
        res.end();

    }
    else if (url.toLowerCase() === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Default Page</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        background-color: #333;
      }
      header {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      nav {
        height: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid white;
      }
      .left_nav_sec {
        height: 100%;
        width: 12%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .logo_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4vw;
      }
      .right_nav_sec {
        height: 100%;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .tags_div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        margin-left: 8vw;
      }
      .tag {
        text-decoration: none;
        color: white;
        font-size: 1.3rem;
        font-weight: 700;
        transition: 0.8s;
      }
      .tag:hover {
        color: crimson;
      }
      .default_sec_div{
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        gap: 5vh;
      }
      .hdng_default{
        font-size: 3rem;
        font-weight: 700;
      }
      .para_default{
        font-size: 1.5rem;
        font-weight: 500;
        color: #b9b8b8;
      }
      .btn_default{
        padding: 2vh 4vh;
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        background: transparent;
        border: 1px solid crimson;
        border-radius: 10px;
        transition: 0.8s;
      }
      .btn_default:hover{
        background-color: #646464;
      }
      
    </style>
  </head>
  <body>
    <header>
      <nav>
        <div class="left_nav_sec">
          <div class="logo_div">
            <h2 class="logo">My_Tech</h2>
          </div>
        </div>
        <div class="right_nav_sec">
          <div class="tags_div">
            <a href="/home" class="tag">Home</a>
            <a href="/about" class="tag">About_us</a>
            <a href="/contact" class="tag">Contact</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="default_sec_div">
      <h1 class="hdng_default">Welcome To My_Tech</h1>
      <p class="para_default">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolor debitis, saepe quis provident eius.</p>
      <button class="btn_default">Explore Our Services</button>
    </div>
  </body>
</html>
`)
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      html,
      body {
        height: 100%;
        width: 100%;
        background-color: #333;
      }
      .not_found_ctnt{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .nft_hdng{
        font-size: 5rem;
        color: white;
        font-weight: 900;
      }
      .para_nft{
        font-size: 1.5rem;
        color: white;
        font-weight: 500;
      }
      .para_nft > a{
        text-decoration: none;
        color: crimson;
      }
    </style>
</head>
<body>
    <div class="not_found_ctnt">
        <h1 class="nft_hdng">404</h1>
        <p class="para_nft">Oops! The page you're looking for could not be found.</p>
        <p class="para_nft">Go back to the <a href="/home">Homepage</a>.</p>
    </div>
    
</body>
</html>`)
        res.end();
    }

});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The Nodejs Server is running on:- http://localhost:${PORT}`);
})