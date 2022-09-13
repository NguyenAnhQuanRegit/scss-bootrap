const RelatedPost = {
  render: () => {
    return /*html*/ `
        <div>
            <div class="related-post-title">
                <h4 class="relative">Related</h4>
            </div>
            <div class="list-post">
                <div class="list-post__item">
                    <div><img class="img-fluid" src="./assets/img/cat.png"/></div>
                    <div class="list-post__title">Lorem ipsum dolor sit amet,  adipiscing elit.</div>
                </div>
                <div class="list-post__item">
                    <div><img class="img-fluid" src="./assets/img/cat.png"/></div>
                    <div class="list-post__title">Lorem ipsum dolor sit amet,  adipiscing elit.</div>
                </div>
                <div class="list-post__item">
                    <div><img class="img-fluid" src="./assets/img/cat.png"/></div>
                    <div class="list-post__title">Lorem ipsum dolor sit amet,  adipiscing elit.</div>
                </div>
                <div class="list-post__item">
                    <div><img class="img-fluid" src="./assets/img/cat.png"/></div>
                    <div class="list-post__title">Lorem ipsum dolor sit amet,  adipiscing elit.</div>
                </div>
            </div>
        </div>
    `;
  },
};

export default RelatedPost;
