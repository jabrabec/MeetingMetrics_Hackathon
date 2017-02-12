# Believe

Inspired by the National UFO Reporting Center Online Database, Believe was created to help people visualize where the most frequent UFO sightings are.  UFO reports and population data from the U.S. Census Bureau were used to create heat map layers for interesting data comparison.  Both heatmap layers may be toggled on and off, and there are buttons to toggle gradient color, radius, and opacity for each layer.  Users may also view charts representing the number of UFO reports per capita for each state, and the number of UFO reports for each day of the week.

##Contents
* [Tech Stack](#technologies)
* [Features](#features)
* [Installation](#install)
* [About Me](#aboutme)

## <a name="technologies"></a>Technologies
Tech Stack: PostgreSQL, SQLAlchemy, Python, Flask, JavaScript, HTML, CSS, JQuery, Beautiful Soup, Chart.js, Bootstrap.<br/>
APIs: Google Maps with visualization library, Geocoder<br/>

## <a name="features"></a>Features

![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-landing-page.png?raw=true)

Users may view the map with the heatmap layers for both UFO reports and population data:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-map-ufo-pop.png?raw=true)

Users may toggle the indiviaul heatmap layers on and off:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-map-no-pop.png?raw=true)

Users may toggle to change the gradient color:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-ufo-gradient.png?raw=true)

Users may also toggle to change the radius and the opacity:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-ufo-radius-opacity.png?raw=true)

Users may customize their view by choosing which buttons to toggle:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-map-buttons-pressed.png?raw=true)

Chart.js was used to visualize the data in different ways:
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-donut-chart.png?raw=true)
![](https://github.com/CharleyMcLean/Believe/blob/master/static/img/screenshot-bar-chart.png?raw=true)


## <a name="install"></a>Installation

To run Believe:

Install PostgreSQL (Mac OSX)

Clone or fork this repo:

```
https://github.com/CharleyMcLean/Believe.git
```

Create and activate a virtual environment inside your Believe directory:

```
virtualenv env
source env/bin/activate
```

Install the dependencies:

```
pip install -r requirements.txt
```

Set up the database:

```
python -i model.py
db.create_all()
quit()
psql ufo_reports < dump.sql
```

Run the app:

```
python server.py
```

You can now navigate to 'localhost:5000/' to access Believe.

## <a name="aboutme"></a>About Me
The developer lives in the San Francisco Bay Area. This is her first software project.