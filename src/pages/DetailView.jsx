import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from '../client';

const DetailView = () => {
    const { memberID } = useParams();

    // Old fields
    const [data, setData] = useState({});
    useEffect(() => {
        // setPosts(props.data);
        fetchMember();
    }, []);

    const fetchMember = async () => {
        try {
            const {data} = await supabase
            .from('crewmembers')
            .select()
            .eq('id', memberID);
            // set state of posts
            console.log(data[0]);
            setData(data[0]);
        } catch(error) {
            alert("Failed to fetch members");
        }
    }

    // New fields
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
    const updatePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('crewmembers')
          .update({name: member.name, color: member.color, age: member.age, description: member.description})
          .eq('id', memberID);
      
        window.location = "/gallery";
    }

    const deleteMember = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('crewmembers')
          .delete()
          .eq('id', memberID); 
      
        window.location = "/gallery";
    }

    return (
        <div className="detailView">
            {/* DISPLAY CURRENT INFO */}
            {/* <h1>{memberID}</h1> */}
            <div className="memberDescription">
                <h1>{data.name}</h1>
                <h3>Color: {data.color}, Age: {data.age}</h3>
                <p>Description: {data.description}</p>
            </div>

            {/* UPDATE INFO */}
            <div className="updateForm">
                <h2>Update Information:</h2>
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
                    <input type="submit" value="Submit" onClick={updatePost} />
                </form>
                <button className="deleteMember" onClick={deleteMember}>Delete Member</button>
            </div>
        </div>
    );
}

export default DetailView;