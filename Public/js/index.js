/* fetch online data*/

/*url = "https://api.npoint.io/d7ca74b0495f028e497d"; //change data

$(document).ready(function () {
    $.getJSON(url, function (result) {
        $.each(result, function (i, post) {
            dom_elements = `
              <div class="post" id="post-${i}">
              <div class="post-top" id="top-${i}"">
              <div class="author-profile"><img src="./photos/account.png" alt="Account profile"><div class="author-name">${post.author_name}</div></div>
              <div>${post.create_time}</div>
              </div>
              <br>${post.post_content}
              <div class="like-button">
              <button>
              <img src="./photos/likebutton.jpg" alt=Like button">
              </button>
              </div>
              </div>
              `;

            $("#post_container").append(dom_elements);

            /*check if the post contains image*/
/*if (post.post_img) {
    $("#top-" + i).after(
        `<div class='post-image'> <img src="./photos/${post.post_img}" alt='post photo'></div>`
    );
}
});
});
});*/

$(document).ready(function () {
  $.getJSON("./json/posts.json", function (result) {
    $.each(result, function (i, post) {
      dom_elements =
        /*html*/
        `     <div class="post" id="post-${i}">
              <div class="post-top" id="top-${i}">
              <div class="author-profile"><img src="./photos/account.png" alt="Account profile"><div class="author-name">${post.author_name}</div></div>
              <div>${post.create_time}</div>
              </div>
              <br>${post.post_content}
              <div class="like-button">
              <button>
              <img src="./photos/likebutton.jpg" alt="Like button">
              </button>
              </div>
              </div>
              `;

      $("#post_container").append(dom_elements);

      /*check if the post contains image*/
      if (post.post_img) {
        $("#top-" + i).after(
          /*html*/
          `<div class='post-image'> <img src="./photos/${post.post_img}" alt='post photo'></div>`
        );
      }
    });
  });

  /* hides the user menu at first, but it can be seen if clicked on*/
  dropdown_menu = `<div id="menuContent">
    <p class="userMenu">John Doe</p>
    <p class="userMenu">john.doe@example.com</p>
    </div>`;
  $("#right_side").append(dropdown_menu);
  $("#menuContent").hide();

  /**if the user logo is clicked then it displays their info */
  $("#userButton").click(function () {
    $("#menuContent").toggle();
  });
});
