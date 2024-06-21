const feed = document.querySelector(".feed");

const getUserById = (id) => {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  return fetch(URL).then((response) => response.json().then((data) => data));
};

const createPost = async (post) => {
  const wrap = document.createElement("div");
  const user = document.createElement("a");
  const article = document.createElement("div");

  wrap.className = "post";
  user.className = "user";
  article.className = "article";

  wrap.id = post.id;
  article.innerText = post.body;
  const userInfo = await getUserById(post.userId); // getUserById는 fetch 비동기함수를 포함
  // userInfo가 초기화되기 전에 다음코드 실행
  user.innerText = `@${userInfo.username}`;
  user.href = "./user.html";
  user.addEventListener("click", () => {
    localStorage.setItem("userId", post.userId);
  });

  // 보통 base.com/id/213 <- 이런 동적인 페이지 생성, 지금은 일단 페이지로 넘겨줌
  // 일반적으로 이런 문제를 해결하기 위해 서비스나 사이트의 규모가 커지고 복잡해질수록
  // React, Vue, 꼭 클라이언트 사이드가 아니더라도 다양한 프레임워크를 사용
  // 그래서 실제로는 쓰지 않는 방법이지만 다른 페이지에서 유저 정보를 가져와서
  // 또 다른 페이지를 구성하는 연습을 해보면 좋을 것 같긴해서 하는 것.
  // 여기서 우리는 로컬 스토리지를 써서 구현 할 것임

  wrap.append(user, article);
  feed.append(wrap);
  /*
        <div class="post">
            <a class="user" href="#">@user</a>
            <div class="article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quasi!
            </div>
        </div> 
    */
};

const getAllPosts = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  fetch(URL).then((response) =>
    response.json().then((data) => {
      data.forEach((post) => {
        createPost(post); //각각의 게시물 정보 화면에 그려주기
      });
    })
  );
};

if (feed) {
  getAllPosts();
}
