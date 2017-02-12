# Meeting Metrics - DeveloperWeek Hackathon

![](https://github.com/jabrabec/MeetingMetrics_Hackathon/blob/master/static/logo.jpg?raw=true)

Inspired by the [Scrum Alliance](https://www.scrumalliance.org/) challenge, MeetingMetrics was created to help companies visualize meeting data, in an effort to increase productivity.  Users may view visualizations of the average rating per meeting for a specific recurring meeting, the frequency of ratings for one specific meeting, and the amount of employee hours spent on different meeting topics.

##Contents
* [Tech Stack](#technologies)
* [Challenge Description](#challenge)
* [Features](#features)
* [Installation](#install)
* [About the Team](#aboutteam)

## <a name="technologies"></a>Technologies
Tech Stack: Python/Flask, PostgreSQL/SQLAlchemy, JavaScript/JQuery/Chart.js, HTML/CSS/Bootstrap<br/>


## <a name="challenge"></a>Challenge Description
How often do you attend a "productive" meeting? In fact, does your organization have a shared understanding of a "productive" meeting? We challenge you to develop a "Productive Meeting Visualization" tool - a way for users to input data points as agreed upon withing their organization, perhaps from a calendar invite, that would allow teams to calculate and visualize how productive or useful their meetings have been. They could (but don't have to) use D3 JS for visualizing the data and this could also work well with meeting minutes, so it's more incorporated into a meeting and doesn't feel "tacked on" or like an extra task to handle afterwards.


## <a name="features"></a>Features

Users may choose a specific recurring meeting and view visualizations of the average ratings for that meeting:
![]()
![]()

Users may view visualizations of the frequency of ratings for one specific meeting:
![]()

Users may view the amount of employee hours spent on different meeting topics:
![]()


## <a name="install"></a>Installation

To run MeetingMetrics:

Install PostgreSQL ([Mac OSX](https://launchschool.com/blog/how-to-install-postgresql-on-a-mac)) ([Linux/Windows](http://www.w3resource.com/PostgreSQL/install-postgresql-on-linux-and-windows.php))

Clone or fork this repo:

```
https://github.com/jabrabec/MeetingMetrics_Hackathon.git
```

Create and activate a virtual environment inside your MeetingMetrics directory:

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
createdb meeting-metrics
psql meeting-metrics < seed_data/meeting-metrics.sql
```

Run the app:

```
python server.py
```

You can now navigate to 'localhost:5000/' to access MeetingMetrics.

## <a name="aboutteam"></a>About the Team
The following software engineers contributed to the MeetingMetrics hackathon project:
* [Charley McLean](https://www.linkedin.com/in/charley-mclean)
* [Jennifer Brabec](https://www.linkedin.com/in/jenniferbrabec)
* [Katherine Liang](https://www.linkedin.com/in/katliang)
* [Nicole Negri](https://www.linkedin.com/in/nicole-negri)
* [Yusra Ahmed](https://www.linkedin.com/in/yusraa)
