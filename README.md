# Terraform + Ansible + Docker + EC2 Node.js Deployment

A professional DevOps workflow demonstrating **automated deployment** of a Node.js application on AWS EC2 using **Terraform, Ansible, and Docker**.

---

## 📂 Project Structure
terraform-ansible-docker-ec2-nodejs/
├─ terraform/
│ ├─ main.tf
│ ├─ variables.tf
│ └─ outputs.tf
├─ ansible/
│ ├─ playbook.yml
│ ├─ inventory.ini # Ignored in git for security
│ └─ files/ # Extra files if needed
├─ app/
│ ├─ Dockerfile
│ ├─ .dockerignore
│ ├─ package.json
│ ├─ package-lock.json
│ ├─ server.js
│ └─ node_modules/ # Ignored in git
├─ .gitignore
└─ README.md


---

## ⚙️ Prerequisites

- AWS account with access keys
- Terraform installed
- Ansible installed
- Docker installed (or will be installed via Ansible)
- SSH key for EC2 instance

---

## 🚀 Deployment Steps

### 1. Provision EC2 with Terraform

```bash
cd terraform
terraform init
terraform apply

After apply, note the public IP from Terraform outputs.

2. Deploy App with Ansible
cd ../ansible
ansible-playbook -i inventory.ini playbook.yml

This playbook will:

Update the server packages

Install Docker

Copy the Node.js app

Build the Docker image

Run the Docker container on port 3000

3. Verify Deployment

Open your browser and visit:

http://<EC2_PUBLIC_IP>:3000

You should see the Node.js application running.

📝 Important Notes

Dockerfile must be capitalized (Dockerfile)

.dockerignore should include node_modules to speed up builds

Avoid nested app folders to prevent Docker build errors

Direct Ubuntu deployment is faster and more reliable than Windows/WSL setups

For repeated deployments, ensure folder structure matches exactly

🔧 Optional Docker Commands

Check running containers:

docker ps

Stop a container:

docker stop myapp_container

Remove a container:

docker rm myapp_container

Remove Docker image:

docker rmi myapp

View container logs:

docker logs myapp_container
✅ Key Learnings

Hands-on DevOps workflow: Terraform + Ansible + Docker

Automated server provisioning and app deployment

Containerized Node.js application

Handling common deployment issues: paths, permissions, Docker build

👤 Author

Your Name


---

Bhai, ye **professional GitHub-ready README.md** hai:  

- Clean sections ✅  
- Clear folder structure ✅  
- Deployment instructions ✅  
- Optional commands + notes ✅  
- Market-ready professional look ✅  

Tum simply **root folder** me `README.md` save kar do aur GitHub me push kar do.  

Agar chaho, mai ab tumhare liye **final GitHub push-ready repo** ready kar doon jisme:  

- Correct `.gitignore`  
- `README.md`  
- Terraform / Ansible / app folders  
- Node.js Docker setup  

Ek hi push me deploy ready ho jaye.  

Chahoge mai wo ready kar doon?
