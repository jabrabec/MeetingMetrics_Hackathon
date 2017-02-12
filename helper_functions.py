from model import db, Topic, Meeting, Rating


def query_meetings():
    """Helper function used by query database for all meetings"""

    sql_query = """SELECT * FROM meetings"""

    # perform db query and get all results
    cursor = db.session.execute(sql_query)
    results = cursor.fetchall()

    return results


def query_recurring_meetings():
    """Helper function used by query database for recurring meetings"""

    dicto = {}
    # labels = []
    # data = []

    meetings = Meeting.query.filter_by(recurring_id=1).all()

    # meetings = db.session.query(
    #                             Meeting.meeting_title,
    #                             Meeting.meeting_time,
    #                             # Rating.score).all()
    #                             Rating.score).filter_by(Meeting.recurring_id=1)
# for mtg in meetings:
#     print mtg.meeting_title
#     for rating in mtg.rating:
#         print rating.score

    for mtg in meetings:
        title = meeting_title
        dicto[mtg.meeting_time] = dicto.get(mtg.rating.score)

    return
