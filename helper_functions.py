from model import db


def query_meetings():
    """Helper function used by query database for all meetings"""

    sql_query = """SELECT * FROM meetings"""

    # perform db query and get all results
    cursor = db.session.execute(sql_query)
    results = cursor.fetchall()

    return results

def query_recurring_meetings():
    """Helper function used by query database for all meetings"""

    recur_mtg = db.session.query(Meeting).filter_by(recurring_id=1)

    # perform db query and get all results
    cursor = db.session.execute(sql_query)
    results = cursor.fetchall()

    return results
