🚀 AWS EC2 Node.js Deployment
Terraform + Ansible + Docker

This project demonstrates an automated DevOps workflow to deploy a containerized Node.js application on AWS EC2 using:

Terraform – Infrastructure provisioning

Ansible – Server configuration

Docker – Application containerization

📁 Project Structure
terraform-ansible-docker-ec2-nodejs/
│
├── terraform/        # EC2 infrastructure provisioning
├── ansible/          # Server configuration & deployment
├── app/              # Node.js application (Dockerized)
│
├── .gitignore
└── README.md
⚙️ Workflow Overview
1️⃣ Infrastructure Provisioning

Terraform creates:

EC2 Instance

Security Group

Key Pair configuration

2️⃣ Server Configuration

Ansible performs:

System update

Docker installation

Application deployment

3️⃣ Application Deployment

Docker:

Builds image from Dockerfile

Runs container on port 3000

🚀 How to Deploy
Step 1 – Provision EC2
cd terraform
terraform init
terraform apply
Step 2 – Deploy Application
cd ../ansible
ansible-playbook -i inventory.ini playbook.yml
Step 3 – Access Application
http://<EC2_PUBLIC_IP>:3000
🔒 Security Notes

The following are ignored via .gitignore:

*.pem (SSH keys)

*.tfstate

.terraform/

node_modules/

inventory.ini

Sensitive files are never pushed to GitHub.

✅ Key Achievements

✔ Infrastructure as Code (IaC)
✔ Automated Docker installation
✔ Containerized Node.js deployment
✔ Repeatable cloud deployment workflow

📌 Tech Stack

AWS EC2

Terraform

Ansible

Docker

Node.js
👨‍💻 Author

Adnan Shafiq
👨‍💻 Author

Your Name
