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
-- Name: individuals; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname text,
    species text NOT NULL,
    "timestamp" timestamp with time zone NOT NULL
);


ALTER TABLE public.individuals OWNER TO arrm;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: arrm
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO arrm;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrm
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    sighting_time timestamp with time zone NOT NULL,
    individual_spotted text NOT NULL,
    location_spotted character varying NOT NULL,
    healthy_or_not boolean NOT NULL,
    email_of_reporter text NOT NULL
);


ALTER TABLE public.sightings OWNER TO arrm;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: arrm
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO arrm;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrm
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: arrm
--

CREATE TABLE public.species (
    id integer NOT NULL,
    common_name text NOT NULL,
    scientific_name text,
    living_in_wild integer,
    life_stat_code text,
    "timestamp" timestamp with time zone NOT NULL
);


ALTER TABLE public.species OWNER TO arrm;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: arrm
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO arrm;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arrm
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.individuals (id, nickname, species, "timestamp") FROM stdin;
4	benny	beluga	2018-09-17 20:44:52.134125-07
5	bernard	beluga	2018-09-17 22:44:52.134125-07
6	kayla	orangutan	2020-08-18 20:44:52.134125-07
7	kendra	orangutan	2020-08-18 20:44:52.134125-07
2	lenny	sealion	2016-06-22 20:44:52.134125-07
3	nala	sealion	2016-06-22 20:45:32.134125-07
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.sightings (id, sighting_time, individual_spotted, location_spotted, healthy_or_not, email_of_reporter) FROM stdin;
1	2020-03-12 11:44:52.134125-07	sea lion	ocean	t	kyle@yahoo.com
2	2020-03-12 11:44:52.134125-07	orangutan	tree	f	jenna@hotmail.com
3	2020-03-12 11:44:52.134125-07	orangutan	rainforest	t	jone@techtonica.org
4	2020-03-12 11:44:52.134125-07	beluga	ocean	t	henry@ucsc.edu
5	2020-03-12 11:44:52.134125-07	beluga	ocean	t	chavela@berkeley.edu
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: arrm
--

COPY public.species (id, common_name, scientific_name, living_in_wild, life_stat_code, "timestamp") FROM stdin;
1	orangutan	pongo pygmaeus	104700	cr	2020-03-12 11:44:52.134125-07
2	beluga	delphinapterus leucas\n	150000	nt	2020-03-12 11:44:52.134125-07
3	sea lion	zalophus wollebaeki\n	\N	en	2020-03-12 11:44:52.134125-07
\.


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrm
--

SELECT pg_catalog.setval('public.individuals_id_seq', 7, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrm
--

SELECT pg_catalog.setval('public.sightings_id_seq', 5, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arrm
--

SELECT pg_catalog.setval('public.species_id_seq', 3, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: arrm
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

