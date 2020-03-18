"# cypress_case_cortex" 

Passo a passo para a execução:

1 - O case de teste foi desenvolvido no framework Cypress, ao qual é um framework desenvolvido em Javascript para testes end to end.

2- Para instalar:
		
	2.1 -Instalar Node.js: acesse o site oficial, baixe e instale a versão para seu computador. https://nodejs.org/en/ 
	2.2- Escolher uma IDE de JavaScript para visualizar os testes. utilizei o VS Code para desenvolver.
	2.3- Instalar o Cypress com Cucumber:
	
		I) Acessar a pasta onde realizou o git clone desse repositório. Abra o terminal e acesse essa mesma pasta com o seguinte comando:
		cd /your/project/path/cypress_case_cortex
		
		II) Tendo acessado a pasta do projeto, execute o comando de instalação:
			npm install --save-dev cypress cypress-cucumber-preprocessor
			
		III) Ainda dentro da pasta do seu projeto, execute o seguinte comando para que o Cypress termine de criar os arquivos locais:
			npx cypress open





link de um tutorial para windows:
https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766
