async function commentFormHandler(event) {
  event.preventDefault();
  const element = event.target
  const post_id = element.getAttribute("data-post-id")
 

  const comment_text = document.querySelector(`#comment-body-${post_id}`).value.trim();
  // const post_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  //const post_id = document.querySelector('#comments').getAttribute("data-post-id")

  console.log(`psot_id ${post_id}`)
  console.log(`comment_text ${comment_text}`)


  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

const btns = document.querySelectorAll('.comment-btn')

btns.forEach(aBtn => {
  aBtn.addEventListener('click', commentFormHandler);
})
