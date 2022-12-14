const Header = {
  render: () => {
    return /*html*/ `
<header class="header d-flex align-items-center justify-content-between">
  <div class="header-left col-3 order-2 order-xl-1">
    <div class="header-left__logo col-xl-12">
      <img src="./assets/img/Group 155.png" alt="" class="img-fluid" />
    </div>
  </div>
  <div class="header-middle col-xl-4 col-sm-2 order-3 order-xl-2">
    <form
      class="header-middle__form-search d-sm-flex justify-content-between align-items-center col-10 d-none ">
      <input
        type="text"
        class="search-input border-0"
        placeholder="Search Blog" />
      <div class="search-button mb-1">
        <img
          src="./assets/img/Combined-Shape.png"
          class="img-fluid"
          alt="" />
      </div>
    </form>
    <div class="search-button-responsive d-xl-none">
      <img
        src="./assets/img/Combined-Shape.png"
        class="img-fluid"
        alt="" />
    </div>
  </div>
  <div class="header-right col-xl-6 d-flex justify-content-end order-1 order-xl-3">
    <button class="header-right__menu-toggle-btn d-sm-none border-0 bg-white">
      <img src="./assets/img/Group 188.png" alt="" class="img-fluid" />
    </button>
    <ul class="menu d-sm-flex d-none align-item-center">
      <li>
        <button class="menu__top"><span>Top</span></button>
      </li>
      <li>
        <div class="menu__create-blog">Create Blog</div>
      </li>
      <li>
        <div class="my-profile d-xl-flex gap-4">
          <div class="my-profile__name">my name</div>
          <div class="my-profile__avatar">
            <img src="./assets/img/avatar.png" alt="" class="img-fluid" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</header>`;
  },
  afterRender: () => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener("scroll", () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos && currentScrollPos > 100) {
        document.getElementsByClassName("header")[0].style.top = "-120px";
      } else {
        document.getElementsByClassName("header")[0].style.top = "0";
      }
      prevScrollpos = currentScrollPos;
    });
  },
};

export default Header;
