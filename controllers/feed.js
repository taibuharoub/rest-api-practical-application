exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "images/book.jpg",
        creator: {
          name: "Taibu",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  console.log(title, content);
  //Create post in db
  res.status(201).json({
    message: "Post created successfully",
    post: {
      _id: new Date().toDateString(),
      title: title,
      content: content,
      creator: { name: "Taibu" },
      createdAt: new Date()
    },
  });
};
