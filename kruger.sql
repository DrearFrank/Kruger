Create database kruger;

create sequence id_seq;
create sequence id_ic;

create table actividades (
   ida                  int4                 not null default nextval('id_seq'::regclass),
   nombre               varchar(100)         null,
   estado               bool                 null default false,
   constraint actividad_pk primary key (ida)
)without oids;

create table users (
   id                   int4                 not null default nextval('id_ic'::regclass),
   email                varchar(100)         null,
   password             varchar(1000)        null
)without oids;