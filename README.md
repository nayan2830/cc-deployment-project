# 🚀 Cloud Computing Deployment Project

### Terraform • Ansible • Docker • AWS EC2

---

# 📌 Project Overview

This project demonstrates a complete **DevOps automated deployment pipeline** for deploying a **Node.js web application on AWS cloud infrastructure**.

The deployment is fully automated using modern DevOps tools and follows the **Build Once, Deploy Anywhere** principle.

---

# 🧠 Key Features

* Infrastructure provisioning using **Terraform (IaC)**
* Automated configuration using **Ansible**
* Application containerization using **Docker**
* Cloud deployment on **AWS EC2**
* Uses **Docker Hub** for image storage and reuse
* Fully automated pipeline with minimal manual steps

---

# 🏗 Architecture

```id="rqgkzx"
Local Machine
     │
     ├── Docker Build
     ├── Docker Push (Docker Hub)
     │
     ▼
Docker Hub (Image Registry)
     │
     ▼
Terraform (IaC)
     │
     ▼
AWS EC2 + Security Group
     │
     ▼
Ansible Automation
     │
     ├── Install Docker
     ├── Pull Image
     ├── Run Container
     │
     ▼
Node.js Application
     │
     ▼
User Browser 🌐
```

---

# 📂 Project Structure

```id="vmvshv"
cc-project/
│
├── README.md
├── .gitignore
│
├── terraform/
│   └── main.tf
│
├── ansible/
│   ├── playbook.yml
│   └── inventory (auto-generated)
│
├── node-app/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── screenshots/
│   ├── terraform.png
│   ├── ansible.png
│   ├── docker.png
│   └── app.png
```

---

# ⚙️ Prerequisites

Ensure the following tools are installed:

* Terraform
* Ansible
* Docker
* AWS CLI (configured)
* Git
* Linux / WSL environment

---

# 🚀 Deployment Steps

## Step 1 — Build & Push Docker Image

```bash id="gk8yla"
cd node-app
docker build -t <dockerhub-username>/node-app:latest .
docker login
docker push <dockerhub-username>/node-app:latest
```

---

## Step 2 — Provision Infrastructure using Terraform

```bash id="8sr1g7"
cd terraform
terraform init
terraform apply
```

This will:

* Create EC2 instance
* Configure security group (ports 22 & 80)
* Generate Ansible inventory file

---

## Step 3 — Configure & Deploy using Ansible

```bash id="mk9jql"
cd ../ansible
ansible-playbook -i inventory playbook.yml
```

This will:

* Install Docker on EC2
* Pull Docker image from Docker Hub
* Run container on port 80

---

# 🌐 Access the Application

Open in browser:

```id="e6w32v"
http://<EC2_PUBLIC_IP>
```

---

# 🐳 Docker Details

* Image stored on Docker Hub
* Pulled during deployment
* Port mapping:

```id="rxvfev"
EC2 Port 80 → Container Port 3000
```

---

# 🔄 DevOps Workflow

```id="us0xs2"
Build (Local) → Push (Docker Hub) → Deploy (AWS EC2)
```

---

# 📸 Screenshots

### Terraform Provisioning

![Terraform](screenshots/terraform.png)

### Ansible Automation

![Ansible](screenshots/ansible.png)

### Docker Container

![Docker](screenshots/docker.png)

### Application Output

![App](screenshots/app.png)

---

# 👨‍💻 Team Members

* Nayan Kesare
* Sifan Shamlewale
* Omkar Magar
* Rushikesh Pawar

---

# 🎯 Learning Outcomes

* Infrastructure as Code (IaC) using Terraform
* Configuration management using Ansible
* Containerization using Docker
* Cloud deployment on AWS
* DevOps automation practices

---

# 📜 Conclusion

This project demonstrates how modern DevOps tools can be integrated to automate application deployment efficiently. The use of Docker Hub ensures scalability, consistency, and faster deployment across environments.

---

# 📄 License

This project is developed for academic and learning purposes.
