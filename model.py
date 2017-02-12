from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

class Meeting(db.Model):

    __tablename__ = "meetings"

    meeting_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    meeting_time = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    attendees = db.Column(db.Integer, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    topic_id = db.Column(db.Integer, db.ForeignKey('topics.topic_id'))

    topic = db.relationship("Topic", backref=db.backref("meetings"))
    rating = db.relationship("Rating", backref=db.backref("meetings"))


class Topic(db.Model):

    __tablename__ = "topics"

    topic_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    topic_title = db.Column(db.String(500), nullable=False)
    meeting_id = db.Column(db.Integer, db.ForeignKey('meetings.meeting_id'))


class Rating(db.Model):

    __tablename__ = "ratings"

    rating_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    meeting_id = db.Column(db.Integer, db.ForeignKey('meetings.meeting_id'))
    score = db.Column(db.Integer, nullable=False)



def connect_to_db(app, db_URI='postgresql:///meeting-metrics'):
    """Connect the database to our Flask app."""

    # Configure to use our PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = db_URI
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    connect_to_db(app)
    print "Connected to DB."

