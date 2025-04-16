# test-app

## Technologie

- Klient: React + TypeScript

- Serwer: NestJS + TypeScript

- Baza danych: PostgreSQL v17

- Środowisko uruchomieniowe JavaScript: Node.js: v18

- Konteneryzacja: Docker: v20

## Uruchomienie projektu

Na początku należy pobrać odpowiednią werjse Node.js i Docker

### Baza danych

W folderze /test-app/test-server uruchamiamy polecenia:

1. Uruchomienie bazy danych:

```
npm run db:dev:up

```

2. Zastosowanie migracji:

```
npx prisma migrate deploy
```

Inne przydatne polecenia:

- Przystępne zarządzanie bazą danych:

```
npx prisma studio
```

### Uruchomienie serwera

W folderze /test-app/test-server uruchamiamy polecenie:

1. Zainstalowanie zależności:

```
npm install
```

2. Dodanie pliku .env

```
DATABASE_URL="postgresql://test:test@localhost:5434/nest?schema=public"
```

3. Uruchomienie aplikacji:

```
npm run start
```

lub jeśli chcemy żeby projekt obserwował zmiany w kodzie:

```
npm run start:dev
```

### Uruchomienie klienta

W folderze /test-app/test-client uruchamiamy polecenia:

1. Zainstalowanie zależności:

```
npm install
```

2. Uruchomienie aplikacji:

```
npm run dev
```

### Zadania

1. Zadanie 1

- Plik z rozwiązaniem znajduje się w: /test-app/test-client/src/views/home/index.tsx
- Widok dostępny pod ścieżką przeglądarki: "/"

2. Zadanie 2

- Endpointy /register, /login znajdują się w pliku: /test-app/test-server/src/modules/auth/auth.controller.ts
- Endpoint /me znajduje się w pliku: /test-app/test-server/src/modules/user/user.controller.ts

3. Zadanie 3

- Plik z formularzem znajduje się w: /test-app/test-client/src/views/login/index.tsx, a ścieżka w przeglądarce to: "/login"
- Plik z autoryzowanym widokiem, który ma wyświetlić username: /test-app/test-client/src/views/user/index.tsx, a ścieżka w przeglądarce to: "/authorized" (jeśli access_token nie jest ciągiem znaków to ta ścieżka jest zablokowana)
- username i user id zapisano w redux store (i w local storage w przeglądarce), plik: /test-app/test-client/src/store/store.ts

#### ------

Do logowania można skorzystać z użytkownika, który stworzy się przy starcie aplikacji:

```
username: 'admin', password: 'admin'
```

lub stworzyć swojego użytkownika przy pomocy endpointa 'http://localhost:3000/auth/register'
