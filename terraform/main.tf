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
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
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

output "public_ip" {
  value = aws_instance.node_server.public_ip
}
