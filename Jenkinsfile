pipeline{
  agent any
  stages{
    stage("Clonando repositorio"){
      steps{
        git branch:'master', url:'https://github.com/DianaLlamoca/PROYECTO-C8288.git'
      }
    stage("Comprobando"){
      sh "echo ${pwd}"
     }
    }
  }
}
