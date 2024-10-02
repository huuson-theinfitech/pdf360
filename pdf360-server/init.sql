CREATE TABLE pdf_files (
	id uuid NOT NULL,
	file_name varchar(255) NULL,
	file_path text NULL,
	created_stamp timestamp NULL,
	last_updated timestamp NULL,
	page_width float8 NULL,
	CONSTRAINT pdf_files_pkey PRIMARY KEY (id)
);

CREATE TABLE text_box_coordinates (
	id uuid NOT NULL,
	pdf_id uuid NULL,
	x_coordinate float8 NULL,
	y_coordinate float8 NULL,
	box_width float8 NULL,
	box_height float8 NULL,
	created_stamp timestamp NULL,
	last_updated timestamp NULL,
	"text" text NULL,
	CONSTRAINT text_box_coordinates_pkey PRIMARY KEY (id)
);