---
title: Getting Started With Jenkins Configuration As Code
categories: Jenkins
tags: [jenkins]
---


## What Is JCASC

Jenkins Configurations As Code as the name says It's a configuration of the entire Jenkins Server in form of code ( yaml ).
A Jenkins Server have lots of configuration like Jobs, Agent, Credentials, Script Approvals, Global Variables, Plugin Configurations, User, Role Management and Shared Library.


## If You Have A Jenkins Server Running

*NOTE: Make sure Jenkins has Configuration as Code plugin installed*
If you want to see the JCASC or YAML configuration of your Jenkins you can check the same by visiting `Manage Jenkins -> Configuration as Code -> View Configuration`.

You can download the same by visiting `Manage Jenkins -> Configuration as Code -> Download Configuration`.

Now you can apply new configurations from here `Manage Jenkins -> Configuration as Code -> Apply new configuration` ( This can be useful while debugging or checking some configurations before pushing the changes to production )


## How To Write JCASC

Here are a few examples of configuring things in jenkins via JCASC file.

### Adding Role Base Strategy Via JCASC

In Jenkins there can be 100s of user now you can not make all of them admin so Jenkins has role base user management where you can give limited access to users based on the needs.

How to use the same:
```
  authorizationStrategy:
    roleBased:
      roles:
        global:
        - entries:
          - user: "vipin"
          name: "admin"
          permissions:
          - "Overall/Administer"
```


### Adding Global Variables Via JCASC 

```
  globalNodeProperties:
  - envVars:
      env:
      - key: "ProductVersion"
        value: "1.1"
```

### Adding Agent Via JCASC

```
nodes:
  - permanent:
      labelString: "test-agent"
      launcher:
        ssh:
          credentialsId: "linux-agent"
          host: "test.agent.com"
          port: 22
          sshHostKeyVerificationStrategy: "nonVerifyingKeyVerificationStrategy"
      name: "test"
      nodeDescription: "Test agent for Jenkins"
      numExecutors: 5
      remoteFS: "/var/jenkins"
      retentionStrategy: "always"
```

### Adding User Management Via JCASC

This example is creating 2 users in Jenkins database if you want to use LDAP config check the example 2 and for SSO/SAML setup check Example 3.

Example 1:
```
  securityRealm:
    local:
      users:
      - id: "test"
        password: "test_jenkins"
        name: "Test User"
        properties:
          - mailer:
              emailAddress: "test@jenkins.com"
      - id: "vipin"
        password: "test_jenkins"
        name: "Kumar Vipin Yadav"
        properties:
          - mailer:
              emailAddress: "abc@jenkins.com"
```

Example 2:
```
ldap:
      cache:
        size: 100
        ttl: 10
      configurations:
        - server: ldaps://<ldap_server_url>
          rootDN: dc=redhat,dc=com
          inhibitInferRootDN: false
          userSearch: uid={0}
          groupSearchFilter: (& (cn={0}) (objectclass=GroupOfUniqueNames))
      userIdStrategy: CaseInsensitive
      groupIdStrategy: CaseInsensitive
```

Example 3:
```
  saml:
      binding: "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
      groupsAttributeName: "Role"
      emailAttributeName: "email"
      displayNameAttributeName: "cn"
      usernameAttributeName: "uid"
      maximumAuthenticationLifetime: 86400
      idpMetadataConfiguration:
        period: 600
        url: https://<saml descriptor url>
      advancedConfiguration:
        spEntityId: ${JENKINS_URL}
      encryptionData:
        keystorePath: "path_to_keystore_dir/saml-keystore.jks"
        keystorePassword: "keystore_password"
        privateKeyPassword: "keystore_password"
        privateKeyAlias: saml-key
        forceSignRedirectBindingAuthnRequest: true
        wantsAssertionsSigned: true
```
for SAML you have to add the SSO settings also:
```
security:
  kerberosSso:
    enabled: true
    krb5Location: '/etc/krb5.conf'
    loginLocation: '/etc/login.conf'
    loginServerModule: 'xyz-server'
    loginClientModule: 'xyz-client'
    anonymousAccess: true
    allowLocalhost: false
    allowBasic: false
    allowDelegation: false
    allowUnsecureBasic: true
    promptNtlm: false
```

### Adding Update Center Via JCASC
```
  updateCenter:
    sites:
    - id: "default"
      url: "https://updates.jenkins.io/update-center.json"
```

### Adding Credentials Via JCASC

```
credentials:
  system:
    domainCredentials:
    - credentials:
      - usernamePassword:
          description: "This is a cred for linux agent."
          id: "linux-agent"
          password: "test"
          scope: GLOBAL
          username: "root"
          usernameSecret: true
```

### Adding Script Approvals Via JCASC
```
security:
  scriptApproval:
    approvedSignatures:
    - "staticMethod org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.lang.Object\
      \ java.lang.String java.lang.Object"
```

### Adding Shared Library Via JCASC
```
unclassified:
  globalLibraries:
    libraries:
    - defaultVersion: "master"
      name: "test_library"
      retriever:
        modernSCM:
          scm:
            git:
              remote: "https://github.com/lyfofvipin/jenkins_tutorials.git"
```

### Adding Seed Jobs In JCASC
```
jobs:
  - url: https://raw.githubusercontent.com/lyfofvipin/jenkins_tutorials/master/jobs/seed_job.groovy
```

All the above are most commonly used configs feel free to use the based on your requirements.


## Complete JCASC

Here an complete JCASC configuration based on what we have learned in this lecture series.

```
jenkins:
  systemMessage: "This is a test JCASC Server for more check the playlist https://www.youtube.com/playlist?list=PL1qKudIXSmxp5KkZMDm2-c_K8Q2QU3VPM"

  agentProtocols:
  - "JNLP4-connect"
  - "Ping"
  authorizationStrategy:
    roleBased:
      roles:
        global:
        - entries:
          - user: "vipin"
          name: "admin"
          permissions:
          - "Overall/Administer"

  globalNodeProperties:
  - envVars:
      env:
      - key: "ProductVersion"
        value: "1.1"

  nodes:
  - permanent:
      labelString: "test-agent"
      launcher:
        ssh:
          credentialsId: "linux-agent"
          host: "test.agent.com"
          port: 22
          sshHostKeyVerificationStrategy: "nonVerifyingKeyVerificationStrategy"
      name: "test"
      nodeDescription: "Test agent for Jenkins"
      numExecutors: 5
      remoteFS: "/tmp/jenkins"
      retentionStrategy: "always"

  securityRealm:
    local:
      users:
      - id: "test"
        password: "test_jenkins"
        name: "Test User"
        properties:
          - mailer:
              emailAddress: "test@jenkins.com"
      - id: "vipin"
        password: "test_jenkins"
        name: "Kumar Vipin Yadav"
        properties:
          - mailer:
              emailAddress: "abc@jenkins.com"

  updateCenter:
    sites:
    - id: "default"
      url: "https://updates.jenkins.io/update-center.json"

credentials:
  system:
    domainCredentials:
    - credentials:
      - usernamePassword:
          description: "This is a cred for linux agent."
          id: "linux-agent"
          password: "test"
          scope: GLOBAL
          username: "root"
          usernameSecret: true

security:
  scriptApproval:
    approvedSignatures:
    - "staticMethod org.codehaus.groovy.runtime.DefaultGroovyMethods putAt java.lang.Object\
      \ java.lang.String java.lang.Object"

unclassified:
  globalLibraries:
    libraries:
    - defaultVersion: "master"
      name: "test_library"
      retriever:
        modernSCM:
          scm:
            git:
              remote: "https://github.com/lyfofvipin/jenkins_tutorials.git"

tool:
  git:
    installations:
    - home: "git"
      name: "Default"

jobs:
  - url: https://raw.githubusercontent.com/lyfofvipin/jenkins_tutorials/master/jobs/seed_job.groovy
```

## Setup New Jenkins Server With JCASC

Let's start a Jenkins instance with the `Configuration as Code` plugin installed we will be using the tool [plugin-installation-manager-tool](https://github.com/jenkinsci/plugin-installation-manager-tool) but there are ways to do the same in rpm install method or on container method to setup Jenkins.

The JCasC plugin searches for `CASC_JENKINS_CONFIG` in the system environment variable.
* You can pass the JCASC file PATH with this variable here file Name can be anything you want. Example: `CASC_JENKINS_CONFIG="/home/vipikuma/casc.yaml"`. Or
* You can pass the URL of the YAML file in this variable. Example: `CASC_JENKINS_CONFIG="https://raw.githubusercontent.com/lyfofvipin/jenkins_tutorials/master/jcasc.yaml"`



### Download the jar file for plugin-installation-manager

Visit  [releases](https://github.com/jenkinsci/plugin-installation-manager-tool/releases/latest) of plugin-installation-manager and download the war file from there by the time I am writing this post the latest version is `2.12.17`.

`curl -OL https://github.com/jenkinsci/plugin-installation-manager-tool/releases/download/2.12.17/jenkins-plugin-manager-2.12.17.jar`

and Download the latest Jenkins Version from [here](https://get.jenkins.io/war-stable/latest).

`curl -OL https://get.jenkins.io/war-stable/latest/jenkins.war`


### Stating The Jenkins Server


Setting the Jenkins Home directory

`export JENKINS_HOME=".jenkins"`

Setting the CASC file to be used

`export CASC_JENKINS_CONFIG="https://raw.githubusercontent.com/lyfofvipin/jenkins_tutorials/master/jcasc.yaml"`

Download the plugins before starting the Jenkins Server

`java -jar jenkins-plugin-manager-*.jar --war jenkins.war --plugin-download-directory ${JENKINS_HOME}/plugins --plugins configuration-as-code job-dsl credentials git role-strategy pipeline-github-lib workflow-job ssh-slaves`

Validate installed plugin via command 

`ls ${JENKINS_HOME}/plugins/`.

Now Start Jenkins Server

`java -jar jenkins.war`

For more on the same checkout [Jenkins CASC](https://www.jenkins.io/doc/book/managing/casc/)
