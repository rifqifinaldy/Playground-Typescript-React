import { useState, useEffect, FC, PropsWithChildren } from "react";

type Props = {
  title: string;
};

const FunctionalComponent: FC<Props> = (props) => {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function addCounter(param: number): void {
    setCounter(param + 1);
  }

  function login() {
    setUser({
      firstName: "Rifqi",
      lastName: "Finaldy",
    });
  }

  function logout() {
    setUser({
      firstName: "",
      lastName: "",
    });
  }
  useEffect(() => {
    //   GET DATA FROM SERVER
  }, [JSON.stringify(user)]);

  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
      {counter} {user.firstName}-{user.lastName}
      <br />
      <button onClick={() => addCounter(counter)}>Tambah Counter</button>
      {user.firstName !== "" && <DataUser />}
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const DataUser: FC = () => {
  useEffect(() => {
    let condition = true;
    console.log("Mounted", condition);
    return () => {
      let condition = false;
      console.log("HILANG", condition);
    };
  }, []);

  return <div>Berhasil Login</div>;
};

export default FunctionalComponent;
