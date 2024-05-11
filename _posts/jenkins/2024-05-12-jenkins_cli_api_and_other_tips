---
title: Using Jenkins CLI, API And Other Jenkins Tips
categories: Jenkins
tags: [jenkins]
---



## How To Use Jenkins CLI

Once we have our Jenkins Server up and running we can use Jenkins CLI to perform all the actions in case if you don't have any browser or you want to do some sort of automation. You can use Jenkins CLI to fetch the details or to to perform almost all the task you can do from the GUI.

To get the Jenkins CLI you have to download `jenkins-cli.jar` file you can do the same by visiting.
`curl -OL http://localhost:8080/jnlpJars/jenkins-cli.jar` ( Replace `http://localhost:8080` with your Jenkins Home URL ) or

You can visit this `http://localhost:8080/manage/cli/` ( replace `http://localhost:8080` with your Jenkins Home URL ) to see all the help or if you want to see what all the things you can do with the CLI.

Examples:

Listing Jobs:
`java -jar jenkins-cli.jar -auth vipin:test_jenkins -s http://localhost:8080 list-jobs`

Listing Jobs In A Folder:
`java -jar jenkins-cli.jar -auth vipin:test_jenkins -s http://localhost:8080 list-jobs test_folder`

Show User Info:
`java -jar jenkins-cli.jar -auth vipin:test_jenkins -s http://localhost:8080 who-am-i`

Running a Job:
`java -jar jenkins-cli.jar -auth vipin:test_jenkins -s http://localhost:8080 build "test_folder/test_freestyle_job"`

List Plugins:
`java -jar jenkins-cli.jar -auth vipin:test_jenkins -s http://localhost:8080 list-plugins`

Now these are the most basic examples there are way more things you can do with cli based on your requirement.

## Testing Groovy Code

While writing Jenkins Shared library or complex pipelines we required some groovy scripting and groovy is not that popular programming language so Jenkins has there inbuilt Script Console for testing groovy code.

To do the same click on Jenkins dashboard and append `/manage/script` in the url or visit `Manage Jenkins -> Script Console`


## Getting Jenkins Metadata Using API's

All the metadata of Jenkins, Jenkins Jobs, Jenkins Builds can be accessed by the Jenkins API's which can be used in many ways.

To access the api documentation you can access `http://localhost:8080/manage/api/` or `http://localhost:8080/api/` ( Replace `http://localhost:8080` with your Jenkins Home URL ).

Example:

using CURL to get info:
`curl -u vipin:test_jenkins http://localhost:8080/job/test_folder/api/json`
Output:
```
{
    "_class": "com.cloudbees.hudson.plugins.folder.Folder",
    "actions": [
        {},
        {},
        {
            "_class": "com.cloudbees.plugins.credentials.ViewCredentialsAction"
        }
    ],
    "description": null,
    "displayName": "test_folder",
    "displayNameOrNull": null,
    "fullDisplayName": "test_folder",
    "fullName": "test_folder",
    "name": "test_folder",
    "url": "http://localhost:8080/job/test_folder/",
    "healthReport": [],
    "jobs": [
        {
            "_class": "hudson.model.FreeStyleProject",
            "name": "test_freestyle_job",
            "url": "http://localhost:8080/job/test_folder/job/test_freestyle_job/",
            "color": "blue"
        },
        {
            "_class": "org.jenkinsci.plugins.workflow.job.WorkflowJob",
            "name": "test_pipeline_job",
            "url": "http://localhost:8080/job/test_folder/job/test_pipeline_job/",
            "color": "notbuilt"
        }
    ],
    "primaryView": {
        "_class": "hudson.model.AllView",
        "name": "all",
        "url": "http://localhost:8080/job/test_folder/"
    },
    "views": [
        {
            "_class": "hudson.model.AllView",
            "name": "all",
            "url": "http://localhost:8080/job/test_folder/"
        }
    ]
}
```
