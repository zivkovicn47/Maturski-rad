Baza Podataka
Entity framework
Backend se razvija u .net core.
Frontend u C#, HTML, CSS, Angular

//////////////////////// Entity Framework ///////////////////////
///// https://www.entityframeworktutorial.net/what-is-entityframework.aspx /////
Entity Framework je objektno-relacioni maper (O/RM) kojoi omogućava .NET programerima da rade sa bazom podataka koristeći .NET objekte. To eliminiše potrebu za većinom koda za pristup podacima koji programeri obično treba da napišu.
Entity Framework karakteristike:

Cross-platform: EF Core je višeplatformski okvir koji može da radi na Windows-u, Linux-u i Mac-u.

Modelling: EF(Entity Framework) kreira EDM(Entity Data Model) zasnovan na POCO(Plain Old CLR Object) entitetima sa "get/set" osobinama različitih tipova podataka. Koristi ovaj model kada postavlja upite ili čuva podatke entiteta u bazi podataka.

Querying: EF nam omogućava da koristimo LINQ upite (C#/VB.NET) za preuzimanje podataka iz osnovne baze podataka.
Dobavljač baze podataka će prevesti ove LINQ upite u jezik upita specifičan za bazu podataka(npr. SQL za relacionu bazu podataka). EF nam takođe omogućava da izvršavamo neobrađene SQL upite direktno u bazi podataka.

Change Tracking: EF prati promene koje su se desile na instancama vaših entiteta(vrednosti svojstva) koje treba da se predaju bazi podataka.

Saving: EF izvršava komande INSERT, UPDATE i DELETE u bazi podataka na osnovu promena koje su se desile u vašim entitetima kada pozovete metod SaveChanges(). EF takođe obezbeđuje asinhroni metod SaveChangesAsync().

Concurrency: EF podrazumevano koristi optimističku paralelnost(Optimistic Concurrency) da zaštiti promene koje je napravio drugi korisnik od kada su podaci preuzeti iz baze podataka.

Transactions: EF vrši automatsko upravljanje transakcijama dok postavlja upite ili čuva podatke. Takođe pruža opcije za prilagođavanje upravljanja transakcijama.

Caching: EF uključuje prvi nivo keširanja iz kutije. Dakle, ponovljeni upiti će vratiti podatke iz keša umesto udaranja u bazu podataka.

Built-in Conventions: EF prati konvencije preko šablona programiranja konfiguracije i uključuje skup podrazumevanih pravila koja automatski konfigurišu EF model.

Configurations: EF nam omogućava da konfigurišemo EF model korišćenjem atributa napomene podataka ili Fluent API-ja da zaobiđemo podrazumevane konvencije.

Migrations: EF obezbeđuje skup komandi za migraciju koje se mogu izvršiti na NuGet konzoli menadžera paketa ili
Interfejs komandne linije za kreiranje ili upravljanje osnovnom šemom baze podataka.
/////////////////////////////////////////////////////////////////

https://coreui.io/angular/#compare

https://coreui.io/angular/docs/4.0/components/accordion

komponente u module dodati. (Cori)
kad pravim novu stranicu kucam u command promt u app folderu
ng generate component *ime komponente*

u html pisem body.
css za sredjivanje.
ts klasa komponente, pisu se funkcije. Otvara module.
Samo prati dokumentaciju.
Ako ne radi uzmi bilo koji template. Ima zvanicni angular material template.
isto se instalira preko npm install

1)login stranica

2)register stranica
core i template ima za login i register
da ima css html i ts fajl

3)profil uzera edit itd. (moze bootstrap(model-popup))

4)Lista koriscenih recepata

5)lista recepata

za routing u app-routing.module.ts stavi kako bi moglo da se prikaze kad se startuje app sadrzaj da bi se napravila ruta za stranicu po uzoru na 8 liniju u fajlu napravi jos neku

6)prikaz samog recepta

7)lista svih fooda
gde pise lista predvideti dugme za add, edit, i delete.

8)lista magacina

9)spisak za kupovinu

10)istorija spiskova

11)Header i Footer