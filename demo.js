let comments = [];
function like(e) {
  e.target.src = './img/heartred.svg';
  let countWrapper = document.querySelector('#likes-count');
  let count = parseInt(countWrapper.innerText);
  countWrapper.innerText = count + 1;
}
function comment() {
  let commentValue = document.querySelector('#new-comment-value').value;
  comments.push(commentValue);
  document.querySelector('#new-comment-wrapper').remove();
  showComments();
}
function showComments() {
  let wrapper = document.querySelector('#comments');
  wrapper.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {
    let comment = document.createElement('p');
    comment.innerText = comments[i];
    wrapper.appendChild(comment);
  }
  document.querySelector('#comments-count').innerText = comments.length;
}
function showCommentInputBox() {
  let wrapper = document.createElement('div');
  wrapper.id = 'new-comment-wrapper';
  wrapper.style = 'display:flex;';

  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'new-comment-value';

  let submit = document.createElement('button');
  submit.textContent = 'comment';
  submit.onclick = comment;

  wrapper.appendChild(input);
  wrapper.appendChild(submit);

  document.querySelector('.post-actions').appendChild(wrapper);
}
window.onload = showComments;
