# Spielidee: Knights in Castles

Ein 3D-Browserspiel über Ritter in einer eigenen Welt, in der es auch Flugzeuge und Maschinengewehre gibt.

## Steuerung

- Pfeiltasten: ↑ ↓ laufen, ← → drehen
- Leertaste: angreifen
- Später vielleicht auch Touch mit zwei Steuerpunkten

## Wer bist du?

Du fängst als **Bauer** an und steigst Schritt für Schritt auf:

Bauer → Ritter → Schmied → Landherr → König → Kaiser → Militär

## Die Welt

- Wald und Berge
- Deine eigene Burg, in der du wohnst
- Eine feindliche Burg auf der anderen Seite der Berge
- Du musst die Gegner bekämpfen

## Später

- Am Anfang bist du zu Fuß unterwegs
- Irgendwann findest du ein **Flugzeug**, in dem Geld ist
- Mit dem Geld kaufst du dir Sachen; was du einmal gekauft hast, bekommst du danach umsonst
- Du kannst dir dann selbst Sachen bauen, zum Beispiel eine Burg

## Aktueller Stand

- Online: https://id4master.github.io/paul-und-jesse-game/
- Startmenü: Einzelspieler, zu zweit an einer Tastatur (Splitscreen), zu zweit übers Internet (Code mit 4 Buchstaben)
- Auf dem Handy nur Einzelspieler, mit Joystick links und Knöpfen rechts

- Zwei Bauern mit geteiltem Bildschirm, jeder levelt für sich
  - Spieler 1 (links): W A S D laufen, Leertaste angreifen, Q Waffe wechseln
  - Spieler 2 (rechts): Pfeiltasten laufen, Enter angreifen, Shift rechts Waffe wechseln
- Ränge: Bauer → Ritter → Schmied → Landherr → König → Kaiser → Militär (alle 3 besiegten Gegner)
- Mit jedem Rang bessere Rüstung (Helm, Brustpanzer, Schulterplatten, Umhang, Krone, Gold), sie hält auch mehr Schaden ab
- Waffen: Mistgabel und Bogen (grob zielen reicht, der Pfeil fliegt zum Ziel)
- Sonderwaffen zum Einsammeln für 15 Sekunden: Feuerschwert und Maschinengewehr
- Jeder hat 3 Leben. Wer alle verloren hat, wartet auf den anderen. Sind beide raus, beginnt alles neu als Bauer
- Gegner fallen lassen Herzen (+30), goldene Herzen (+1 Leben) oder Sonderwaffen
- Wachen kreisen um euch, greifen höchstens zu zweit an, weichen aus und ziehen sich verletzt zurück
- Bogenschützen halten Abstand und schießen rote Pfeile
- Rehe und Wildschweine im Wald: erlegen gibt eine Keule (+40 Energie)
- Große feindliche Burg mit Torhaus, Bergfried, Häusern im Hof und einem Dorf davor

## Technik

- Start: `python -m http.server 8123` im Projektordner, dann http://localhost:8123 öffnen
- Netzwerkspiel über WebRTC (PeerJS): wer das Spiel erstellt, rechnet alles; der Mitspieler schickt nur Tasten
- Code liegt in `src/` (main.js Spiellogik, world.js Welt, characters.js Figuren, ui.js Anzeige und Töne, net.js Netzwerk)
