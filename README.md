# Zadanie 1. Generator slug

Zanim rozwiążemy ten problem, zdefiniujmy nowy termin!

Termin slug — to czytelny dla człowieka unikalny identyfikator używany w tworzeniu stron internetowych do tworzenia czytelnych adresów URL.


Na przykład, zamiast wyświetlać użytkownikowi mysite.com/posts/1q8fh74tx, w pasku adresu, możesz utworzyć slug z tytułu artykułu. W rezultacie adres będzie przyjemniejszy w odbiorze: mysite.com/posts/arrays-for-beginners.

Slug jest zawsze ciągiem małych liter, z wyrazami oddzielonymi myślnikami.

Czy to jest jasne? Zatem wykonajmy zadanie!


Napisz funkcję slugify(title), która przyjmuje tytuł artykułu, parametr title i zwraca slug utworzony z tego ciągu.

* Wartością parametru title będą ciągi, których słowa są oddzielone tylko spacjami.
* Wszystkie znaki slug muszą być pisane małymi literami.
* Wszystkie słowa slug muszą być oddzielone myślnikami.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Zadanie 2. Kompozycja tablic

Napisz funkcję o nazwie makeArray, która przyjmuje trzy parametry: firstArray (tablica), secondArray (tablica) i maxLength (liczba). Funkcja musi utworzyć nową tablicę zawierającą wszystkie elementy z firstArray, a następnie wszystkie elementy z secondArray.

* Jeśli liczba elementów w nowej tablicy przekracza maxLength, funkcja musi zwrócić kopię tablicy o długości elementów maxLength.
* W przeciwnym razie funkcja powinna zwrócić całą nową tablicę.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Zadanie 3. Filtrowanie tablicy liczb

Napisz funkcję filterArray(numbers, value), która jako parametry przyjmuje tablicę liczb (numbers) i wartość (value). Funkcja powinna zwrócić nową tablicę zawierającą tylko te liczby z tablicy numbers, które są większe niż value.

Wewnątrz funkcji:

* Utwórz pustą tablicę, do której będziesz dodawać pasujące liczby.
* Użyj pętli do iteracji przez każdy element tablicy numbers.
* Użyj warunkowej instrukcji if wewnątrz pętli, aby sprawdzić każdy element i dodać go do tablicy.
* Zwróć nową tablicę z pasującymi liczbami jako wynik.

