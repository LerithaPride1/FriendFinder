var friendData = require('../data/friends.js');
friendData;

module.exports = function(app) {

        app.get("/api/data/friends", function(req, res) {
            res.json(friends);
        });

        app.post("/api/friends", function(req, res) {
            var newFriend = req.body;

            for (var i = 0; i < newFriend.length; i++) {
                if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                    newFriend.scores[i] = 1;
                } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                    newFriend.scores[i] = 5;
                } else {
                    newFriend.scores[i] = parseInt(newFriend.scores[i]);
                }
            }

            var differences = [];
            //compares score to the friends in the friendData
            for(var i = 0; i < friend.length; i++) {
            	var comparedFriend = friendData[i];
            	//initial score is set to 0
            	var totalDifference = 0;
            	//math.abs returns the absolute value of the numbers in comparsion
            	for(var j = 0; j < comparedFriend.scores.length; j++) {
            		var differenceScore = Math.abs(comparedFriend.scores[i] - newFriend.scores[j]);
            		totalDifference += differenceScore;
 				}

 				differences[i] = totalDifference;
            }
            //new best friend is the user with the least differences
            var bestFriendNum = differences[0];
            var bestFriendIndex = 0;

            //to keep numbers from going less than zero
            for(var i = 1; i < differences.length; i++) {
            	if(differences[i] < bestFriendNum) {
            		bestFriendNum = differences[i];
            		bestFriendIndex = 1;

            	}
            }


            friendData.push(newFriend);

            res.json(friendData[bestFriendIndex]);

        })
    }