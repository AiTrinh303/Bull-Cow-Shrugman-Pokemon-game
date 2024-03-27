# Der Kassierer

Schreibe eine Funktion namens `cashCounter`, die einem Kassierer hilft, den Kunden ausreichend Wechselgeld zu geben. Die Funktion sollte die Menge an Scheinen und Münzen für das Wechselgeld des Kunden zurückgeben.

Beispiel1: Wenn der Preis 3,75 € beträgt und der gezahlte Betrag 50 €, dann sollte der Kunde 46,25 € Wechselgeld zurückbekommen.

```javascript
console.log(cashCounter(3.75, 20));
// [
// { '20 Euro': 2 },
// { '5 Euro': 1 },
// { '1 Euro': 1 },
// { '0.2 Cent': 1 },
// { '0.05 Cent': 1 }
// ]
```

Beispiel2: Preis: 4,50 €, Bezahlter Betrag: 20 €, Wechselgeld: 15.50

```javascript
console.log(cashCounter(4.5, 20));
// [ { '10 Euro': 1 }, { '5 Euro': 1 }, { '0.5 Cent': 1 } ]
```

- Ausgaben für Ausnahmen einbeziehen:

1. Preis: 4 €, bezahlter Betrag: €3. // 'Kunde sollte 1 Euro mehr bezahlen'
2. Geldkassette ist leer oder nicht genug Münzen // 'Kein Wechselgeld vorhanden'

## Leitlinien

1. Schreibe eine Funktion höherer Ordnung namens `createCashCounter`.
2. Diese Funktion sollte eine anonyme Funktion mit einer Geldkassette in ihrer Schließung zurückgeben.

Beispiel Cash Box:

```javascript
let cashBox = [
  { 50: 10 },
  { 20: 10 },
  { 10: 10 },
  { 5: 25 },
  { 2: 25 },
  { 1: 25 },
  { 0.5: 25 },
  { 0.2: 25 },
  { 0.1: 25 },
  { 0.05: 25 },
  { 0.02: 25 },
  { 0.01: 25 },
];
```

3. Rufe die Funktion `createCashCounter` auf und weise die zurückgegebene Funktion einer Variablen namens `cashCounter` wie folgt zu:

```javascript
cashCounter = createCashCounter();
```

4. Rufe die Funktion `cashCounter` auf und übergebe den Preis und das bezahlte Bargeld wie in den Beispielen oben gezeigt.
5. Füge das gezahlte Geld der Kasse hinzu und ziehe das Wechselgeld von der Kasse ab.
6. Rufe die Funktion `cashCounter` mit verschiedenen Kombinationen aus Preis und gezahltem Geld auf und prüfe, ob die Kasse korrekt aktualisiert wird.
