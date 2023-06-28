const posts = [
  {
    id: 'post-1',
    likes: 0,
    comments: [],
    imageUrl: 'https://i.ytimg.com/vi/KGyNF0gwcSc/maxresdefault.jpg',
    username: 'abhi_ram',
    location: 'Gudlavalleru, India',
    description: 'My Polytechnic college!!!',
  },
  {
    id: 'post-2',
    likes: 0,
    comments: [],
    imageUrl: 'https://i.ytimg.com/vi/q3CMcBsTvHw/maxresdefault.jpg',
    username: 'ram',
    location: 'AANM & VVRSR, India',
    description: 'A.A.N.M & V.V.R.S.R HIGH SCHOOL 2017 alumni',
  },
  {
    id: 'post-3',
    likes: 0,
    comments: [],
    imageUrl:
      'https://images.collegedunia.com/public/college_data/images/campusimage/15980063632.png',
    username: 'abhi',
    location: 'Vijayawada, India',
    description: 'Workshop',
  },
];

function getPost(id) {
  return posts.find(p => p.id == id);
}

function like(e, id) {
  let post = getPost(id);
  post.likes += 1;
  e.target.src = './img/heartred.svg';
  document.querySelector(`#${id} #likes-count`).innerText = post.likes;
}

function comment(id) {
  let post = getPost(id);
  let commentValue = document.querySelector(`#${id} #new-comment-value`).value;
  post.comments.push(commentValue);
  document.querySelector(`#${id} #new-comment-wrapper`).remove();
  showComments(id);
}

function showComments(id) {
  let post = getPost(id);
  let wrapper = document.querySelector(`#${id} #comments`);
  wrapper.innerHTML = '';
  for (let i = 0; i < post.comments.length; i++) {
    let comment = document.createElement('p');
    comment.innerText = post.comments[i];
    wrapper.appendChild(comment);
  }
  document.querySelector(`#${id} #comments-count`).innerText =
    post.comments.length;
}

function showCommentInputBox(id) {
  let wrapper = document.createElement('div');
  wrapper.id = 'new-comment-wrapper';
  wrapper.style = 'display:flex;';

  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'new-comment-value';

  let submit = document.createElement('button');
  submit.textContent = 'comment';
  submit.onclick = () => comment(id);

  wrapper.appendChild(input);
  wrapper.appendChild(submit);

  document.querySelector(`#${id} .post-actions`).appendChild(wrapper);
}

function generatePost(postData) {
  const post = document.createElement('div');
  post.id = postData.id;
  post.className = 'post';
  post.innerHTML = `
        <div class="post-header">
          <img src="./img/profile.svg" alt="profile icon">
          <div class="profile-info">
            <p>${postData.username}</p>
            <p>${postData.location}</p>
          </div>
        </div>
        <div class="post-content">
          <img src="${postData.imageUrl}" alt="post image">
        </div>
        <div class="post-actions">
          <img src="./img/like.svg" alt="like button" onclick="like(event, '${postData.id}')">
          <img src="./img/comments.svg" alt="comment button" onclick="showCommentInputBox('${postData.id}')">
        </div>
        <p>${postData.description}</p>
        <p>
          <span id="likes-count">${postData.likes}</span> Likes
        </p>
        <p>
          <span id="comments-count">${postData.comments.length}</span> Comments
        </p>
        <div id="comments"></div>
`;
  return post;
}

function generatePosts() {
  const feed = document.querySelector('#feed');
  for (let i = 0; i < posts.length; i++) {
    const postData = posts[i];
    const post = generatePost(postData);
    feed.appendChild(post);
    showComments(postData.id);
  }
}

window.onload = generatePosts;
