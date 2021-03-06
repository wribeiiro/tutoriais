# Heroku com Laravel 8

PHP e MySQL

## Criar uma conta em

https://signup.heroku.com/

## Requisitos

Ter instalados localmente:

- PHP
- Composer
- Git
- Heroku CLI

## Instalação do Heroku CLI

sudo npm install -g heroku

Se seu sistema operacional é diferente veja detalhes em: https://devcenter.heroku.com/articles/heroku-cli

## Efetuar login na sua conta do Heroku no seu desktop

heroku login

## Instalar o laravel 8

laravel new ribafs

no

## Criar o Procfile

Cada aplicativo deve ter no seu raiz um arquivo texto chamado Procfile que diz ao Heroku o que deve executar e a pasta pública do aplicativo.

cd ribafs

nano Procfile

web: vendor/bin/heroku-php-apache2 public/

## Criar o banco sqlite localmente

Como o uso do MySQL no Heroku requer um AddOn e o cadastro de um cartão, resolvi usar o SQLite, que não requer isso.

cd ribafs

touch database/database.sqlite

## Configurar o SQLite no .env

No Heroku a pasta do usuário é a /app, então
```bash
nano .env

APP_NAME='Laravel 8 no Heroku'

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=/app/database/database.sqlite
DB_USERNAME=root
DB_PASSWORD=
```
Somente as linhas DB_CONNECTION e DB_DATABASE são obrigatórias

## Adicionar ao composer.json
```bash
{
  "require": {
        "ext-pdo_sqlite": "*"
  }
}

Aqui ficou assim, mas isso pode mudar:

    "require": {
        "php": "^7.3|^8.0",
        "fideloper/proxy": "^4.4",
        "fruitcake/laravel-cors": "^2.0",
        "guzzlehttp/guzzle": "^7.0.1",
        "laravel/framework": "^8.12",
        "laravel/tinker": "^2.5",
        "ext-pdo_sqlite": "*"
    },

composer update ext-pdo_sqlite
```
## Enviar o código para o Heroku via Git

```bash
cd ribafs

git init
git add .
git commit -am "Primeiro commit"
```

## Criar o aplicativo no Heroku
```bash
heroku create ribafs
```

Saída:
```bash
Creating ⬢ ribafs... done
https://ribafs.herokuapp.com/ | https://git.heroku.com/ribafs.git
```

## Criar a chave do laravel
```bash
heroku config:set APP_KEY=$(php artisan --no-ansi key:generate --show)
```
Saída:
```bash
Setting APP_KEY and restarting ⬢ ribafs... done, v3
APP_KEY: base64:4uI0/7O8ijEoRWJXyGdbfcJlPc8ZCK4yG/Kj1b2jom0=
```
## Enviar o aplicativo para o Heroku
```bash
git push heroku master
```
Saída:
```bash
remote:        https://ribafs.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/ribafs.git
 * [new branch]      master -> master
```
## Verificar aplicativos no heroku

heroku ps

## Abrir aplicativo no Heroku

heroku open

## Endereço do Aplicativo

https://ribafs.herokuapp.com/

## Erros

Algumas vezes ao tentar abrir o aplicativo recebia a mensagem:

500 Server Error

Pesquisando alguém falou que o problema não era no Heroku, poderia ser algo referente a templates. Uma barra, algo assim.

Realmente. Se instalo o laravel 8 limpo, sem jetstream nem livewire não acontece o erro.

Também instalei um pequeno CRUD, com bootstrap e SQLite e não apresentou problema.

Lembrando que o Heroku também oferece o PostgreSQL free. Veja a documentação abaixo.

## Consultar logs

heroku logs --tail

## Referências

- https://devcenter.heroku.com/articles/getting-started-with-laravel
- https://devcenter.heroku.com/start
- https://devcenter.heroku.com/articles/heroku-postgresql
- https://devcenter.heroku.com/articles/heroku-mysql
- https://elements.heroku.com/addons/cleardb
- https://elements.heroku.com/addons/jawsdb-maria
- https://davidtang.io/using-sqlite-with-php-on-heroku/
- https://devcenter.heroku.com/articles/php-support#extensions
- https://devcenter.heroku.com/articles/heroku-postgresql
