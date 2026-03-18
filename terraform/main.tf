provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "node_sg" {
  name = "node-sg"

  ingress {
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "node_server" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t3.micro"

  key_name = "mykey"

  security_groups = [aws_security_group.node_sg.name]

  tags = {
    Name = "NodeServer"
  }
}

output "instance_id" {
 value = aws_instance.node_server.id
}
output "public_ip" {
  value = aws_instance.node_server.public_ip
}

resource "local_file" "ansible_inventory" {
  content = <<EOT
[node]
${aws_instance.node_server.public_ip} ansible_user=ubuntu ansible_ssh_private_key_file=../terraform/mykey.pem
EOT

  filename = "../ansible/inventory"
}
