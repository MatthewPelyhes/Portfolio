const showNew = document.querySelector('#show-new');

const content = `
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
Lots of content incoming
`

showNew.addEventListener('click', ()=>{
  console.log("clicked showNew")
  Intercom('showNewMessage', content)
})

