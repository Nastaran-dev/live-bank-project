
  
 const _input = document.querySelectorAll('input')
 _input.forEach((inp)=>{
  inp.addEventListener('keyup' , (e)=>{
    if((e.code !=='Backspace') && (inp.value.length>=inp.maxLength)){
      const Next = document.getElementById(inp.dataset.next)
      if(Next) Next.focus()
    }
  if((e.code === 'Backspace') && (inp.value.length===0)){
    const prev = document.getElementById(inp.dataset.prev)
    if(prev) prev.focus()
  }
  })
 })

 document.querySelectorAll('[data-target]').forEach((btn)=>{
  btn.addEventListener('keyup' , ()=>{
    const targetId = btn.dataset.target
    const target = document.getElementById(targetId)
    target.textContent = btn.value || target.dataset.default || '####'
  })
 })

 

