pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = "anirudhs3110"
        IMAGE_FRONTEND = "${DOCKERHUB_USERNAME}/bcs19-frontend"
        IMAGE_BACKEND = "${DOCKERHUB_USERNAME}/bcs19-backend"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/AnirudhS3110/CI-CD-Devops-Assignment.git'
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker build -t $IMAGE_FRONTEND:latest ./frontend'
                sh 'docker build -t $IMAGE_BACKEND:latest ./backend'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $IMAGE_FRONTEND:latest'
                sh 'docker push $IMAGE_BACKEND:latest'
            }
        }
    }
}