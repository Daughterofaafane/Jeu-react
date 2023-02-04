import React, {useState} from 'react';

export default function FormContact(){
    return(
        <form>
        <h2>Form Contact</h2>
        <div className='div1'>
            <input placeholder='Nom' type='text' required></input>
            <input type='tel' placeholder="Tel (xxx-xxx-xxxx)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minlength="10" maxLength="12" required></input>
            <span className='validity'></span>
        </div>
        <div className='div2'>
            <select>
                <option value="">Select</option>
                <option></option>
                <option></option>
            </select>
            <input type='email' placeholder="Email" required></input>
        </div>
            <textarea placeholder="Message"></textarea>
            <button>Submit</button>
    </form>
    
    )

}