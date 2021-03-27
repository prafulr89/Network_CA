\connect demo;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  id UUID PRIMARY KEY DEFAULT public.uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  create_date timestamp with time zone DEFAULT now() NOT NULL,
  update_date timestamp with time zone DEFAULT now() NOT NULL
);
