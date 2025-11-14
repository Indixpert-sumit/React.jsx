import React from 'react'


const Todolist = () => {
  return (
    <table border='2' style={{background:'#494545ff'}}>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">To do list</h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2" style={{paddingRight:'180px'}} />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{marginLeft:'10px'}}>Add to item</button>


        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item"> <img src="https://img.icons8.com/?size=32&id=cL95UuXTO0nU&format=png" alt="" width='20px' />Learn HTML CSS and Javascript <button class="btn btn-secondary" type="submit" style={{marginLeft:'80px'}}>Remove</button><br />
          </li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px'  style={{marginRight:'10px'}}/>Learn React <button class="" type="submit" style={{marginLeft:'210px'}}>Remove</button></li>
          <li class="list-group-item"><img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px'  /> Create Projects <button class="" type="submit" style={{marginLeft:'190px'}}>Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Upload on Github <button class="" type="submit" style={{marginLeft:'170px'}}>Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Create Resume <button class="" type="submit" style={{marginLeft:'190px'}}>Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Apply for job<button class="" type="submit" style={{marginLeft:'210px'}}>Remove</button></li>

        </ul>

      </div> 
    </div>
    </table>
  )
}
 
  
export default Todolist
