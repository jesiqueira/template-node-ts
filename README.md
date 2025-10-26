# 🚀 Template Node.js + TypeScript + Docker

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)
![Docker](https://img.shields.io/badge/Docker-✓-blue)

**Template profissional para APIs Node.js com TypeScript, Docker, PostgreSQL e ambiente de desenvolvimento completo**
</div>

## ✨ Características

- ✅ **Node.js 22 + Express** - Servidor robusto e escalável
- ✅ **TypeScript** - Desenvolvimento tipado e seguro
- ✅ **Docker + Docker Compose** - Containers para desenvolvimento e produção
- ✅ **PostgreSQL 15** - Banco de dados relacional
- ✅ **Sequelize ORM** - Modelagem de dados com TypeScript
- ✅ **Jest + SuperTest** - Testes automatizados
- ✅ **ESLint + Prettier** - Padronização de código
- ✅ **SQLite** - Banco em memória para testes
- ✅ **Hot Reload** - Desenvolvimento com atualização automática
- ✅ **PGAdmin** - Interface web para gerenciar o PostgreSQL
- ✅ **Multi-ambiente** - Desenvolvimento, Teste e Produção

## 🏁 Começo Rápido

### 📋 Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) 
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js 18+](https://nodejs.org/) (opcional - para desenvolvimento local)

### 🚀 Início Rápido (3 minutos)

```bash
# 1. Copiar o template
cp -r template-node-ts meu-projeto
cd meu-projeto

# 2. Configurar ambiente (opcional)
cp .env.example .env

# 3. Executar com Docker
docker compose up --build

# 4. Acessar a aplicação
# 🌐 API: http://localhost:3000
# 📊 PGAdmin: http://localhost:8080
```

# 🛠 Comandos Úteis
## 🐳 Docker Commands

```bash
# Iniciar ambiente de desenvolvimento
docker compose up

# Iniciar em background
docker compose up -d

# Parar ambiente
docker compose down

# Parar e remover volumes (reset completo)
docker compose down -v

# Ver logs da aplicação
docker compose logs app

# Ver logs do banco
docker compose logs database
```

# 🔧 Comandos no Container

```bash
# Executar testes
docker compose exec app npm test

# ESLint
docker compose exec app npm run lint
docker compose exec app npm run lint:fix

# Formatação de código
docker compose exec app npm run format

# Migrações do banco
docker compose exec app npx sequelize-cli db:migrate
docker compose exec app npx sequelize-cli db:seed:all

# Acessar terminal do container
docker compose exec app sh
```

# 💻 Desenvolvimento Local (sem Docker)

```bash
# Instalar dependências
npm install

# Desenvolvimento com hot-reload
npm run dev

# Executar testes
npm test
npm run test:watch

# Build para produção
npm run build

# Iniciar produção
npm start

```
# 🗄️ Banco de Dados
## 📊 PostgreSQL (Desenvolvimento/Produção)
### Credenciais Padrão:
```env
DB_HOST=database
DB_PORT=5432
DB_NAME=myapp
DB_USER=dev
DB_PASSWORD=dev123
```

## 🧪 SQLite (Testes)
### Configuração Automática:
```env
DB_DIALECT=sqlite
DB_STORAGE=:memory:
```

# 🖥️ PGAdmin (Interface Web)
- URL: http://localhost:8080
- Email: admin@app.com
- Senha: admin123

## Configuração do Servidor no PGAdmin:
- Host: postgres_db
- Port: 5432
- Database: myapp
- Username: dev
- Password: dev123

# 🏗️ Estrutura do Projeto
```text
template-node-ts/
├── 🐳 docker-compose.yml          # Orquestração de containers
├── 🐳 Dockerfile                  # Build da aplicação
├── 📦 package.json                # Dependências e scripts
├── ⚙️ tsconfig.json               # Configuração TypeScript
├── ⚙️ jest.config.js              # Configuração Jest
├── ⚙️ .eslintrc.js                # Configuração ESLint
├── ⚙️ .prettierrc                 # Configuração Prettier
├── ⚙️ .sequelizerc                # Configuração Sequelize
├── 📄 .env.example                # Variáveis de ambiente (template)
├── 📄 .env.test                   # Configuração de testes
├── 📁 src/
│   ├── 🚀 server.ts               # Ponto de entrada da aplicação
│   ├── 📋 app.ts                  # Configuração do Express + Rotas
│   ├── 🗄️ database/
│   │   ├── connection.ts          # Conexão Sequelize
│   │   ├── config.ts              # Configuração multi-ambiente
│   │   └── models/                # Modelos do banco
│   ├── 🧪 __tests__/
│   │   └── app.test.ts            # Testes da aplicação
│   └── 📁 (controllers|routes|services)/  # Estrutura MVC
└── 📁 (migrations|seeders)/       # Migrações do Sequelize
```
# 🔧 Configuração
## ⚙️ Variáveis de Ambiente
### Crie um arquivo .env baseado no .env.example:
```env
# =======================================================
# Variáveis do Projeto
# =======================================================
PORT=3000
NODE_ENV=development

# =======================================================
# Banco de Dados (PostgreSQL)
# =======================================================
DB_HOST=database
DB_USER=dev
DB_PASSWORD=dev123
DB_NAME=myapp
DB_PORT=5432

# =======================================================
# JWT (Opcional)
# =======================================================
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

# 🔐 Personalizar Credenciais
## 1. Edite docker-compose.yml:
```yaml
database:
  environment:
    - POSTGRES_USER=novo_usuario
    - POSTGRES_PASSWORD=nova_senha
    - POSTGRES_DB=novo_banco
```
## 2. Atualize .env:
```yaml
DB_USER=novo_usuario
DB_PASSWORD=nova_senha  
DB_NAME=novo_banco
```
## 3. Reconstrua os containers:
```bash
docker compose down -v
docker compose up --build
```

# 🧪 Testes
## 🏃 Executar Testes
```bash
# Todos os testes
docker compose exec app npm test

# Testes com watch mode
docker compose exec app npm run test:watch

# Coverage dos testes
docker compose exec app npm run test:coverage

# Localmente (sem Docker)
npm test
```
# 📊 Ambiente de Testes
- Banco: SQLite em memória

- Configuração: .env.test

- Porta: 3001

- Isolado: Não interfere no banco de desenvolvimento

# 🚀 Próximos Passos para Desenvolvimento
## 1. 🗄️ Criar Modelos do Banco
``` typescript
// src/database/models/User.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  sequelize,
  modelName: 'User'
});

export default User;
```
## 2. 🔗 Configurar Modelos
```typescript
// src/database/connection.ts - Adicione:
import User from './models/User';
// User.initModel(sequelize); // Descomente quando criar
```
## 3. 🛣️ Criar Novas Rotas
```typescript
// Em src/app.ts - Adicione:
app.get('/api/users', (req: Request, res: Response) => {
  res.json({ message: 'Lista de usuários' });
});
```

## 4. 📦 Criar Migrações
```bash
docker compose exec app npx sequelize-cli model:generate \ --name User \
  --attributes name:string,email:string
```

# 🐛 Solução de Problemas
## ❌ Portas Ocupadas
```bash
# Verificar processos nas portas
lsof -i :3000  # Aplicação
lsof -i :5432  # PostgreSQL
lsof -i :8080  # PGAdmin

# Parar serviços conflitantes
sudo service postgresql stop  # Se houver PostgreSQL local
```
## ❌ Banco Não Conecta
```bash
# Verificar saúde do banco
docker compose logs database

# Testar conexão manual
docker compose exec database pg_isready -U dev -d myapp

# Verificar se o database foi criado
docker compose exec database psql -U dev -l
```
## ❌ Erro de Build
```bash
# Limpar cache do Docker
docker system prune -f

# Reconstruir tudo
docker compose down -v
docker compose up --build
```
## ❌ Problemas de Permissão
```bash
# Dar permissão ao Docker (Linux)
sudo usermod -aG docker $USER
newgrp docker
```
# 🔄 Fluxo de Desenvolvimento
## 💡 Dia a Dia
### 1. Iniciar ambiente:
```bash
docker compose up
```
## 2. Desenvolver:
- Editar arquivos em src/

- As mudanças recarregam automaticamente
  
## 3. Testar:
```bash
docker compose exec app npm test
```
## 4. Parar:
```bash
docker compose down
```
# 🚀 Deploy em Produção
## 1. Build da imagem:
```bash
docker build --target production -t minha-app .
```
## Usar variáveis de ambiente de produção

## Configurar SSL e domínio

## Usar serviço de banco gerenciado (AWS RDS, etc.)

# 🤝 Contribuindo
### 1. Fork o projeto

### 2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

### 3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')

### 4. Push para a branch (git push origin feature/AmazingFeature)

### 5. Abra um Pull Request

# 📄 Licença
### Distribuído sob licença MIT. Veja LICENSE para mais informações.
# 👨‍💻 Autor
## JOSÉ EDMAR DE SIQUEIRA
## -  GitHub: [@jesiqueira](https://github.com/jesiqueira)


# 🙏 Agradecimentos
- ### [Express.js](https://expressjs.com/)

- ### [Sequelize](https://sequelize.org/)

- ### [Docker](https://www.docker.com/)

- ### [TypeScript](https://www.typescriptlang.org/)

<div align="center">
⭐ Se este template foi útil, considere dar uma estrela no repositório!

🎯 Desenvolvido para acelerar seu desenvolvimento Node.js + TypeScript!

</div>




