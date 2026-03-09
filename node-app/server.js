const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
  <title>CC Deployment Project</title>

  <style>

  body{
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg,#1e3c72,#2a5298);
    color:white;
    text-align:center;
  }

  h1{
    margin-top:40px;
    font-size:40px;
  }

  .pipeline{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30px;
    margin-top:30px;
    font-size:18px;
  }

  .pipeline img{
    width:60px;
    height:60px;
  }

  .container{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:30px;
    padding:50px;
  }

  .card{
    background:white;
    color:#333;
    width:220px;
    padding:25px;
    border-radius:12px;
    box-shadow:0px 6px 15px rgba(0,0,0,0.3);
    transition:0.3s;
  }

  .card:hover{
    transform:scale(1.08);
  }

  .name{
    font-size:22px;
    font-weight:bold;
  }

  .role{
    margin-top:10px;
    color:#666;
  }

  footer{
    margin-top:30px;
    padding:20px;
    font-size:14px;
  }

  </style>
  </head>

  <body>

  <h1>🚀 Cloud Computing Deployment Project</h1>

  <div class="pipeline">

  <div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg">
  <div>Terraform</div>
  </div>

  ➜

  <div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg">
  <div>Ansible</div>
  </div>

  ➜

  <div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg">
  <div>Docker</div>
  </div>

  ➜

  <div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg">
  <div>AWS</div>
  </div>

  </div>

  <div class="container">

    <div class="card">
      <div class="name">Nayan Kesare</div>
    </div>

    <div class="card">
      <div class="name">Sifan Shamlewale</div>
    </div>

    <div class="card">
      <div class="name">Omkar Magar</div>
    </div>

    <div class="card">
      <div class="name">Rushikesh Pawar</div>
    </div>

  </div>

  <footer>
  Infrastructure Provisioning using Terraform | Configuration using Ansible | Containerization using Docker | Deployment on AWS
  </footer>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
