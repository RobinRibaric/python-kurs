# Analys av sambandet mellan nederbörd, temperatur och honungsproduktion i USA

## Beskrivning
Syftet med detta projekt är att undersöka sambandet mellan nederbörd, medeltemperatur och honungsproduktion över tid och i olika delstater i USA. Tanken att använda olika tekniker för maskininlärning, bland annat clustering, korrelationsanalys, decision trees eller random forests och linjär regression. Med hjälp av dessa tekniker ska jag försöka identifiera mönster och trender i datat och att fastställa vilka variabler som är viktigast för att förutsäga honungsproduktionen.

Dessutom planerar jag att utforska användningen av neurala nätverk för att förutsäga honungsproduktionen utifrån det data jag samlat in. Genom att jämföra prestandan hos olika algoritmer för maskininlärning hoppas jag få insikt i de underliggande faktorer som driver honungsproduktionen i olika regioner i USA.

## Honey Production Dataset

The honey production dataset contains the following columns:

- `state`: Name of the state
- `colony_number`: Number of honey producing colonies. Honey producing colonies are the maximum number of colonies managed during the year (including colonies which died, colonies added, and colonies subtracted).
- `yield_per_colony`: Honey yield per colony. Unit is pounds.
- `productions`: Total production obtained by multiplying colony_number by yield_per_colony. Unit is pounds.
- `stocks`: Refers to stocks held by producers. Unit is pounds.
- `average_price`: Refers to average price per pound based on expanded sales. Unit is dollars.
- `value_of_prod`: Value of production obtained by multiplying production and average_price. Unit is dollars.

Note that the precipitation data is in inches, and the temperature data is in Fahrenheit.
 
## Data Sources
Projektet använder offentligt tillgängliga dataset för honungsproduktion, nederbörd och temperatur i USA. Dessa datamängder har erhållits från följande källor:

- Honey production: [Kaggle: Honey Production in US (2010-2021)](https://www.kaggle.com/datasets/mohitpoudel/honey-production-in-us-20102021)
- Precipitation: [NOAA: National Centers for Environmental Information](https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/1/pdsi/1/12/2010-2021)
- Average Temperatures: [NOAA: National Centers for Environmental Information](https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/1/pcp/1/12/2010-2021)

Ytterligare källor och data kan läggas till i projektet vid behov. Om tiden tillåter kan jag utforska andra källor för att få en mer omfattande förståelse av honungsproduktion.

