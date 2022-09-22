## Reflektion kapitel 2
<table>
<thead><tr><th>Namn och förklaring</th><th>Reflektion och regler från Clean Code</th></tr></thead>
<tbody>
<tr><td><b>CaloriesCounterForExercises</b><br>
Klassnamn på huvudklassen i modulen. </td>
<td><b>Class Names</b><br>
Borde vara ett substantiv vilket bodre ändras till CalorieCounter, vilket är ett bättre samlingsnamn för hela modulen. Skulle man vilja lägga in flera nya metoder för att beräkna calorier på olika sätt, så kan man det utan att Klassnamnet ska vara vilseledande.
</td></tr>

<tr><td><b>getBMR</b><br>
Metod som returnerar en persons basalmetabolism.</td>
<td><b>Avoid Disinformation</b><br>
Förkortning som kan mistolkas av läsaren, borde uppdateras till getBasalMetabolicRate.
</td></tr>

<tr><td><b>getMaintenanceCalories</b><br>
Metod som returnerar en persons aktivitetsomsättning.</td><td><b>Add Meaningful Context</b><br>
Borde förtydliga vilken sorts "maintenance calories" man returnerar, borde bytas till getActiveMetabolicRate.</td></tr>

<tr><td><b>getWeight</b><br>
Metod som returnerar personens vikt.</td>
<td><b>Add Meaningful Context</b><br>
Borde lägga till vems vikt man syftar på, t.ex. getPersonWeight.
.</td></tr>

<tr><td><b>caloriesGolf</b><br>
Metod som beräknar hur många kalorier som man förbränner när man spelar golf.</td>
<td><b>Method Names</b><br>
Metoder ska börja med ett verb, t.ex. burnedCaloriesGolf.
</td></tr>
</tbody>
</table>
<br>

## Min reflektion på kapitel 2
Summeringen av kapitel 2 är att namnge identifierare är inte lätt utan kräver fullt focus och att man tänker på att andra ska kunna förstå dessa utan att behöva speciel kunskap om koden. Brister hos mig finns massa vid namngivning men efter denna kurs borde dessa bli färre. Att metodnamn ska börja med ett verb hade jag inte fullkoll på och att man tänker på att "Add Meaningful Context" när man beräknar saker, så man vet till vad resultatet tillhör.

Dessutom att man undviker förkortningar är en bra tumregel, för att med dessa är sannolikheten stor att någon som läser koden kommer att misstolka den eller att förkortning betyder något helt annat än vad man använder den till i koden.

Vid kodning så är man oftast i problemlösningsmode vilket oftast leder till att man inte alltid tänker på vad sina identifierare namges till. Viktigt här att man tar sig tid att gå igenom koden och reflektera på alla identifierare man skapat efter problemet är löst.

Detta med namngivning blir själklart bättre ju mer kod man skriver och läser, samt sammarbetar med andra i projekt där alla måste kunna förstå koden som man arbetar med. Så att slutligen med mera erfarenhet borde namngivningen bli bättre också får man hoppas...

<br>

## Reflektion kapitel 3
<table>
<thead><tr><th>Metodnamn och länk eller kod</th><th>Antal rader</th><th>Reflektion</th></tr></thead>
<tbody>
<tr><td><b>setMaintenanceCalories()</b></td><td>16</td><td><b>Don't Repeat Yourself</b><br>I denna metod har jag hämtar jag data från två andra metoder och returnerar produkten av dessa.</td></tr>

<tr><td><b>setActivityLevel(activityLevel)</b></td><td>17</td><td><b>Use Descriptive Names</b><br>Här försöker jag förklara vad metoden gör med ett lite längre namn. </td></tr>

<tr><td><b>setSex()</b></td><td>9</td><td><b>Use Descriptive Names</b><br>Här försöker jag förklara vad metoden gör med ett kort och enkelt namn. </td></tr>

<tr><td><b>setBMR()</b></td><td>9</td><td><b>Use Descriptive Names</b><br>Här kan jag namngett metoden tydligare t.ex. setBasalMetabolicRate. </td></tr>

<tr><td><b>checkInput(time)</b></td><td>8</td><td><b>Error Handling Is One Thing</b><br>Här har jag löst ut felhanteringen för imatning av tid till andra metoder.</td></tr>
</tbody>
</table>

<br>

## Min reflektion på kapitel 3
Min huvudpoäng att ta ifrån kapitel 3 är att funktioner endast sak göra en sak, fokuserar man på detta får man mycket vunnet. Att sin berättelse med koden blir mer lättläst, vilket också var en slutpoäng från kapitel 3. Dessutom om man håller ner funktionerna till att endast göra en sak blir det svårare att upprepa att koda samma problem flera gånger.

I mitt fall är detta mitt främsta misstag att man skriver flera if/ else satser i samma funktion och på så sätt försämrar läsbarheten.

Slutligen blir funktionsskapadet bättre med mera erfarenhet och med att man läser och försöker förstå andras funktioner.