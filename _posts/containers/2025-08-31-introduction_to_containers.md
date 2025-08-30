---
title: What Are Containers | Podman Vs Docker | Podman Basics
categories: containers
tags: [containers]
---


# [Before We Go Ahead Read This](https://lyfofvipin.github.io/virtulization)


### Virtual Machines (VMs)

A Virtual Machine is an abstraction of an entire computer, from the hardware level up. It virtualizes the physical hardware, including the CPU, memory, storage, and networking interfaces. On top of this virtualized hardware, a hypervisor (like VMware, VirtualBox, or KVM) runs a full-fledged guest operating system (OS).

## Container

A container is a lightweight, portable, and self-sufficient software package that bundles an application's code with all its dependencies—like libraries, frameworks, and configuration files. It's an isolated environment that allows an application to run consistently across different computing environments.

#### Understand it with an image:

Here let's say you have 3 kids at your home and if you are using VM like structure you have to give 3 rooms to them.
But if you are using Containers like structure you can have a bunker bed and all 3 of them can have there own space and other rooms can be used for some other work.

<img class="img_center" src="statics/img/podmandemo.png" alt="Virtual Machines (VMs) vs. Containers">

## Virtual Machines (VMs) vs. Containers

| Feature | Virtual Machines (VMs) | Containers |
| :--- | :--- | :--- |
| **Virtualization** | Hardware | Operating System (Kernel) |
| **Guest OS** | Each VM has its own guest OS | Share the host OS kernel |
| **Size** | Large (GBs) | Small (MBs) |
| **Boot Time** | Minutes | Seconds |
| **Portability** | Less portable; requires OS compatibility | Highly portable; runs on any OS that supports a container runtime |
| **Overhead** | High (CPU, RAM, Disk) | Low |
| **Use Case** | Running multiple different OSs on one server; high-security isolation | Running multiple instances of the same or similar apps; microservices |


## Tools To Manage Containers

* Docker
* Podman
* Containerd
* LXC


## Docker VS Podman

* Daemonless Architecture
* Improved Security
* Simplicity
* System Integration
* Pods

| Feature | Podman | Docker |
| :--- | :--- | :--- |
| **Architecture** | Daemonless | Client-Server (uses a daemon) |
| **Root Privileges** | Rootless by default | Requires root for the daemon |
| **Security** | Inherently more secure due to lack of a root daemon | Daemon is a single point of failure and attack vector |
| **Pod Management** | Native support | Handled by Docker Compose |
| **CLI** | Almost identical to Docker | The industry standard |
| **Orchestration** | Designed for Kubernetes integration | Relies on Docker Swarm or external tools |

## What Is Podman
Podman (Pod Manager) is an open-source, daemonless container engine for developing, managing, and running containers and pods on a Linux system. It offers a very similar command-line interface (CLI) to Docker, making it easy for users to switch.

## Container Repository
A container registry is a centralized repository that stores and manages container images. Think of it as a version control system for container images, similar to how Git manages source code. It allows developers to store, share, and retrieve their containerized applications in a consistent and secure manner.


### How a Registry Works

* Image Storage: A registry organizes container images into repositories. A repository is a collection of images that share the same name but have different tags. A tag is a label, often a version number (1.0.0), a specific build (latest), or a commit hash, that identifies a specific version of the image.

* Pushing Images: Developers build a container image from a Dockerfile on their local machine and then use a command like podman push or docker push to upload the image to the registry.

* Pulling Images: When a container is needed on a server, CI/CD pipeline, or a developer's machine, the container engine (like Podman or Docker) uses a command like podman pull or docker pull to download the image from the registry.

* There are two main types of container registries:
    * Public Registries
    * Private Registries

**Note: Docker Hub Is Registry and Docker Is A Tool.**


## Basic Commands for Podman

### List Images
```
podman images
```

### Pull an image
To download an image from a container registry (like Docker Hub) to your local machine, use the podman pull command.
```
podman pull ubuntu
```

### Run a container

To start a new container from a downloaded image, use the podman run command. The -it flags are common; -i keeps the container's standard input open, and -t allocates a pseudo-TTY, giving you an interactive shell.

```
podman run -it ubuntu
```

### Run with a custom command
You can specify a command to run inside the container instead of the default shell.

```
podman run ubuntu echo "Hello from Ubuntu container"
```

### List Containers
* List All running containers
```
podman ps
```

* List All containers (running or stopped)
```
podman ps --all
```

### Stop A Container
```
podman stop container_name|container_id
```

### Stop All Container
```
podman stop --all
```

### Removing A Container
```
podman rm container_name|container_id
```

### Removing All Containers
```
podman rm --all
```

### Removing A Image
```
podman rmi image_name|image_id
```

### Removing All Images
```
podman rmi --all
```

### Run a container by attaching a Local Folder

To start a new container by mounting a local folder we add `-v .:/tmp/:Z`.
* `v` is short for `--volume` means we are adding a folder

`.` is the source path on your host machine. The period . is a shortcut for your current working folder.

`/tmp` is the destination path inside the container. The contents of your host's current folder will appear in the container's `/tmp` folder.

`:Z` is a SELinux security label. It tells Podman to label the volume with a shared, unique selinux context.

```
podman run -it -v .:/tmp:Z ubuntu
```

