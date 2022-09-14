const Comment = {
  render: () => {
    return /*html*/ `
    <div>
      <div class="comment-post-title">
          <h4 class="">Comment</h4>
      </div>
      <div class="type-row d-flex align-items-center gap-3">
        <div class="type-row__avatar flex-shrink-0"><img class="img-fluid" src="./assets/img/avatar2.png"/></div>
        <div class="type-row__input flex-grow-1"><input type="text" /></div>
      </div>
      <div class="list-comment-row d-flex gap-3 mt-5 mb-5">
        <div class="list-comment-row__avatar flex-shrink-1"><img class="img-fluid" src="./assets/img/avatar2.png"/></div>
        <div class="list-comment-row__text flex-grow-1">
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
