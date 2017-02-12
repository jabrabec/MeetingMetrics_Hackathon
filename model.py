from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Meetings(db.Model):
    """