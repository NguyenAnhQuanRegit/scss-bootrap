import BreadCumb from "../components/bread-crump";
import Header from "../components/Header";
import Post from "../components/Post";
import RelatedPost from "../components/RelatedPost";
const PostDetailPage = {
  render: () => {
    return /*html*/ ` <div class="container-fluid">
        <div>${Header.render()}</div>
        <div class="outlet">
         ${BreadCumb.render("Detail Blog")}
          <section>
            ${Post.render()}
          </section>
          <section>
            ${RelatedPost.render()}
          </section>

        </div>
        
        
    </div>`;
  },
  afterRender: () => {
    Header.afterRender();
  },
};

export default PostDetailPage;
