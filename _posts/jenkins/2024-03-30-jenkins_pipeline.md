---
title: Getting Started With Jenkins Pipelines
categories: Jenkins
tags: [jenkins]
---


## What is Continuous Integration?
Continuous Integration is a process of integrating code changes from multiple developers in a single project many times. The software is tested immediately after a code commit. With each code commit, code is built and tested.


## What is Continuous Delivery?
A continuous delivery (CD) pipeline is an automated expression of your process for getting software from version control right through to your users and customers. Every change to your software (committed in source control) goes through a complex process on its way to being released. This process involves building the software in a reliable and repeatable manner, as well as progressing the built software (called a "build") through multiple stages of testing and deployment.


## What Is Jenkins Pipeline?

In Jenkins, a pipeline is a group of events or jobs which are linked with one another in a sequence.
Now this can be a group of Freestyle Jobs arranged together with help pf the plugin [Build Pipeline](https://plugins.jenkins.io/build-pipeline-plugin/) or we can create a [Jenkins pipeline](#what-is-jenkins-pipeline-Job).


## Why Pipeline?

Jenkins is, fundamentally, an automation engine which supports a number of automation patterns. Pipeline adds a powerful set of automation tools onto Jenkins, supporting use cases that span from simple continuous integration to comprehensive CD pipelines


## What Is Jenkins Pipeline Job?

Jenkins Pipeline Job is a combination of plugins that support the integration and implementation of continuous delivery pipelines using Jenkins for more on the same you can follow [this](https://www.jenkins.io/doc/book/pipeline).


## Different Between Jenkins Freestyle and Pipeline Jobs

Major differences can be seen in these points:
 
 * Code review/iteration on the Pipeline
 * Single source of truth for the Pipeline, which can be viewed and edited by multiple members of the project.
 * Can be easily shared between multiple Jenkins Server
 * Pipelines can survive both planned and unplanned restarts of the Jenkins controller
 * The Pipeline plugin supports custom extensions to its DSL and multiple options for integration with other plugins.


## Writing First Jenkins Pipeline Job

Pipeline as Code describes a set of features that allow Jenkins users to define pipelined job processes with code, stored and versioned in a source repository. These features allow Jenkins to discover.

Before we move ahead we need to have [Pipeline](https://plugins.jenkins.io/workflow-aggregator/) plugin installed on our Jenkins Serer.

Now to write a Jenkins Pipeline as Code there are two ways of writing scripts [Scripted](https://www.jenkins.io/doc/book/pipeline/syntax/#scripted-pipeline) and [Declarative](https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline). It's recommended to use the declarative syntax because it's pretty easy to write and there is an extra option with the declarative syntax is that you can restart the pipeline from any stage you want which you can not do with scripted. 
But there is limitation as well with the declarative that there is an old [issue](https://issues.jenkins.io/browse/JENKINS-37984) that you cannot exceed a single pipeline code more than around 495 lines.

We will be going through the recommended method for this article.


## Creating a Jenkinsfile

Jenkinsfile Domain Specific  Language (DSL) are basic defined semantic to integrate the jenkins plugins in a single pipeline.

You can check [Declarative Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline) for more detailed info on the same.
or you can checkout this [DSL Syntax](https://jenkinsci.github.io/job-dsl-plugin) to get all the plugin semantic for Pipeline Jobs.


Now here is the basic pipeline.

```
pipeline{
    agent 'any'
    stages{
        stage("Stage_Name"){
            steps{
                sh "echo Test Stage.; pwd; hostname"
            }
        }
    }
    post{
        success{
            cleanWs()
        }
    }
}
```

`pipeline` --> This block is a `Required` and the main block which contains every other block of a pipeline and this is the block from where the pipeline execution starts.
Now this is not mandatory that Jenkinsfile should start with the pipeline block it can have some other groovy code written about the pipeline block or their can be some properties that can be set before the pipeline.


`agent` --> Agent is a `Required` block is to pass the name of the Jenkins agent on which you want to execute this pipeline now currently I have written `any` that basically means that the pipeline will be executed on any available agent on Jenkins.


Below is the syntax if you want to pass a agent name to the same.

```
agent{
    label 'agent_label'
}
```


`stages` --> Stages is a `Required` block in a Jenkins pipeline this block has multiple stage performing there own defined stage let's say building, testing and deploying.


`stage` --> Stage is a `Required` block in a Jenkins pipeline this block has a steps block or some conditions or any other setting that can apply on a stage.
Now each stage has there *unique name* which is also `Required`.


`steps` --> Steps is a `Required` block in this block we write the actual steps those are performing the tasks it can be running a shell script running a python script a cypress command or can be running steps to archive the logs or can be of sending the mail or anything.


Here is a little long pipeline with three different stages.

```
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
```
