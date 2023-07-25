
# Inicializador API's PM2

É responsável em inicializar de forma automatizada todas as API's de aplicações no PM2.


## Instalação
Para a VM que seja iniciada automaticamente, será necessário instalar o autologon
na pasta em rede:

```bash
 \\srvarq001\INSTALAÇÃO PADRÃO HAM\1-Padrão\PROGRAMAS OPCIONAIS\AutoLogon
```
E inserir as informações de logon do usuário, para que ao reiniciar a VM, a mesma faça logon automaticamente e siga com o fluxo normalmente.
    
## Funcionalidades

Caso a VM seja reiniciada algum momento, será automaticamente iniciado um arquivo batch onde
irá rodar o comando:
- pm2 start ecosystem.config.js
Feito isso, o arquivo ecosystem.config.js ficará responsável em iniciar todas as API's de uma vez só.

Feito isso, basta rodar o comando:
- pm2 list
para verificar o status das API's.

## Arquivo batch na Inicialização na VM
O arquivo .bat ficará no caminho:
```
C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```
Comandos incluídos no arquivo batch:

```
@echo off
title inicializador
cd /d J:\\ 
cd INICIALIZADOR
pm2 start ecosystem.config.js
pause

```


## Observações

O arquivo _ecosystem.config.js_ é aberto para inclusões de novas API's. Portanto, caso haja alguma, basta localizar o arquivo e seguir o padrão demonstrado abaixo.

```bash
   {
      name: "PORTA_NOME_API",
      cwd: _DIRETORIO.PATH + "DIRETÓRIO ONDE ESTÁ A API",
      script: "app.js"
    },
    {
      name: "PORTA_NOME_API",
      cwd: _DIRETORIO.PATH + "DIRETÓRIO ONDE ESTÁ A API",
      script: "app.js"
    },
```


## Demonstração

![App Screenshot](https://i.imgur.com/cifcrs3.png)


## Referência

 - [PM2 - EcoSystem File](https://pm2.keymetrics.io/docs/usage/application-declaration/)
 - [Comandos PM2](https://github.com/matiassingers/awesome-readme)

## Autores

- [@Thallys Moura](https://github.com/thallysmoura)
- [@Mario Petter](https://github.com/RicardoPetter)


