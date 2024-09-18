import { useContext, useState } from "react";
import { User, UserContext } from "./UserContextProvider";

export default function Person(props: User) {
  const [personBio, setPersonBio] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  };

  const { users, updateUser, addUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>This person {props.isMarried ? "is married" : "is single"}.</p>

      <p>
        {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
      </p>
      <p> Country of Origin: {props.country}</p>
      <input onChange={handleChange} />
    </div>
  );
}
