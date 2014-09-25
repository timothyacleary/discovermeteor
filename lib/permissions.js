ownsDocument = function(userId, doc) {
	return doc && doc.userID === userId;
}