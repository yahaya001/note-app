import React from 'react'
import Header from './Header';

function Create() {
  return (
    <div>
        <Header/>
      <h4> ADD NEW NOTE </h4>
      <div className='form-div'>
        <form>
            <textarea> </textarea>
            <button type='submit'>ADD NOTE</button>
        </form>
      </div>
    </div>
  )
}

export default Create;
