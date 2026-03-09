# 🚀 DevOps CC Deployment Project

**Terraform • Ansible • Docker • AWS EC2**

## 📌 Project Overview

This project demonstrates a complete DevOps workflow for deploying a **Node.js web application on AWS infrastructure** using modern DevOps tools.

The infrastructure is provisioned using **Terraform**, server configuration is automated using **Ansible**, and the application is **containerized with Docker** before being deployed on an **AWS EC2 instance**.

This project showcases **Infrastructure as Code (IaC)**, **automation**, and **containerization** as part of a cloud deployment pipeline.

---

# 🧰 Technologies Used

| Tool             | Purpose                                      |
| ---------------- | -------------------------------------------- |
| **AWS EC2**      | Cloud infrastructure to host the application |
| **Terraform**    | Infrastructure provisioning (IaC)            |
| **Ansible**      | Server configuration automation              |
| **Docker**       | Application containerization                 |
| **Node.js**      | Web application runtime                      |
| **Git & GitHub** | Version control and project hosting          |
| **WSL (Ubuntu)** | Local development environment                |

---

# 🏗 Project Architecture

```
Local Machine (WSL)
        │
        │ Terraform
        ▼
AWS Infrastructure (EC2 + Security Group)
        │
        │ Ansible
        ▼
Docker Installed on EC2
        │
        ▼
Docker Container
        │
        ▼
Node.js Web Application
```

---

# 📂 Project Structure

```
cc-project
│
├── terraform
│   └── main.tf
│
├── ansible
│   ├── inventory
│   └── playbook.yml
│
├── node-app
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── .gitignore
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/nayan2830/cc-deployment-project.git
cd cc-deployment-project
```

---

# 🌍 Step 1 — Provision Infrastructure using Terraform

Navigate to Terraform folder:

```bash
cd terraform
```

Initialize Terraform:

```bash
terraform init
```

Apply configuration:

```bash
terraform apply
```

Terraform will create:

* AWS EC2 Instance
* Security Group
* Networking rules

---

# ⚙️ Step 2 — Configure Server using Ansible

Navigate to Ansible folder:

```bash
cd ../ansible
```

Run playbook:

```bash
ansible-playbook -i inventory playbook.yml
```

This installs:

* Docker
* Required system packages

---

# 🐳 Step 3 — Dockerize the Application

Navigate to Node application:

```bash
cd ../node-app
```

Build Docker image:

```bash
docker build -t node-app .
```

Run container:

```bash
docker run -d -p 3000:3000 node-app
```

---

# 🌐 Step 4 — Access the Application

Open your browser and visit:

```
http://<EC2_PUBLIC_IP>:3000
```

You should see the **DevOps Team Webpage** displaying team member cards.

---

# 👨‍💻 Team Members

* **Nayan Kesare**
* **Sifan Shamlewale**
* **Omkar Magar**
* **Rushikesh Pawar**

---

# 📊 DevOps Workflow Implemented

✔ Infrastructure Provisioning with **Terraform**
✔ Infrastructure as Code (**IaC**)
✔ Automated configuration using **Ansible**
✔ Application containerization with **Docker**
✔ Cloud deployment on **AWS EC2**

---

# 🎯 Learning Outcomes

Through this project we learned:

* Infrastructure automation using Terraform
* Configuration management with Ansible
* Containerization using Docker
* Cloud deployment on AWS
* Building a complete DevOps deployment pipeline

---

# 📜 License

This project was developed for academic and learning purposes.
