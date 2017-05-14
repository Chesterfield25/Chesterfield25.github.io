function VK.api("wall.post", {"message": "Hello!"}, function (data) {
alert("Post ID:" + data.response.post_id);
});