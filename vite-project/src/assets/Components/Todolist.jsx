import React from 'react'

const Todolist = () => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">To do list</h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add to item</button>


        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item"> <img src="https://img.icons8.com/?size=32&id=cL95UuXTO0nU&format=png" alt="" width='20px' />Learn HTML CSS and Javascript <button class="btn btn-secondary" type="submit">Remove</button>
          </li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Learn React <button class="btn btn-secondary" type="submit">Remove</button></li>
          <li class="list-group-item"><img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' /> Create Projects <button class="btn btn-secondary" type="submit">Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Upload on Github <button class="btn btn-secondary" type="submit">Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Create Resume <button class="btn btn-secondary" type="submit">Remove</button></li>
          <li class="list-group-item"> <img src="https://img.icons8.com/?size=60&id=78597&format=png" alt="" width='20px' />Apply for job<button class="btn btn-secondary" type="submit">Remove</button></li>

        </ul>

      </div> 
    </div>
  )
}

export default Todolist
//  Todolist/>
//       <Profile name='sumit' email='Techcoder098@gmail.com' phone='99887356653' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vBz9VgjksAaZZkWOm8Lk3ZSb7gO25eP0-Q&s' />
//       <Profile name='akash' email='Techcoder098@gmail.com' phone='99887356653' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vBz9VgjksAaZZkWOm8Lk3ZSb7gO25eP0-Q&s' />
//       <Avatar img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vBz9VgjksAaZZkWOm8Lk3ZSb7gO25eP0-Q&s' />
    