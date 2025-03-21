# Крипто трекер / Crypto Tracker

![app.png](docs/app.png)

## Стек

- FastAPI + pydantic, pydantic-settings, aiohttp
- React + axios, ant design, tailwind

### Инструкции

- `brew update`

#### Backend

- `python3 -m venv venv`
- `. venv/bin/activate` или `.\venv\Scripts\activate.bat`
- `pip install -r requirements.txt`
- `uvicorn src.main:app --reload` (обязательно находясь внутри папки backend)

#### Frontend

Если необходимо обновить node.js и npm

- `sudo npm cache clean -f`
- `sudo npm i -g n`
- `sudo n stable`
- `sudo npm i -g npm@latest`

Создание проекта:

- `npm create vite@latest`

Установка зависимостей:

- `npm install`

Запуск dev режима:

- `npm run dev`

Библиотеки:

- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)

Установка:

- `npm install tailwindcss @tailwindcss/vite`
- `npm install antd --save`

Установка axios (запросы):

- `npm i axios`