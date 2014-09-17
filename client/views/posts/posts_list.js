var postsData = [
	{ 
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		author: 'Sacha Greif',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		authoer: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});