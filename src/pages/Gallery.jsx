import { useState, useEffect } from 'react';
import { supabase } from '../client'
import Card from '../components/Card';

const Gallery = () => {

    const [members, setMembers] = useState([]);
    useEffect(() => {
        // setPosts(props.data);
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const {data} = await supabase
            .from('crewmembers')
            .select()
            .order('created_at', { ascending: true });
            // set state of posts
            setMembers(data);
        } catch(error) {
            alert("Failed to fetch members");
        }
    }

    // const displayMembers = () => {
    //     return members.map((member) => (
    //         <li>{member.name}</li>
    //     ))
    // }

    return (
        <div>
            <ul className='gallery-container'>
                {members && members.length > 0 ?
                members.map((member,index) => 
                   <Card id={member.id} key={member.id} name={member.name} color={member.color} age={member.age} description={member.description}/>
                // <li>{member.id}</li>
                ) : <h2>{'No Members Yet'}</h2>}
            </ul>
        </div>
    );
}

export default Gallery;