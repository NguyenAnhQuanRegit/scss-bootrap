const Comment = {
  render: () => {
    return /*html*/ `
    <div>
      <div class="comment-post-title">
          <h4 class="">Comment</h4>
      </div>
      <div class="type-row">
        <div class="type-row__avatar"><img class="img-fluid" src="./assets/img/avatar2.png"/></div>
        <div class="type-row__input"><input type="text" /></div>
      </div>
      <div class="list-comment-row mt-5 mb-5">
        <div class="list-comment-row__avatar"><img class="img-fluid" src="./assets/img/avatar2.png"/></div>
        <div class="list-comment-row__text">
          <div class="comment-name">Your Name</div>
          <p>Yes,it's right</p>
          <div class="comment-time">
            <div>30 phút trước</div>
            <div> Trả lời</div>
          </div>
        </div>
      </div>
    </div>
    `;
  },
};

export default Comment;
