INSERT INTO tb_category
	(id, name, uri, icon)
VALUES
	(1, 'Sleep', 'sleep', 'fc-sleep'),
	(2, 'Anxious', 'anxious', 'fc-anxious'),
	(3, 'Kids', 'kids', 'fc-kids');

INSERT INTO tb_author
	(id, name)
VALUES
	(1, 'Joseph Hans'),
	(2, 'Amara Vouls'),
	(3, 'Lana Li');

INSERT INTO tb_music
	(uuid, title, description, duration, image_Path, file_Path)
VALUES
	('55fe4859-7caa-46ee-8dd9-09428cfa9a84', 'Better Days', 'Slow ambient cinematic piece with a melancholic and sad feel. The minimalist guitar part is accompanied by soft strings.', 1800, NULL, 'https://www.bensound.com/bensound-music/bensound-betterdays.mp3'),
	('b9a13edf-1b3f-4d3d-aa43-c9620c53bd62', 'Sunny', 'Gentle acoustic royalty free music featuring guitar, marimba, glockenspiel and strings. This track has a nice cheerful mood that will be great for your videos.', 1800, NULL, 'https://www.bensound.com/bensound-music/bensound-sunny.mp3');
	
INSERT INTO tb_music_category
	(music_id, category_id)
VALUES
	(1, 1),
	(1, 2),
	(2, 3);
	
INSERT INTO tb_music_author
	(music_id, author_id)
VALUES
	(1, 2),
	(2, 1),
	(2, 3);