import { useState } from 'react';
import { supabase } from '../client';


const CreateMember = () => {

    const [member, setMember] = useState({name: "", color: "", age: 0, description: ""})
    const handleChange = (event) => {
        const {name, value} = event.target;
        setMember( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // Save new member to database
    const createPost = async (event) => {
        event.preventDefault();
        
        try {
          await supabase
          .from('crewmembers')
          .insert({name: member.name, color: member.color, age: member.age, description: member.description})
          .select();
      
            alert("Crew member added");
            setMember({name: "", color: "", age: 0, description: ""});

            window.location = "/gallery";  
        } catch(error) {
            alert("Oops! Something went wrong with that query, let's try again!");
        } 
      }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="age">Age</label><br />
                <input type="number" id="age" name="age" onChange={handleChange} />
                <br/>

                <label htmlFor="description">Description</label><br />
                <input type="text" id="description" name="description" onChange={handleChange} />
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>

            {/* <button onClick={handleCreate}>
                Create!
            </button> */}
        </div>
    );
}

export default CreateMember;