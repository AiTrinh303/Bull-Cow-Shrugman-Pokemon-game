# Die Kunst der Berechnung

Im großen Gefüge der Existenz tanzen und verflechten sich Zahlen und weben einen Rhythmus der Vernunft, der das Universum orchestriert. Du hast die Aufgabe, ein exquisites Instrument, einen `Calculator`, zu erschaffen, um an diesem kosmischen Ballett teilzunehmen.

Hier sind die Anweisungen für diese Übung:

### Anweisungen

1. **Einrichtung**: Definiere eine Klasse namens `Calculator`. Der Konstruktor der Klasse sollte zwei Eigenschaften haben:
    - `PI`, das gleich `Math.PI` ist
    - `E`, das gleich `Math.E` ist
    
2. **Methoden**: Implementiere die folgenden Methoden:

    - `ratio(x, y, width)`: Diese Methode sollte drei Parameter entgegennehmen - `x`, `y` und `width` und die Höhe basierend auf dem Seitenverhältnis x:y zurückgeben.

    - `percentage(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Berechne den prozentualen Anteil von `x` in `y` und gib ihn als Zeichenkette mit einem '%' Zeichen zurück. Wenn `y` Null ist, gib die Fehlermeldung 'Fehler: Divisor darf nicht Null sein' zurück.

    - `add(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib die Summe von `x` und `y` zurück.

    - `subtract(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib die Differenz von `y` minus `x` zurück.

    - `multiply(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib das Produkt von `x` und `y` zurück.

    - `divide(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib den Quotienten von `x` geteilt durch `y` zurück. Wenn `y` Null ist, gib die Fehlermeldung 'Fehler: Divisor darf nicht Null sein' zurück.

    - `remainder(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib den Rest von `x` geteilt durch `y` zurück. Wenn `y` Null ist, gib die Fehlermeldung 'Fehler: Divisor darf nicht Null sein' zurück.

    - `elevate(x, y)`: Diese Methode sollte zwei Parameter entgegennehmen - `x` und `y`. Gib die Potenz von `x` erhöht auf `y` zurück.

    - `sqrt(x)`: Diese Methode sollte einen Parameter entgegennehmen - `x`. Gib die Quadratwurzel von `x` zurück. Wenn `x` eine negative Zahl ist, gib die Fehlermeldung 'Fehler: Quadratwurzel einer negativen Zahl kann nicht berechnet werden' zurück.

### Hinweise

- Denke daran, Randfälle wie Division durch Null und Quadratwurzel einer negativen Zahl zu behandeln.
- Stelle sicher, dass alle zurückgegebenen Zeichenketten genau im angegebenen Format sind.
- Lies mehr darüber: [Eulersche Zahl](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Eulersche%20Zahl%20ist%20ein%20wichtiges,wiederholtes%20(ähnliches%20mit%20pi).)

### Beispiele:
```js
console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.remainder(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
```