# ApiMira AI Chat

Готовая веб-панель для ApiMira.

### Важно
API-ключ НЕ хранится в HTML/JavaScript и не передаётся из браузера. Он задаётся как серверная переменная `APIMIRA_API_KEY`.

### Запуск через Vercel
1. Создайте проект в Vercel и загрузите эти файлы (удобно через GitHub).
2. Vercel → Project → Settings → Environment Variables.
3. Создайте переменную:
   - Name: `APIMIRA_API_KEY`
   - Value: ваш полный ключ `am-...`
4. Нажмите Redeploy.
5. Откройте адрес проекта.

Панель сама получает список моделей через `/api/models` и отправляет сообщения через `/api/chat`.

ApiMira Base URL: `https://apimira.com/v1`.

Не вставляйте ключ в `index.html` и не публикуйте его в GitHub.
