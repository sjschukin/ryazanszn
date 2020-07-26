/*
 * Move first news image from field_image_news field to separate field_image field.
 * 
 * Should execute it only one time.
 * Don't forget rebuild cache after executing.
*/

USE u1005861_upr;

INSERT node__field_image
(
	bundle,
	deleted,
	entity_id,
	revision_id,
	langcode,
	delta,
	field_image_target_id,
	field_image_alt,
	field_image_title,
	field_image_width,
	field_image_height
)
SELECT
	bundle,
	deleted,
	entity_id,
	revision_id,
	langcode,
	delta,
	field_image_news_target_id,
	field_image_news_alt,
	field_image_news_title,
	field_image_news_width,
	field_image_news_height
FROM
	node__field_image_news
WHERE bundle = 'news' and delta = 0;

DELETE FROM node__field_image_news
WHERE bundle = 'news' and delta = 0;

UPDATE node__field_image_news
SET delta = delta - 1
WHERE bundle = 'news' and delta <> 0;