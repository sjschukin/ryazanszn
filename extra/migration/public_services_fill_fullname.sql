USE u1005861_upr;

INSERT INTO node__field_fullname
(
	bundle,
	deleted,
	entity_id,
	revision_id,
	langcode,
	delta,
	field_fullname_value
)
SELECT
	type as bundle,
	0 as deleted,
	nid as entity_id,
	nid as revision,
	langcode,
	0 as delta,
	title as field_fullname_value
from node_field_data
where type = 'public_service'
