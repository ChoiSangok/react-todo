pipeline {
    agent any

    tools {
        nodejs 'node' // 위 2번에서 설정한 Name과 일치해야 함
    }

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