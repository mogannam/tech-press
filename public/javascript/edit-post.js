async function editFormHandler(event) {
  event.preventDefault();
  //post-content-id
  //post-title-id
  const element = event.target
  const post_id = element.getAttribute("data-post-id")

  //const title = document.querySelector('input[name="post-title"]').value.trim();
  //const content = document.querySelector('input[name="post-content"]').value.trim();
  const title = document.querySelector(`#post-title-${post_id}`).value.trim();
  const content = document.querySelector(`#post-content-${post_id}`).value.trim();

  // const post_id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
const editBtns = document.querySelectorAll('.save-post-btn')

editBtns.forEach(aBtn => {
  aBtn.addEventListener('click', editFormHandler);
})