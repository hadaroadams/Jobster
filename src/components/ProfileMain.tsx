import { useState } from "react";
import Wrapper from "../assets/wrappers/ProfileMain";
import DashInput from "./DashInput";
import { RootState, useAppDispatch } from "../store";
import { upDateUser } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";

export interface UserData<T> {
  name: T;
  email: T;
  lastName: T;
  location: T;
}

const ProfileMain = () => {
  const { isLoading, user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  const [userData, setUserdata] = useState<UserData<string>>({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const name = e.target.name as "name" | "email" | "lastName" | "location";
    setUserdata((e) => {
      e[name] = text;
      console.log(e);
      return e;
    });
    // dispatch()
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(upDateUser({ ...userData }));
  };
  return (
    <Wrapper>
      <h1>Profile</h1>
      <Form action="">
        <DashInput
          name="name"
          label="Name"
          type="text"
          value={userData.name}
          onChange={change}
          profile
        />
        <DashInput
          name="lastName"
          label="Last Name"
          type="text"
          value={userData.lastName}
          onChange={change}
          profile
        />
        <DashInput
          name="email"
          label="Email"
          type="text"
          value={userData.email}
          onChange={change}
          profile
        />
        <DashInput
          name="location"
          label="Location"
          type="text"
          value={userData.location}
          onChange={change}
          profile
        />
        <button onClick={onSubmit}>
          {isLoading ? "Changing" : "Save Change"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default ProfileMain;
