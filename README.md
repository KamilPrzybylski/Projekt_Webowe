![Logo](cdeler_front/src/png/logo1.png)

# CDeler

Autorzy:

- Kamil Przybylski 4D
- Wojciech Weiss 4D
- Jakub Wierzejewski 4D

## Opis aplikacji

Jesteśmy dealerem samochodowym oferującym zarówno nowe, jak i używane samochody. Nasza misja to dostarczanie najwyższej jakości usług i produktów naszym klientom.
Jesteśmy dumni z naszej roli jako jednego z wiodących dealerów samochodowych w Polsce, oferując szeroki wybór nowych i używanych samochodów. Nasza misja to 
dostarczanie najwyższej jakości usług i produktów naszym klientom. Dążymy do tego, aby każdy klient, który odwiedza nasz salon, czuł się 
doceniony i zadowolony z doświadczenia. Nasza oferta nowych samochodów obejmuje najnowsze modele od wiodących producentów samochodów. Każdy samochód 
jest starannie wyselekcjonowany, aby zapewnić naszym klientom najwyższą jakość i niezawodność. Oferujemy również atrakcyjne opcje 
finansowania i leasingu, aby pomóc naszym klientom w realizacji ich marzeń o posiadaniu nowego samochodu. Nasz zasób używanych samochodów jest 
jednym z największych w regionie. Każdy używany samochód jest dokładnie sprawdzany przez naszych doświadczonych mechaników, aby zapewnić, że spełnia 
nasze wysokie standardy jakości. Oferujemy szeroki zakres marek i modeli, aby sprostać różnym potrzebom i budżetom naszych klientów.

## Podstrony

- / - główna strona aplikacji, zawiera najważniejsze informacje dotyczące składania zamówień
- /about - strona z informacjami o firmie
- /cars - strona z dostępnymi samochodami
- /contact - strona z formularzem kontaktowym
- /faq - strona z często zadawanymi pytaniami
- /sitemap - strona z mapą poruszania się po aplikacji
- /terms - strona z regulaminem aplikacji

## Komponenty współdzielone

Na każdej podstronie znajdują się komponenty Header i Footer:
- Header zawiera:
  - odnośniki do najważniejszych podstron
  - rozwijane menu z formularzem do logowania
- Footer zawiera:
  - informacje o autorach aplikacji
  - mniej ważne linki

## Schemat bazy danych

![Schemat Bezy CDeler](cdeler_front/src/png/cdeler_db_schema.png)

## Zastosowane technologie

- Frontend - React, StyledComponents
- Backend - Nest.js
- Baza danych - MySQL
- Połączenie z bazą danych - Prisma
- Testy - Jest
- Logowanie - zrobione za pomocą Cookies
- Serwer - aplikacja jest postawiona na Dockerze
  - Kontener mysql
    - Baza dostępna jest na porcie: 3306:3306
  - Kontener phpmyadmin
    - Panel bazy danych dostępny na porcie: 8080:80
  - Kontener backend
    - API dostępne na porcie: 3000:3000
  - Kontener frontend
    - Strona internetowa dostępna na porcie: 5173:5173

## API

- /cars - zwraca informacje dotyczące samochodów
- /cars/used - zwraca dane samochodów używanych
- /cars/new - zwraca dane samochodów nowych
- /cars/:id - zwraca dane samochodu o ID podanym w parametrze :id
- /auth/login - na tej ścieżce na metodzie POST odbywa się logowanie

## Podział zadań

- Kamil Przybylski - backend, testy backendu, postawienie aplikacji na dockerze, stylowanie dla mobile, dokumentacja
- Wojciech Weiss - zawartość, wygląd i wyświetlanie strony, logowanie
- Jakub Wierzejewski - baza danych, testy frontendu
