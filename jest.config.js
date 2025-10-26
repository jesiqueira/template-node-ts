const { createDefaultPreset } = require('ts-jest')
const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],

  transform: {
    ...tsJestTransformCfg,
    '^.+\\.tsx?$': ['ts-jest', {}],
  },

  setupFiles: ['<rootDir>/src/tests/jest.setup.ts'], // 👈 AQUI
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupDatabase.ts'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts', // INCLUI TUDO EM SRC

    // EXCLUSÕES (Ajuste ou adicione o que não é lógica de negócio/teste)
    '!src/server.ts', // Inicialização do servidor (apenas bootstrap)
    '!src/app.ts', // Definição da instância Express (sem lógica)
    '!src/database/config.ts', // Configurações do DB (sem lógica de execução)
    '!src/database/connection.ts', // Inicialização da conexão (sem lógica)
    '!src/tests/**', // Arquivos de setup do Jest e testes
    '!src/routes/**/*.ts', // Arquivos de rotas (se apenas rotearem para controllers)
    '!src/models/**/*.ts', // Arquivos de definição de modelos (entidades/tipos)
    '!**/node_modules/**',
  ],
  coverageReporters: ['text-summary', 'lcov'],
}
