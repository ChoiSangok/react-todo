pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy to Local') {
            steps {
                sh 'cp -R dist/* /Users/sangok/jenkins'
            }
        }
    }
}