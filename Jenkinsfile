pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Build') {
            steps {
                sh "docker build -t ${GIT_COMMIT} ."
            }
        }
        stage('Publish') {
            when { branch 'master' }
            steps {
                withDockerRegistry([credentialsId: 'fintlabs.azurecr.io', url: 'https://fintlabs.azurecr.io']) {
                    sh "docker tag ${GIT_COMMIT} fintlabs.azurecr.io/fordring:latest"
                    sh "docker push fintlabs.azurecr.io/fordring:latest"
                }
            }
        }
        stage('Build backend') {
            when { branch 'master' }
            steps {
                build 'FINTLabs/fint-betaling/master'
            }
        }
    }
}
