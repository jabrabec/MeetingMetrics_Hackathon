--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'LATIN1';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: meetings; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE meetings (
    meeting_id integer NOT NULL,
    meeting_title character varying(100) NOT NULL,
    meeting_time timestamp without time zone NOT NULL,
    attendees integer NOT NULL,
    length integer NOT NULL,
    topic_id integer,
    recurring_id integer
);


ALTER TABLE meetings OWNER TO vagrant;

--
-- Name: meetings_meeting_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE meetings_meeting_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE meetings_meeting_id_seq OWNER TO vagrant;

--
-- Name: meetings_meeting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE meetings_meeting_id_seq OWNED BY meetings.meeting_id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE ratings (
    rating_id integer NOT NULL,
    meeting_id integer,
    score double precision NOT NULL
);


ALTER TABLE ratings OWNER TO vagrant;

--
-- Name: ratings_rating_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE ratings_rating_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ratings_rating_id_seq OWNER TO vagrant;

--
-- Name: ratings_rating_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE ratings_rating_id_seq OWNED BY ratings.rating_id;


--
-- Name: topics; Type: TABLE; Schema: public; Owner: vagrant
--

CREATE TABLE topics (
    topic_id integer NOT NULL,
    topic_title character varying(500) NOT NULL
);


ALTER TABLE topics OWNER TO vagrant;

--
-- Name: topics_topic_id_seq; Type: SEQUENCE; Schema: public; Owner: vagrant
--

CREATE SEQUENCE topics_topic_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE topics_topic_id_seq OWNER TO vagrant;

--
-- Name: topics_topic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: vagrant
--

ALTER SEQUENCE topics_topic_id_seq OWNED BY topics.topic_id;


--
-- Name: meeting_id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY meetings ALTER COLUMN meeting_id SET DEFAULT nextval('meetings_meeting_id_seq'::regclass);


--
-- Name: rating_id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY ratings ALTER COLUMN rating_id SET DEFAULT nextval('ratings_rating_id_seq'::regclass);


--
-- Name: topic_id; Type: DEFAULT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY topics ALTER COLUMN topic_id SET DEFAULT nextval('topics_topic_id_seq'::regclass);


--
-- Data for Name: meetings; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY meetings (meeting_id, meeting_title, meeting_time, attendees, length, topic_id, recurring_id) FROM stdin;
1	Data Sharding	2017-04-17 11:30:00	72	60	4	\N
2	Git Workflow	2017-12-02 12:00:00	61	60	1	\N
3	Test Driven Development	2017-08-01 13:30:00	28	30	4	\N
4	New Hires	2017-08-24 14:00:00	75	60	5	\N
5	Predictive Analysis	2017-10-27 14:00:00	51	30	3	\N
6	Financial Reporting	2017-09-28 09:30:00	74	90	5	\N
7	NoSQL	2017-05-28 10:30:00	24	60	4	\N
8	New Initiatives	2017-01-14 11:30:00	100	120	5	\N
9	2017 Goals and Strategies	2017-09-24 09:00:00	91	90	5	\N
10	AWS Updates	2017-09-23 13:30:00	34	88	2	\N
\.


--
-- Name: meetings_meeting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('meetings_meeting_id_seq', 10, true);


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY ratings (rating_id, meeting_id, score) FROM stdin;
1	1	4
2	2	3.5
3	3	5
4	4	5
5	5	3
6	6	3
7	7	4
8	8	4.5
9	9	5
10	10	5
\.


--
-- Name: ratings_rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('ratings_rating_id_seq', 10, true);


--
-- Data for Name: topics; Type: TABLE DATA; Schema: public; Owner: vagrant
--

COPY topics (topic_id, topic_title) FROM stdin;
1	Team Updates
2	Production
3	Tech Talks
4	Learning & Development
5	All Hands
\.


--
-- Name: topics_topic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: vagrant
--

SELECT pg_catalog.setval('topics_topic_id_seq', 5, true);


--
-- Name: meetings_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY meetings
    ADD CONSTRAINT meetings_pkey PRIMARY KEY (meeting_id);


--
-- Name: ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (rating_id);


--
-- Name: topics_pkey; Type: CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY topics
    ADD CONSTRAINT topics_pkey PRIMARY KEY (topic_id);


--
-- Name: meetings_topic_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY meetings
    ADD CONSTRAINT meetings_topic_id_fkey FOREIGN KEY (topic_id) REFERENCES topics(topic_id);


--
-- Name: ratings_meeting_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: vagrant
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_meeting_id_fkey FOREIGN KEY (meeting_id) REFERENCES meetings(meeting_id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

