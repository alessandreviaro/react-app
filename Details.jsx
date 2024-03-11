import { useEffect, useState } from "react";
import { Users } from "../../../data";
import { Link, useParams } from "react-router-dom"

const Details = () => {
    const parameters = useParams();

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        const { id } = parameters;
        
        const result = Users.find((user) => user.id === id);

        if(!result) {
            setUser(null);
            return;
        }

        setUser(result)
    }, [parameters]);


    return (
        <div>
            <h1>Details</h1>
            {user === null && (
                <h2>User not found</h2>    
            )};
            {user && (
                <div>
                    <img src={user.image.src} alt={user.image.alt} />
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                </div>
            )};
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Details;