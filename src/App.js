import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });

  const Login = (details) => {
    console.log(details);
    if ( details.email === adminUser.email && details.password === adminUser.password) {
      console.log("logedin");
      setUser({
        email: details.email,
        password:details.password
      });
    } else {
      console.log("details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email: ""});
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login}/>
      )}
    </div>
  );
}

export default App;

/* <div className="form">
<Form name="basic">
  <Form.Item
    label="Username"
    name="username"
    rules={[{ required: true, message: "Please input your username!" }]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: "Please input your password!" }]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    name="remember"
    valuePropName="checked"
    wrapperCol={{ offset: 8, span: 16 }}
  >
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
</div>
</div> */
