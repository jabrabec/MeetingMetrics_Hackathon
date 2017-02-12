"""File to seed database with example data"""
from model import Meeting, Topic, Rating, connect_to_db, db
from server import app

import csv


def load_topics():
    """Load ratings from source CSV into database."""

    print "Importing topics..."

    # Delete all rows in table, so if we need to run this a second time,
    # we won't be trying to add duplicate retailers
    Topic.query.delete()

    # Read CSV file
    with open("seed_data/topics.csv") as source_file:
        example_data = list(csv.reader(source_file))

    # skip header row for populating db
    for list_item in example_data[1:]:
        topic = Topic(topic_title=list_item[1])

        # Add the current retailer to the session
        db.session.add(topic)

    # Commit the db.session changes to the database
    db.session.commit()


def load_meetings():
    """Load meetings from source CSV into database."""

    print "Importing meetings..."

    # Delete all rows in table, so if we need to run this a second time,
    # we won't be trying to add duplicate retailers
    Meeting.query.delete()

    # Read CSV file
    with open("seed_data/meetings.csv") as source_file:
        example_data = list(csv.reader(source_file))

    # skip header row for populating db
    for list_item in example_data[1:]:
        meeting = Meeting(meeting_title=list_item[1],
                          meeting_time=list_item[2],
                          attendees=list_item[3],
                          length=list_item[4],
                          topic_id=list_item[5])

        # Add the current retailer to the session
        db.session.add(meeting)

    # Commit the db.session changes to the database
    db.session.commit()


def load_ratings():
    """Load ratings from source CSV into database."""

    print "Importing ratings..."

    # Delete all rows in table, so if we need to run this a second time,
    # we won't be trying to add duplicate retailers
    Rating.query.delete()

    # Read CSV file
    with open("seed_data/ratings.csv") as source_file:
        example_data = list(csv.reader(source_file))

    # skip header row for populating db
    for list_item in example_data[1:]:
        rating = Rating(meeting_id=list_item[1],
                        score=list_item[2])

        # Add the current retailer to the session
        db.session.add(rating)

    # Commit the db.session changes to the database
    db.session.commit()


if __name__ == "__main__":
    connect_to_db(app)

    # In case tables haven't been created, create them
    db.create_all()

    # Import data
    load_topics()
    load_meetings()
    load_ratings()
