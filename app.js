const showNew = document.querySelector('#show-new');

const content = `
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
Test Content
`

showNew.addEventListener('click', ()=>{
  console.log("clicked showNew")
  Intercom('showNewMessage', content)
})

