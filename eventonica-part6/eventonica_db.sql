--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: events; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.events (
    id integer NOT NULL,
    name text NOT NULL,
    date date NOT NULL,
    category text
);


ALTER TABLE public.events OWNER TO arrm;

--
-- Name: events_eventid_seq; Type: SEQUENCE; Schema: public; Owner: arrm
--

CREATE SEQUENCE public.events_eventid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_eventid_seq OWNER TO arrm;

--
-- Name: events_eventid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrm
--

ALTER SEQUENCE public.events_eventid_seq OWNED BY public.events.id;


--
-- Name: user_events; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.user_events (
    user_id integer,
    event_id integer
);


ALTER TABLE public.user_events OWNER TO arrm;

--
-- Name: users; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.users OWNER TO arrm;

--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: arrm
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO arrm;

--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrm
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_eventid_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.events (id, name, date, category) FROM stdin;
1	Emo Fantasy	2020-03-09	Music
2	La Sad Gurl	2020-02-22	Comedy
3	For the Homie	2020-02-23	Ceremony
6	Roll Dawg	2020-08-18	Entertainment
\.


--
-- Data for Name: user_events; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.user_events (user_id, event_id) FROM stdin;
4	1
5	1
19	1
19	6
4	6
4	2
19	2
16	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.users (id, name) FROM stdin;
1	jane
2	Q
3	RB
4	XELA
5	Nkiruka
14	lisa
15	Tahshara
16	Joanna
19	Queso
24	Roll Dawg
\.


--
-- Name: events_eventid_seq; Type: SEQUENCE SET; Schema: public; Owner: arrm
--

SELECT pg_catalog.setval('public.events_eventid_seq', 6, true);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: arrm
--

SELECT pg_catalog.setval('public.users_userid_seq', 24, true);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: events ue; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT ue UNIQUE (name, date, category);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: saved_user_events; Type: INDEX; Schema: public; Owner: arrm
--

CREATE UNIQUE INDEX saved_user_events ON public.user_events USING btree (user_id, event_id);


--
-- Name: user_events user_events_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id) ON DELETE CASCADE;


--
-- Name: user_events user_events_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.user_events
    ADD CONSTRAINT user_events_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

