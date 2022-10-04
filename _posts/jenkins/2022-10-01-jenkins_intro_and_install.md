---
title: Getting Started With Jenkins
categories: Jenkins
tags: [jenkins]
---

# What Is Jenkins?

Jenkins is a self contained open source automation server that can automate almost everything from building and testing to delivering deployment of applications. 
In this lecture series I will try my best to cover almost all of the above.

# Installing Jenkins

For Installing the Jenkins on different OS you have multiple methods follow the [official doc](https://www.jenkins.io/doc/book/installing) and install according to your specification.

## Using the .war file

For this guide I will be using the .war file method because I think that is the easiest one.

### Run the WAR file

The Jenkins Web application ARchive (WAR) file can be started from the command line like this:
* You should have JAVA installed on the system
* Download the latest stable Jenkins WAR file to an appropriate directory on your machine.
* Open up a terminal/command prompt window to the download directory.
* Run the command `java -jar jenkins.war`.
* Browse to [http://localhost:8080](http://localhost:8080) and wait until the Unlock Jenkins page appears.

And you are done.

## Post Installation Steps

After Jenkins installation there are a few things you need to do before you start using Jenkins.
* Unlocking the Jenkins
* Setting the user and plugin information in the Jenkins UI

### Unlocking the Jenkins 

After Jenkins setup It create a file with the unlock password in windows it's located at `C:\Users\Vipin\.jenkins\secrets\initialAdminPassword` ( replace `Vipin` with your username ) and in linux it's at `/var/lib/jenkins/secrets/initialAdminPassword`.

### Setting User and Plugins 

After Jenkins unlocking we have to setup the Jenkins user and plugins and Jenkins is ready to use.
