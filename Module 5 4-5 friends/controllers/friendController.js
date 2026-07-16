const friends = require("../models/friends");

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
  const filterGender = req.query.gender;
  const filterLetter = req.query.letter;

  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender === filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toLowerCase().startsWith(filterLetter.toLowerCase())
    );
  }

  if (matchingFriends.length > 0) {
    res.json(matchingFriends);
  } else {
    res.status(404).json({
      error: "No matching friends found",
    });
  }
};

const getInfo = (req, res) => {
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers.accept,
  });
};

const getFriendById = (req, res) => {
  const friendId = Number(req.params.id);

  if (isNaN(friendId)) {
    return res.status(400).json({
      error: "Friend ID must be a number",
    });
  }

  const friend = friends.find((friend) => friend.id === friendId);

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not found",
    });
  }
};

const updateFriend = (req, res) => {
  const friendId = Number(req.params.id);
  const updatedFriend = req.body;

  if (!updatedFriend.name || !updatedFriend.gender) {
    return res.status(400).json({
      error: "Name and gender are required",
    });
  }

  const friend = friends.find((friend) => friend.id === friendId);

  if (friend) {
    friend.name = updatedFriend.name;
    friend.gender = updatedFriend.gender;

    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend not found",
    });
  }
};

module.exports = {
  getAllFriends,
  filterFriends,
  getInfo,
  getFriendById,
  updateFriend,
};