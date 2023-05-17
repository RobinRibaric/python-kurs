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
- Precipitation: [NOAA: National Centers for Environmental Information](https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/1/pdsi/1/12/1995-2021)
- Average Temperatures: [NOAA: National Centers for Environmental Information](https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/statewide/time-series/1/pcp/1/12/1995-2021)

Ytterligare källor och data kan läggas till i projektet vid behov. Om tiden tillåter kan jag utforska andra källor för att få en mer omfattande förståelse av honungsproduktion.


# Honey Production Prediction in the United States

## Project Description

This project aimed to create a Machine Learning model to predict honey production in various US states based on certain environmental factors. The key factors we considered for this study were average temperature and precipitation. The underlying hypothesis was that these climate parameters significantly influence honey production.

The data used in this project comprises honey production records, merged with corresponding average temperature and precipitation data.

## Results

We attempted to build a predictive model using a neural network. However, the model failed to yield satisfactory results. Despite tuning hyperparameters and experimenting with different architectures, the neural network didn't show any robust predictive ability.

Our project's primary goal was to find a significant connection between honey production and the selected environmental factors, namely average temperature and precipitation. However, based on our model's performance and subsequent analysis, it appears that there isn't a strong correlation between these variables and honey production.

While these results might initially seem disappointing, they do provide a valuable insight: either these factors are not as influential as we initially thought, or their relationship with honey production is more complex and perhaps nonlinear, requiring a different analytical approach.

Please note that, although our current model did not yield the desired results, there is potential for further research. It's possible that including additional variables (such as type of bees, beekeeper practices, presence of diseases, etc.) or using different modeling techniques could improve the prediction results.

## Conclusion

This project serves as a reminder that not all hypotheses in data science will be proven correct. The lack of a strong correlation between the variables we chose and honey production was an unexpected, yet informative outcome. We encourage others to build upon this work, explore other influencing factors, and employ different modeling techniques in the pursuit of predicting honey production accurately.

## Future Work

For those interested in continuing this research, we suggest:

- Adding more features that might influence honey production, such as bee species, beekeeper practices, or presence of diseases.
- Experimenting with different machine learning models, such as Decision Trees, Random Forests, or SVMs, which might be better suited to handle complex, non-linear relationships.
- Considering time-series analysis, as this could better capture the trends and seasonality in honey production.

Thank you for your interest in our project, and we look forward to seeing future developments in this area!
