"""Meeting Metrics Application"""

from jinja2 import StrictUndefined
from flask import (Flask,
                   render_template,
                   # redirect,
                   # request,
                   # flash,
                   # session,
                   jsonify
                   )
from model import (connect_to_db)
from flask_debugtoolbar import DebugToolbarExtension

from helper_functions import (query_meetings)


app = Flask(__name__)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"

# Jinja will raise an error instead of failing with any undefined variables
app.jinja_env.undefined = StrictUndefined


@app.route('/')
def index():
    """Show main page."""

    return render_template('index.html')


@app.route('/meetings.json')
def meetings_json():
    """Query DB for meeting info."""

    # some stuff about meetings from DB
    meeting_info = ""

    return jsonify(meeting_info)


@app.route('/ratings.json')
def ratings_json():
    """Query DB for rating info."""

    # some stuff about meeting ratings from DB
    rating_info = ""

    return jsonify(rating_info)


@app.route('/topics.json')
def topics_json():
    """Query DB for meeting info."""

    # some stuff about meetings from DB
    topics_info = ""

    return jsonify(topics_info)


@app.route('/radar.json')
def radar_json():
    """Radar graph info"""

    radar_info = ""

    return jsonify(radar_info)


@app.route("/error")
def error():

    raise Exception("Error!")


if __name__ == "__main__":
    # debug=True allows for use of DebugToolbarExtension downstream
    app.debug = True

    connect_to_db(app)

    # Use the DebugToolbar
    DebugToolbarExtension(app)

    app.run(host="0.0.0.0", port=5000)
