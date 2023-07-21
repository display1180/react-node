const mongoose = require('mongoose');

const postShema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
	},
	{ collection: 'Posts' }
);

const Post = mongoose.model('Post', postShema);
module.exports = { Post };
