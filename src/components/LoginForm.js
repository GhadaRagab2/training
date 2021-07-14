import React, { useState} from "react";
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { Option } = Select;

const LoginForm = (props) => {
  // console.log("here wil recieve props => ", props);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    gender: "",
    skills: [{}],
    image: "",
    age: "",
  });
  console.log(details);
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
 
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <Form name="basic">
      <Form.Item
        label="Username"
        name="name"
        // "here ya ghada bykteb el email bta3ooooo ===> "
        // احفظهولي بالقديمه القديمه  هتلي كل ال موجود في ال deatils
        // { ...details, email: e.target.value }
        onChange={(e) => {
          // console.log(e.target.value);
          // setDetails({ ...details, name: e.target.value });
          // setDetails({date: moment, dateString: string});
          console.log('here you will see the value of (e)',e);
        }}
        value={details.name}
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
        value={details.email}
        onChange={(e) => {
          setDetails({ ...details, email: e.target.value });
        }}
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
        name="date-picker"
        label="DatePicker"
        {...config}
        // selected={ dueDate } 
        //  value={details.date}
        onChange={(e) => {
        
          console.log('hna el vlaue of (e)',e);
          // setDetails({ ...details, date: moment});
        }}
      >
        <DatePicker  defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
      </Form.Item>

      <Form.Item
        name="radio-group"
        label="Gender"
        onChange={(e) => {
          setDetails({ ...details, gender: e.target.value });
        }}
      >
        <Radio.Group>
          <Radio value="mail">Mail</Radio>
          <Radio value="femail">Femail</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="select-multiple"
        label="Skills"
        rules={[
          {
            required: true,
            message: "Please select your favourite colors!",
            type: "array",
          },
        ]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="Bootstrap"> Bootstrap </Option>
          <Option value="Javascript"> Javascript</Option>
          <Option value="React.js"> React.js </Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="upload"
        label=" Your CV"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
        onChange={(e) => {
          setDetails({ ...details, image: e.target.value });
        }}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[{ type: "number", min: 0, max: 99 }]}
        onChange={(e) => {
          setDetails({ ...details, age: e.target.value });
        }}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit"onClick={handleClick} >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
