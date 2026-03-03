🚀 AWS EC2 Deployment
Terraform • Ansible • Docker • Node.js

A complete Infrastructure-as-Code project demonstrating automated deployment of a Dockerized Node.js application on AWS EC2.

📦 Architecture Overview
Terraform → Provision EC2 Infrastructure
Ansible → Configure Server & Install Docker
Docker → Build & Run Application Container

📁 Project Structure
terraform-ansible-docker-ec2-nodejs/
│
├── terraform/      # Infrastructure provisioning
├── ansible/        # Configuration management
├── app/            # Node.js application
│
├── .gitignore
└── README.md

⚙️ Deployment Guide
1️⃣ Provision Infrastructure
cd terraform
terraform init
terraform apply
2️⃣ Deploy Application
cd ../ansible
ansible-playbook -i inventory.ini playbook.yml
This will automatically:
Install Docker
Copy application
Build Docker image
Run container on port 3000
3️⃣ Access Application
http://<EC2_PUBLIC_IP>:3000
