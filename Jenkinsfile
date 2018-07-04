pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Build') {
            steps {
                sh "docker build -t dtr.rogfk.no/k48402217/fint-test-client:${BRANCH_NAME} ."
            }
        }
        stage('Publish') {
            steps {
                withDockerRegistry([credentialsId: 'dtr-rogfk-no', url: 'https://dtr.rogfk.no']) {
                    sh "docker push dtr.rogfk.no/k48402217/fint-test-client:${BRANCH_NAME}"
                }
            }
        }
        stage('Deploy') {
            steps {
                sh "docker version"
                withDockerServer([credentialsId: "ucp-jenkins-bundle", uri: "tcp://ucp.rogfk.no:443"]) {
                    sh "docker version"
                    sh "docker service update fint-test-client-beta_test-client --image dtr.rogfk.no/k48402217/fint-test-client:${BRANCH_NAME} --detach=false"
                }
            }
        }      
    }
}
