# 🚀 CC Deployment Project

**Terraform • Ansible • Docker • AWS EC2**

---

# 📌 Project Overview

This project demonstrates a complete **DevOps automated deployment pipeline** for deploying a **Node.js web application on AWS infrastructure**.

The system uses:

* **Terraform** for Infrastructure as Code (IaC)
* **Ansible** for configuration management and automation
* **Docker** for application containerization
* **AWS EC2** for cloud hosting

The entire deployment is automated and can be executed using just **two commands**.

---

# 🌐 Live Deployment

The application is deployed on an AWS EC2 instance:

```
http://<EC2_PUBLIC_IP>
```

Example:

```
http://35.154.188.211
```

---

# 🧰 Technologies Used

| Tool             | Purpose                           |
| ---------------- | --------------------------------- |
| **AWS EC2**      | Cloud infrastructure              |
| **Terraform**    | Infrastructure provisioning (IaC) |
| **Ansible**      | Server automation                 |
| **Docker**       | Application containerization      |
| **Node.js**      | Backend runtime                   |
| **Git & GitHub** | Version control                   |
| **WSL (Ubuntu)** | Development environment           |

---

# 🏗 Project Architecture

```
Developer (WSL)
        │
        ▼
Terraform (IaC)
        │
        ▼
AWS EC2 + Security Group
        │
        ▼
Terraform generates Ansible inventory
        │
        ▼
Ansible Automation
        │
        ▼
Docker Installed on EC2
        │
        ▼
Docker Container
        │
        ▼
Node.js Application
        │
        ▼
User Browser (Public IP)
```

---

# 📂 Project Structure

```
cc-deployment-project
│
├── terraform
│   └── main.tf
│
├── ansible
│   ├── inventory   (auto-generated)
│   └── playbook.yml
│
├── node-app
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── screenshots
└── README.md
```

---

# ⚙️ Prerequisites

Ensure the following are installed:

* Terraform
* Ansible
* Docker
* AWS CLI (configured)
* Git
* WSL / Linux

---

# 🚀 Deployment Steps (Fully Automated)

## Step 1 — Provision Infrastructure

```bash
cd terraform
terraform init
terraform apply
```

This will:

* Create EC2 instance
* Create security group (ports 22 & 80)
* Output public IP
* Automatically generate Ansible inventory

---

## Step 2 — Configure Server & Deploy App

```bash
cd ../ansible
ansible-playbook -i inventory playbook.yml
```

This will:

* Install Docker
* Start Docker service
* Copy Node.js application to EC2
* Build Docker image
* Run container

---

# 🌐 Access the Application

Open in browser:

```
http://<EC2_PUBLIC_IP>
```

---

# 🐳 Docker Details

The application runs inside a Docker container.

Port mapping:

```
EC2 Port 80 → Container Port 3000
```

---

# 🔄 DevOps Workflow

```
Terraform (IaC)
      │
      ▼
AWS Infrastructure
      │
      ▼
Ansible Automation
      │
      ▼
Docker Build & Run
      │
      ▼
Node.js Application
```

---

# 📊 Before vs After Automation

### ❌ Before Automation

* Manual inventory update
* Manual SSH into EC2
* Manual Docker commands
* 8–10 steps

### ✅ After Automation

```bash
terraform apply
ansible-playbook -i inventory playbook.yml
```

Only **2 commands required**

---

# 📸 Project Screenshots

### Terraform Infrastructure Creation

![Terraform](screenshots/terraform.png)

---

### Ansible Configuration

![Ansible](screenshots/ansible.png)

---

### Docker Container Running

![Docker](screenshots/docker.png)

---

### Deployed Application

![App](screenshots/app.png)

---

# 👨‍💻 Team Members

* Nayan Kesare
* Sifan Shamlewale
* Omkar Magar
* Rushikesh Pawar

---

# 🎯 Learning Outcomes

* Infrastructure provisioning using Terraform
* Infrastructure as Code (IaC)
* Configuration management using Ansible
* Containerization using Docker
* Cloud deployment on AWS
* Automation of DevOps pipeline

---

# 📜 Conclusion

This project demonstrates how DevOps tools can be integrated to automate application deployment on cloud infrastructure. By combining Terraform, Ansible, and Docker, the deployment process becomes faster, consistent, and scalable.

---

# 📄 License

This project is developed for academic and learning purposes.

