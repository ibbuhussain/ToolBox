-- If you have manually inserted data or if there were deletions, the auto-increment sequence might be out of sync.
-- You can reset the sequence using the following SQL command:

SELECT setval('table_id_seq', (SELECT MAX(id) FROM table));

-- The setval query to reset the sequence value is typically run separately from your regular application code and is executed directly in your PostgreSQL database.
-- Verify using below query.

SELECT currval('table_id_seq');


