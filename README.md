# <h1>Escada Invertida, Validador de Senha e Anagrama</h1>
Desafio Programação

# Primeiro passo: 
    clica em code >>> https >>> clica em copiar a url >>> vá em pasta de sua escolha, tenha o git instalado e der 
   <strong><i>dar git clone </i></strong>. Para executar cada desafio basta seguir o passo a passo abaixo.
# Segundo passo: 
   Após fazer clone do projeto dar um <strong><i>npm install</i></strong> (Irá baixar todas dependencias do projeto)
# Desafio questão 1 (Como executar):
   3 formas para executar o codigo:
   <br>
     -Para executar ele basta copiar tudo e executar no console do browser; 
    <br> 
     -Abrir o vscode (se não tiver, instale!), vá extensões e instala o code Runner e executar no play que fica na parte superior a direita;
    <br>
     -Entrar pelo terminal do Linux, Mac ou Windows acessar a pasta que está os desafios que é a "Desafio " e rodar o comando node <strong><i>node questao1.js</i></strong>

# Desafio questão 2 (Como executar):
   3 formas para executar o codigo:
   <br>
     -Para executar ele basta copiar tudo e executar no console do browser;
   <br>
     -Abrir o vscode (se não tiver, instale!), vá extensões e instala o code Runner e executar no play que fica na parte superior a direita;
   <br>  
     -Entrar pelo terminal do Linux, Mac ou Windows acessar a pasta que está os desafios que é a "Desafio" e rodar o comando <strong><i>node questao2.js</i></strong>

# Desafio questão 3 (Como executar):
   3 formas para executar o codigo:
   <br>
     -Para executar ele basta copiar tudo e executar no console do browser; 
   <br>  
     -Abrir o vscode (se não tiver, instale!), vá extensões e instala o code Runner e executar no play que fica na parte superior a direita;
   <br> 
     -Entrar pelo terminal do Linux, Mac ou Windows acessar a pasta que está os desafios que é a "Desafio" e rodar o comando <strong><i>node questao3.js</i></strong>

# Como executar os testes unitarios:
   Após ter a dependencia instalada que é o Jest que está no arquivo package.json, e os testes unitarios estão no arquivo spec. Caso não tenha jest como depedencia volte ao "primeiro passo", mas caso você já tenha feito o primeiro passo, basta executar o comando <strong><i>npm run test</i></strong>.    

# Explicando questão 1: 
    Primeiro ele entra no for e cada repetição ele coloca o * atraves do indice montando a escada, após isso ele entra no segundo for na posição 1 pois tem que tirar
    todos esrpaçamentos e inevertendo a escada.
# Explicando questão 2: 
    Primeiro monta todo regex para validar a senha conforme foi os requisitos, apos isso ele valida e verefica a quantidade que falta para completar a senha e se todos os 
    requisitos foram atigindos. 

    Requesitos feito atraves de regex
    /(?=.*\d)/ --- verefica se te numero
    /(?=.*[a-z])/ --- verifica se tem letra minuscula 
    /(?=.*[A-Z]) / --- verifica se tem letra maiuscula 
    /(?=.*[$*&@#])/--- verifica se tem caractere especial
    /[0-9a-zA-Z$*&@#]{6,}/ --- verifica se a string tem o minimo 

# Explicando questão 3: 
     Ele recebe a palavra ovo e verifica quantos anagramas a nele retirando sempre uma letra e conferindo com a palavra ao contraria 
     
# Tecnologias utilizadas:
     JavaScript, Regex, jest e git.     
     
