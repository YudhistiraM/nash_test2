toc.dat                                                                                             0000600 0004000 0002000 00000022311 13734140057 0014442 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP           '                x            universitas     11.9 (Ubuntu 11.9-1.pgdg18.04+1)     11.9 (Ubuntu 11.9-1.pgdg18.04+1) #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false         �           1262    16384    universitas    DATABASE     }   CREATE DATABASE universitas WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE universitas;
             postgres    false         �            1259    16449 	   mahasiswa    TABLE     {   CREATE TABLE public.mahasiswa (
    id_mhs integer NOT NULL,
    nama_mhs character(100),
    alamat_mhs character(300)
);
    DROP TABLE public.mahasiswa;
       public         postgres    false         �            1259    16447    mahasiswa_id_mhs_seq    SEQUENCE     �   CREATE SEQUENCE public.mahasiswa_id_mhs_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.mahasiswa_id_mhs_seq;
       public       postgres    false    197         �           0    0    mahasiswa_id_mhs_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.mahasiswa_id_mhs_seq OWNED BY public.mahasiswa.id_mhs;
            public       postgres    false    196         �            1259    16459    mata_kuliah    TABLE     d   CREATE TABLE public.mata_kuliah (
    id_matkul integer NOT NULL,
    nama_matkul character(100)
);
    DROP TABLE public.mata_kuliah;
       public         postgres    false         �            1259    16457    mata_kuliah_id_matkul_seq    SEQUENCE     �   CREATE SEQUENCE public.mata_kuliah_id_matkul_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.mata_kuliah_id_matkul_seq;
       public       postgres    false    199         �           0    0    mata_kuliah_id_matkul_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.mata_kuliah_id_matkul_seq OWNED BY public.mata_kuliah.id_matkul;
            public       postgres    false    198         �            1259    16477    nilai    TABLE     �   CREATE TABLE public.nilai (
    id_nilai integer NOT NULL,
    id_mhs integer NOT NULL,
    id_matkul integer NOT NULL,
    nilai_mhs integer,
    keterangan character(200)
);
    DROP TABLE public.nilai;
       public         postgres    false         �            1259    16475    nilai_id_matkul_seq    SEQUENCE     �   CREATE SEQUENCE public.nilai_id_matkul_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.nilai_id_matkul_seq;
       public       postgres    false    203         �           0    0    nilai_id_matkul_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.nilai_id_matkul_seq OWNED BY public.nilai.id_matkul;
            public       postgres    false    202         �            1259    16473    nilai_id_mhs_seq    SEQUENCE     �   CREATE SEQUENCE public.nilai_id_mhs_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.nilai_id_mhs_seq;
       public       postgres    false    203         �           0    0    nilai_id_mhs_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.nilai_id_mhs_seq OWNED BY public.nilai.id_mhs;
            public       postgres    false    201         �            1259    16471    nilai_id_nilai_seq    SEQUENCE     �   CREATE SEQUENCE public.nilai_id_nilai_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.nilai_id_nilai_seq;
       public       postgres    false    203         �           0    0    nilai_id_nilai_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.nilai_id_nilai_seq OWNED BY public.nilai.id_nilai;
            public       postgres    false    200                    2604    16452    mahasiswa id_mhs    DEFAULT     t   ALTER TABLE ONLY public.mahasiswa ALTER COLUMN id_mhs SET DEFAULT nextval('public.mahasiswa_id_mhs_seq'::regclass);
 ?   ALTER TABLE public.mahasiswa ALTER COLUMN id_mhs DROP DEFAULT;
       public       postgres    false    197    196    197                    2604    16463    mata_kuliah id_matkul    DEFAULT     ~   ALTER TABLE ONLY public.mata_kuliah ALTER COLUMN id_matkul SET DEFAULT nextval('public.mata_kuliah_id_matkul_seq'::regclass);
 D   ALTER TABLE public.mata_kuliah ALTER COLUMN id_matkul DROP DEFAULT;
       public       postgres    false    199    198    199                    2604    16480    nilai id_nilai    DEFAULT     p   ALTER TABLE ONLY public.nilai ALTER COLUMN id_nilai SET DEFAULT nextval('public.nilai_id_nilai_seq'::regclass);
 =   ALTER TABLE public.nilai ALTER COLUMN id_nilai DROP DEFAULT;
       public       postgres    false    203    200    203                    2604    16481    nilai id_mhs    DEFAULT     l   ALTER TABLE ONLY public.nilai ALTER COLUMN id_mhs SET DEFAULT nextval('public.nilai_id_mhs_seq'::regclass);
 ;   ALTER TABLE public.nilai ALTER COLUMN id_mhs DROP DEFAULT;
       public       postgres    false    201    203    203                    2604    16482    nilai id_matkul    DEFAULT     r   ALTER TABLE ONLY public.nilai ALTER COLUMN id_matkul SET DEFAULT nextval('public.nilai_id_matkul_seq'::regclass);
 >   ALTER TABLE public.nilai ALTER COLUMN id_matkul DROP DEFAULT;
       public       postgres    false    203    202    203         �          0    16449 	   mahasiswa 
   TABLE DATA               A   COPY public.mahasiswa (id_mhs, nama_mhs, alamat_mhs) FROM stdin;
    public       postgres    false    197       2952.dat �          0    16459    mata_kuliah 
   TABLE DATA               =   COPY public.mata_kuliah (id_matkul, nama_matkul) FROM stdin;
    public       postgres    false    199       2954.dat �          0    16477    nilai 
   TABLE DATA               S   COPY public.nilai (id_nilai, id_mhs, id_matkul, nilai_mhs, keterangan) FROM stdin;
    public       postgres    false    203       2958.dat �           0    0    mahasiswa_id_mhs_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.mahasiswa_id_mhs_seq', 4, true);
            public       postgres    false    196         �           0    0    mata_kuliah_id_matkul_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.mata_kuliah_id_matkul_seq', 3, true);
            public       postgres    false    198         �           0    0    nilai_id_matkul_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.nilai_id_matkul_seq', 1, false);
            public       postgres    false    202         �           0    0    nilai_id_mhs_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.nilai_id_mhs_seq', 1, false);
            public       postgres    false    201         �           0    0    nilai_id_nilai_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.nilai_id_nilai_seq', 21, true);
            public       postgres    false    200                    2606    16454    mahasiswa mahasiswa_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.mahasiswa
    ADD CONSTRAINT mahasiswa_pkey PRIMARY KEY (id_mhs);
 B   ALTER TABLE ONLY public.mahasiswa DROP CONSTRAINT mahasiswa_pkey;
       public         postgres    false    197         	           2606    16465    mata_kuliah mata_kuliah_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.mata_kuliah
    ADD CONSTRAINT mata_kuliah_pkey PRIMARY KEY (id_matkul);
 F   ALTER TABLE ONLY public.mata_kuliah DROP CONSTRAINT mata_kuliah_pkey;
       public         postgres    false    199                    2606    16484    nilai nilai_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_pkey PRIMARY KEY (id_nilai);
 :   ALTER TABLE ONLY public.nilai DROP CONSTRAINT nilai_pkey;
       public         postgres    false    203                    2606    16490    nilai nilai_id_matkul_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_id_matkul_fkey FOREIGN KEY (id_matkul) REFERENCES public.mata_kuliah(id_matkul);
 D   ALTER TABLE ONLY public.nilai DROP CONSTRAINT nilai_id_matkul_fkey;
       public       postgres    false    199    203    2825                    2606    16485    nilai nilai_id_mhs_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_id_mhs_fkey FOREIGN KEY (id_mhs) REFERENCES public.mahasiswa(id_mhs);
 A   ALTER TABLE ONLY public.nilai DROP CONSTRAINT nilai_id_mhs_fkey;
       public       postgres    false    197    2823    203                                                                                                                                                                                                                                                                                                                               2952.dat                                                                                            0000600 0004000 0002000 00000003125 13734140057 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Saeful                                                                                              	Bogor                                                                                                                                                                                                                                                                                                       
2	Yudhistira                                                                                          	Tangerang                                                                                                                                                                                                                                                                                                   
3	Angri                                                                                               	Jakarta                                                                                                                                                                                                                                                                                                     
4	Sefa                                                                                                	Bogor                                                                                                                                                                                                                                                                                                       
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                           2954.dat                                                                                            0000600 0004000 0002000 00000000472 13734140057 0014264 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Analisis Perancangan Sistem Informasi                                                               
2	Algoritma                                                                                           
3	Databases                                                                                           
\.


                                                                                                                                                                                                      2958.dat                                                                                            0000600 0004000 0002000 00000002703 13734140057 0014267 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        5	1	3	9	LULUS                                                                                                                                                                                                   
6	2	3	8	LULUS                                                                                                                                                                                                   
7	3	3	5	TIDAK LULUS                                                                                                                                                                                             
10	4	3	5	TIDAK LULUS                                                                                                                                                                                             
19	2	1	80	Lulus                                                                                                                                                                                                   
21	3	3	90	LULUS                                                                                                                                                                                                   
20	3	1	80	LULUS                                                                                                                                                                                                   
\.


                                                             restore.sql                                                                                         0000600 0004000 0002000 00000017445 13734140057 0015403 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 11.9 (Ubuntu 11.9-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.9 (Ubuntu 11.9-1.pgdg18.04+1)

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

DROP DATABASE universitas;
--
-- Name: universitas; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE universitas WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE universitas OWNER TO postgres;

\connect universitas

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

SET default_with_oids = false;

--
-- Name: mahasiswa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mahasiswa (
    id_mhs integer NOT NULL,
    nama_mhs character(100),
    alamat_mhs character(300)
);


ALTER TABLE public.mahasiswa OWNER TO postgres;

--
-- Name: mahasiswa_id_mhs_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mahasiswa_id_mhs_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mahasiswa_id_mhs_seq OWNER TO postgres;

--
-- Name: mahasiswa_id_mhs_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mahasiswa_id_mhs_seq OWNED BY public.mahasiswa.id_mhs;


--
-- Name: mata_kuliah; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mata_kuliah (
    id_matkul integer NOT NULL,
    nama_matkul character(100)
);


ALTER TABLE public.mata_kuliah OWNER TO postgres;

--
-- Name: mata_kuliah_id_matkul_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mata_kuliah_id_matkul_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mata_kuliah_id_matkul_seq OWNER TO postgres;

--
-- Name: mata_kuliah_id_matkul_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mata_kuliah_id_matkul_seq OWNED BY public.mata_kuliah.id_matkul;


--
-- Name: nilai; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nilai (
    id_nilai integer NOT NULL,
    id_mhs integer NOT NULL,
    id_matkul integer NOT NULL,
    nilai_mhs integer,
    keterangan character(200)
);


ALTER TABLE public.nilai OWNER TO postgres;

--
-- Name: nilai_id_matkul_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nilai_id_matkul_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nilai_id_matkul_seq OWNER TO postgres;

--
-- Name: nilai_id_matkul_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nilai_id_matkul_seq OWNED BY public.nilai.id_matkul;


--
-- Name: nilai_id_mhs_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nilai_id_mhs_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nilai_id_mhs_seq OWNER TO postgres;

--
-- Name: nilai_id_mhs_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nilai_id_mhs_seq OWNED BY public.nilai.id_mhs;


--
-- Name: nilai_id_nilai_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nilai_id_nilai_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nilai_id_nilai_seq OWNER TO postgres;

--
-- Name: nilai_id_nilai_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nilai_id_nilai_seq OWNED BY public.nilai.id_nilai;


--
-- Name: mahasiswa id_mhs; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mahasiswa ALTER COLUMN id_mhs SET DEFAULT nextval('public.mahasiswa_id_mhs_seq'::regclass);


--
-- Name: mata_kuliah id_matkul; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mata_kuliah ALTER COLUMN id_matkul SET DEFAULT nextval('public.mata_kuliah_id_matkul_seq'::regclass);


--
-- Name: nilai id_nilai; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai ALTER COLUMN id_nilai SET DEFAULT nextval('public.nilai_id_nilai_seq'::regclass);


--
-- Name: nilai id_mhs; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai ALTER COLUMN id_mhs SET DEFAULT nextval('public.nilai_id_mhs_seq'::regclass);


--
-- Name: nilai id_matkul; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai ALTER COLUMN id_matkul SET DEFAULT nextval('public.nilai_id_matkul_seq'::regclass);


--
-- Data for Name: mahasiswa; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mahasiswa (id_mhs, nama_mhs, alamat_mhs) FROM stdin;
\.
COPY public.mahasiswa (id_mhs, nama_mhs, alamat_mhs) FROM '$$PATH$$/2952.dat';

--
-- Data for Name: mata_kuliah; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mata_kuliah (id_matkul, nama_matkul) FROM stdin;
\.
COPY public.mata_kuliah (id_matkul, nama_matkul) FROM '$$PATH$$/2954.dat';

--
-- Data for Name: nilai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nilai (id_nilai, id_mhs, id_matkul, nilai_mhs, keterangan) FROM stdin;
\.
COPY public.nilai (id_nilai, id_mhs, id_matkul, nilai_mhs, keterangan) FROM '$$PATH$$/2958.dat';

--
-- Name: mahasiswa_id_mhs_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mahasiswa_id_mhs_seq', 4, true);


--
-- Name: mata_kuliah_id_matkul_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mata_kuliah_id_matkul_seq', 3, true);


--
-- Name: nilai_id_matkul_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nilai_id_matkul_seq', 1, false);


--
-- Name: nilai_id_mhs_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nilai_id_mhs_seq', 1, false);


--
-- Name: nilai_id_nilai_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nilai_id_nilai_seq', 21, true);


--
-- Name: mahasiswa mahasiswa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mahasiswa
    ADD CONSTRAINT mahasiswa_pkey PRIMARY KEY (id_mhs);


--
-- Name: mata_kuliah mata_kuliah_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mata_kuliah
    ADD CONSTRAINT mata_kuliah_pkey PRIMARY KEY (id_matkul);


--
-- Name: nilai nilai_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_pkey PRIMARY KEY (id_nilai);


--
-- Name: nilai nilai_id_matkul_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_id_matkul_fkey FOREIGN KEY (id_matkul) REFERENCES public.mata_kuliah(id_matkul);


--
-- Name: nilai nilai_id_mhs_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nilai
    ADD CONSTRAINT nilai_id_mhs_fkey FOREIGN KEY (id_mhs) REFERENCES public.mahasiswa(id_mhs);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           