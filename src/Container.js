import { useState } from "react"
import "./Container.css"


  const Container=(props)=>{
    let arr=[1,2,3,4,5]
  return (

<div className="container">
      <div className="card">
            <div className="cr"><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg></div>
            <h1 className="header">How did we do?</h1>
            <div className="paragraph">
                  <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
             <div className="rate">
             {arr.map(el => 
                <button className='cr-num'
                onClick={(e)=>{[...e.target.parentElement.children].forEach(element=>{
                   if(e.target === element){

                      element.classList.toggle('dark')                                        
                     if (e.target.classList.contains('dark')){
                      props.setFinalScore(element.textContent)
                     }else{
                      props.setFinalScore(0)
                     }
                    
                      
                   }else {
                    element.classList.remove('dark')
                   }

                })}} 
                
                
                >{el}</button>)}
                  
      
              </div>
                  <button className="btn"onClick={()=>{  
                    if(props.finalScore>0){
                      props.setSwitchContainer (!props.switchContainer ) 
                    }

                
                  }}>SUBMIT</button>
       </div>
      
</div>

  )
  }

  export default Container;