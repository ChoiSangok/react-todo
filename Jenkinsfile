pipeline {
    agent any

    environment {
        // 배포될 최종 목적지 경로
        DEPLOY_DIR = "/Users/sangok/jenkins"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // 프로젝트 패키지 설치
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                // 리액트 프로젝트 빌드 (dist 폴더 생성)
                sh 'npm run build'
            }
        }

        stage('Deploy to Local Directory') {
            steps {
                script {
                    // 1. 배포 폴더가 없으면 생성
                    sh "mkdir -p ${DEPLOY_DIR}"
                    
                    // 2. 기존 파일들을 삭제하여 깨끗한 상태로 만듦
                    sh "rm -rf ${DEPLOY_DIR}/*"
                    
                    // 3. 빌드된 결과물(dist/*)을 배포 폴더로 복사
                    sh "cp -R dist/* ${DEPLOY_DIR}/"
                    
                    echo "성공: /Users/sangok/jenkins 로 배포가 완료되었습니다!"
                }
            }
        }
    }
}