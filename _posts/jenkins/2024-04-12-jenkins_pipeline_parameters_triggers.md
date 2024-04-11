---
title: How To Use Parameters And Triggers In Jenkins Pipeline Job
categories: Jenkins
tags: [jenkins]
---


## How To Add Parameters In Jenkinsfile

Jenkins parameters can drive the flow using decision making statements In this blog I have the basic syntax how you can use parameters in the pipeline job or in a Jenkinsfile.
For more details on each parameters you can checkout my this video.

[![Parameterized Jobs In Jenkins](https://img.youtube.com/vi/Tm1-0dffX_A/hqdefault.jpg)](https://www.youtube.com/embed/Tm1-0dffX_A)

Now let's dive into the code here is a sample pipeline to use different type of parameter.

One way of using the Parameters is using `parameters` block inside the `pipeline` block here is an example.

```
pipeline {
    agent any
 
    parameters{
        // Defining bool parameter
        booleanParam(defaultValue: true, description: 'test_bool desc', name: 'test_bool')

        // Defining choice parameter
        choice(choices: ['choice 1', 'choice 2', 'choice 3'], description: 'test_choice_parm', name: 'test_choice_parm')

        // Defining string parameter
        string(defaultValue: 'test string', description: 'test_str_parm desc', name: 'test_str_parm')

        // Defining file parameter
        file(description: 'test.txt', name: 'test_file_parm')
    }

    stages {
        stage('Hello') {
            steps {
                echo test_bool
                echo test_choice_parm
                sh "echo $test_str_parm"
                sh "echo $test_file_parm"
            }
        }
    }

    post{
        always{
            cleanWs()
        }
    }
}
```

*NOTE: Now the issue with this Jenkinsfile is that It will always fail on the first execution for more follow [this](https://issues.jenkins.io/browse/JENKINS-40574) or [this](https://issues.jenkins.io/browse/JENKINS-41929). And you will see an error like this.*

```
[Pipeline] // node
[Pipeline] End of Pipeline
Also:   org.jenkinsci.plugins.workflow.actions.ErrorAction$ErrorId: 3c6a5097-0d83-4ce9-8c83-042414688a44
groovy.lang.MissingPropertyException: No such property: test_bool for class: groovy.lang.Binding
	at groovy.lang.Binding.getVariable(Binding.java:63)
	at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onGetProperty(SandboxInterceptor.java:285)
	at org.kohsuke.groovy.sandbox.impl.Checker$7.call(Checker.java:375)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedGetProperty(Checker.java:379)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedGetProperty(Checker.java:355)
	at org.kohsuke.groovy.sandbox.impl.Checker.checkedGetProperty(Checker.java:355)
```


Now it's time to see the flow of the Jenkins Pipeline Job execution.
When Jenkins execute a pipeline job from a Jenkinsfile it will fist check all the property on the Job and then it start checking the code base and apply changes form the Jenkinsfile.
So during first execution Jenkins will not able to find any parameters in the property so it will give above error and once it will apply the changes in the first execution the job will start passing form the next run.


But there is a fix/trick to avoid this issue we have to define `parameters` block inside `properties` block before starting the `pipeline` block. And then add this groovy code `params.each { k, v -> env[k] = v }` to avoid the error on first time execution. This groovy code will export parameters before starting pipeline block.

*Note: This will require approval to run the groovy script in the Jenkins pipeline.*


Here is an example for the same:
```
properties([
    parameters([
        booleanParam(defaultValue: true, description: 'test_bool desc', name: 'test_bool'),
        choice(choices: ['choice 1', 'choice 2', 'choice 3'], description: 'test_choice_parm', name: 'test_choice_parm'),
        string(defaultValue: 'test string', description: 'test_str_parm desc', name: 'test_str_parm')
    ])
])

params.each { k, v -> env[k] = v }

pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo test_bool
                echo test_choice_parm
                sh "echo $test_str_parm"
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}
```


## How To Add Triggers In Jenkinsfile

Jenkins triggers are one of the most useful feature in Jenkins they help you in executing the entire pipeline without human interaction.
Now if you want to know how trigger works in detail you can check this video.

[![Triggers In Jenkins Job](https://img.youtube.com/vi/fbObtG34jJQ/hqdefault.jpg)](https://www.youtube.com/embed/fbObtG34jJQ)


Now let's dive into the code here is a sample pipeline to use different type of triggers also we can use more then one trigger in a same pipeline.


```
properties([
    pipelineTriggers([

        // Triggering only if upstream Projects are successfully completed
        // upstream('job-01')

        // Triggering only if upstream Projects are completed Failed
        // upstream(threshold: 'FAILURE', upstreamProjects: 'job-01')

        // Triggering only if upstream Projects are completed Unstable
        // upstream(threshold: 'UNSTABLE', upstreamProjects: 'job-01')

        // Triggering on all the status of upstream Projects
        upstream(threshold: 'ABORTED', upstreamProjects: 'job-01'),

        // Periodically triggering Jenkins pipeline Job
        cron('* * * * *'),

        // Triggering Jenkins pipeline Job on any Git repo change/Poll SCM trigger
        pollSCM('* * * * *')
    ])
])


pipeline {
    agent any

    stages {
        stage('Set Git Repo'){
            steps{
                git 'https://github.com/lyfofvipin/temp.git'
            }
        }
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
    post{
        always{
            cleanWs()
        }
    }
}
```


