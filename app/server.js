const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Project</title>
        <style>
          body {
            font-family: Arial;
            background: linear-gradient(to right, #4e73df, #1cc88a);
            text-align: center;
            color: white;
            padding-top: 100px;
          }
          h1 {
            font-size: 50px;
          }
          p {
            font-size: 20px;
          }
          .box {
            background: rgba(0,0,0,0.3);
            padding: 40px;
            border-radius: 10px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>🚀 Terraform + Ansible + Docker</h1>
          <p>Successfully Deployed on AWS EC2</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});