-- MySQL 2 PostgreSQL dump

SET client_encoding = 'UTF8';
SET standard_conforming_strings = off;
SET check_function_bodies = false;
SET client_min_messages = warning;
 
--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public
--
 
DROP SEQUENCE IF EXISTS Users_id_seq CASCADE;
 
CREATE SEQUENCE Users_id_seq
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
    
    
SELECT pg_catalog.setval('Users_id_seq', 8, true);
 
-- Table: Users
 
-- DROP TABLE Users;
DROP TABLE IF EXISTS "Users" CASCADE;
 
CREATE TABLE "Users" (
  "id" integer DEFAULT nextval('Users_id_seq'::regclass) NOT NULL,
  "name" character varying(255),
  "pictureUrl" text,
  CONSTRAINT Users_pkey PRIMARY KEY("id")
)
WITHOUT OIDS;
-- Table: slots
 
-- DROP TABLE slots;
DROP TABLE IF EXISTS "slots" CASCADE;
 
CREATE TABLE "slots" (
  "id" integer,
  "tweet_id" integer
)
WITHOUT OIDS;
DROP INDEX IF EXISTS "tweets_to_slots" CASCADE;
CREATE INDEX "tweets_to_slots" ON "slots" ("tweet_id");
--
-- Name: tweets_id_seq; Type: SEQUENCE; Schema: public
--
 
DROP SEQUENCE IF EXISTS tweets_id_seq CASCADE;
 
CREATE SEQUENCE tweets_id_seq
    INCREMENT BY 1
    NO MAXVALUE
    NO MINVALUE
    CACHE 1;
    
    
SELECT pg_catalog.setval('tweets_id_seq', 67, true);
 
-- Table: tweets
 
-- DROP TABLE tweets;
DROP TABLE IF EXISTS "tweets" CASCADE;
 
CREATE TABLE "tweets" (
  "id" integer DEFAULT nextval('tweets_id_seq'::regclass) NOT NULL,
  "name" character varying(50),
  "text" character varying(255),
  "slotId" integer,
  CONSTRAINT tweets_pkey PRIMARY KEY("id")
)
WITHOUT OIDS;
--
-- Data for Name: Users; Type: TABLE DATA; Schema: public
--

COPY "Users" ("id", "name", "pictureUrl") FROM stdin;
1	Zeke	\N
2	Christain	\N
3	Tessa	\N
4	Nimit	\N
5	David	\N
6	Fullstack	\N
7	Class 111	\N
\.

--
-- Data for Name: slots; Type: TABLE DATA; Schema: public
--

COPY "slots" ("id", "tweet_id") FROM stdin;
7	11
8	12
4	66
5	48
6	50
2	52
1	62
3	64
\.

--
-- Data for Name: tweets; Type: TABLE DATA; Schema: public
--

COPY "tweets" ("id", "name", "text", "slotId") FROM stdin;
5	Zeke	Fullstack is great! #fsalove	1
6	Christian	Fullstack academy is amazing	2
7	Nimit	Fullstack academy instructor is very cool	3
8	David	Zeke is mindblowing	4
9	Steve(s)	Charlotte is amazing	5
10	Nandan	bla bla bla	6
11	Bill Clinton	bla bla bla is so whatever	7
12	Obama	yadadada	8
13	Teddy R.	blah blah	9
14	Quintin	yahahahah #yesyesyes	10
15	kjl	jk	5
16	kuo	iuop	5
17	kuo	iuop	9
18	yes	hello	4
19	hey	lk	7
20	hey	lk	7
21	sdf	as	6
22	ljlk	lk	7
23	;lk	;l	7
24	klj	lk	6
25	klj	lk	6
26	fd	sdf	8
27	fd	sdf	8
28	dsf	sdf	9
29	dsf	s	10
30	df	df	3
31	dsf	ssss	7
32	sdf	sdf	4
33	sd	ddd	3
34	lkj	lk	3
35	;lk	l;	2
36	lkj	lklll	7
37	ll	lll	5
38	ll	llll	5
39	lkj	l	4
40	ll	lll	7
41	kk	kk	3
42	kk	kkk	3
43	ll	lll	6
44	oo	oo	1
45	ll	ll	7
46	oo	oo	3
47	iii	iii	4
48	ll	ll	5
49	ii	ii	6
50	oo	oo	6
51	pp	pp	3
52	l	l	2
53	oo	o	1
54	Zeke	IAIAIA	1
55	hello	yes	\N
56	jjj	kkk	3
57	ll	ll	3
58	pp	pp	3
59	oo	oo	3
60	pp	pp	2
61	pp	p	3
62	Nando	hey	1
63	oooo	ooooo	3
64	PPP	PPP	3
65	YES	YESYESY	4
66	oioi	oi	4
\.

