pipeline{
  agent any
  stages{
    stage("Clonando repositorio"){
      steps{
          git branch:'master', url:'https://github.com/DianaLlamoca/PROYECTO-C8288.git'
      }
    }
    stage("Verificando node.js y npm"){
      steps{
        script{
          def version_node=sh(script:'node -v',returnStdout:true).trim()
          def version_npm=sh(script:'npm -v',returnStdout:true).trim()
          if (version_node=="" || version_npm==""){
            error "Asegúrese de que tenga instalado node o npm"
          }
         else{
           echo "Node y npm están instalados"
         }
      }
    }
  }
 }
}
