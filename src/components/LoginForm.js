import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <Form name="basic" onSubmit={submitHandler}>
      <Form.Item
        label="Username"
        name="email"
        onChange={(e) => {
          console.log(
            "here ya ghada bykteb el email bta3ooooo ===> ",
            e.target.value
          );
          setDetails({ ...details, email: e.target.value });
        }}
        value={details.email}
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
        value={details.password}
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

    //   <form onSubmit={submitHandler}>
    //       <div className="form-inner">
    //         <h2>Login</h2>
    //         {/*ERROR*/}
    //         <div className="form-group">
    //             <label htmlFor="name">Name:</label>
    //             <input type="text" name="name" id="name" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} />
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="email">E-mail:</label>
    //             <input type="email" name="email" id="email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email} />
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="Password">Password:</label>
    //             <input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} />
    //         </div>
    //         <input type="submit" value="LOGIN"/>
    //       </div>
    //   </form>
  );
}
export default LoginForm;
