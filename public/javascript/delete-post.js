async function deleteFormHandler(event) {
  event.preventDefault();

  // const id = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  const element = event.target
  const post_id = element.getAttribute("data-post-id")
 

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

//document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
const btns = document.querySelectorAll('.delete-post-btn')

btns.forEach(aBtn => {
  aBtn.addEventListener('click', deleteFormHandler);
})
