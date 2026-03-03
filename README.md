# 🚀 AWS EC2 Deployment with Infrastructure as Code

[![Terraform](https://img.shields.io/badge/Terraform-1.0+-blue?logo=terraform)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/Ansible-2.9+-red?logo=ansible)](https://www.ansible.com/)
[![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?logo=docker)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)](https://nodejs.org/)

> A complete Infrastructure-as-Code project demonstrating automated deployment of a Dockerized Node.js application on AWS EC2 instances.

---

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Deployment Guide](#deployment-guide)
- [Access Application](#access-application)
- [Contributing](#contributing)

---

## 🏗️ Architecture Overview

This project automates the complete infrastructure and application deployment pipeline:

```
┌─────────────────────────────────────────────────────────┐
│  Terraform → Infrastructure Provisioning                │
│  • EC2 Instances                                        │
│  • Security Groups                                      │
│  • VPC Configuration                                    │
└──────────────────┬──────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────────┐
│  Ansible → Configuration Management                     │
│  • Server Setup & Configuration                         │
│  • Docker Installation                                  │
│  • Application Deployment                               │
└──────────────────┬──────────────────────────────────────┘
                   ↓
┌─────────────────────────────────────────────────────────┐
│  Docker → Containerization                              │
│  • Build Docker Image                                   │
│  • Run Application Container                            │
│  • Port 3000 Exposure                                   │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
terraform-ansible-docker-ec2-nodejs/
│
├── terraform/                 # Infrastructure provisioning
│   ├── main.tf               # Main Terraform configuration
│   ├── variables.tf          # Variable definitions
│   └── outputs.tf            # Output definitions
│
├── ansible/                  # Configuration management
│   ├── playbook.yml          # Main Ansible playbook
│   ├── inventory.ini         # Inventory configuration
│   └── roles/                # Ansible roles
│
├── app/                      # Node.js application
│   ├── package.json          # Dependencies
│   ├── server.js             # Application entry point
│   └── Dockerfile            # Docker configuration
│
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Terraform** (v1.0 or higher)
- **Ansible** (v2.9 or higher)
- **Docker** (Latest version)
- **AWS CLI** configured with appropriate credentials
- **SSH Key Pair** for EC2 access

---

## 🚀 Deployment Guide

### Step 1️⃣: Provision Infrastructure with Terraform

```bash
cd terraform

# Initialize Terraform
tf init

# Review the execution plan
tf plan

# Apply the configuration
tf apply
```

**Output:** EC2 instance(s) with security groups and networking configured.

---

### Step 2️⃣: Deploy Application with Ansible

```bash
cd ../ansible

# Run the Ansible playbook
ansible-playbook -i inventory.ini playbook.yml
```

**This playbook automatically:**
- ✅ Installs Docker on the EC2 instance
- ✅ Copies the application code
- ✅ Builds the Docker image
- ✅ Runs the container on port 3000
- ✅ Configures networking and security

---

### Step 3️⃣: Access Your Application

Once deployment is complete, access your application:

```
http://<EC2_PUBLIC_IP>:3000
```

To find your EC2 public IP:
```bash
tf output ec2_public_ip
```

---

## ��� Configuration

### Terraform Variables

Edit `terraform/variables.tf` to customize:
- Instance type
- Instance count
- Region
- AMI selection

### Ansible Variables

Edit `ansible/playbook.yml` to customize:
- Docker version
- Application port
- Environment variables

---

## 📊 Troubleshooting

| Issue | Solution |
|-------|----------|
| Terraform apply fails | Verify AWS credentials and permissions |
| Ansible connection timeout | Check security group rules allow SSH (port 22) |
| Docker container won't start | Review application logs with `docker logs` |
| Port 3000 not accessible | Verify security group allows inbound traffic on port 3000 |

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For issues or questions, please open an issue on GitHub.

**Happy Deploying! 🎉**