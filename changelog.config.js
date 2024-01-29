module.exports = {
  disableEmoji: true,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 80,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  types: {
    chore: {
      description: 'Изменение процесса сборки или вспомогательного инструмента',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'Изменения связанные с CI',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Изменения связанные с документацией',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'Новая фича',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'Исправление бага',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'Изменения улучшающие производительность',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'Изменения связанные с упрощением кода',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Релизы',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Изменения связанные со стилем/отображением',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Добавлены новые тесты',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: 'Выберите тип изменения, которое вы фиксируете:',
      customScope: 'Выберите область, на которую влияет этот компонент:',
      subject: 'Напишите краткое, императивное описание изменений:\n',
      body: 'Предоставьте более подробное описание изменения:\n ',
      breaking: 'Перечислите все критические изменения:\n',
      footer: 'Проблемы, которые закрывает эта фиксация, например #123:',
      confirmCommit: 'Пакеты, на которые повлиял этот коммит\n',
    },
  },
};
