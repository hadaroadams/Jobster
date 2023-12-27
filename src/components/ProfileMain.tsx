import { useState } from "react";
import Wrapper from "../assets/wrappers/ProfileMain";
import DashInput from "./dashInput"; "./DashInput";
import { useAppDispatch } from "../store";
import { upDateUser } from "../features/user/userSlice";

export interface UserData<T> {
  name: T;
  email: T;
  lastName: T;
  location: T;
}

const ProfileMain = () => {
  const dispatch = useAppDispatch();
  const [userData, setUserdata] = useState<UserData<string>>({
    name: "",
    email: "",
    lastName: "",
    location: "",
  });
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const name = e.target.name as "name" | "email" | "lastName" | "location";
    setUserdata((e) => {
      e[name] = text;
      console.log(e);
      return e;
    });
  };
  const onSubmit = () => {
    dispatch(upDateUser({ ...userData }));
  };
  return (
    <Wrapper>
      <h1>Profile</h1>
      <form action="">
        <DashInput
          name="name"
          label="Name"
          type="text"
          value=""
          onChange={change}
        />
        <DashInput
          name="lastName"
          label="Last Name"
          type="text"
          value=""
          onChange={change}
        />
        <DashInput
          name="email"
          label="Email"
          type="text"
          value=""
          onChange={change}
        />
        <DashInput
          name="location"
          label="Location"
          type="text"
          value=""
          onChange={change}
        />
        <button onClick={onSubmit}>Save Changes</button>
      </form>
    </Wrapper>
  );
};

export default ProfileMain;
