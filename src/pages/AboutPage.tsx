import { Button, Form, Input } from "antd";
import useAppStore from "../store/appStore";

const AboutPage = () => {
  const { setUser } = useAppStore();
  const handleSubmit = (values: any) => {
    console.log("Success:", values);

    setUser(values.name, values.age, values.gender);
  };
  return (
    <div>
      <Form className="w-[300px] p-4! m-4! shadow-lg" onFinish={handleSubmit}>
        <Form.Item name={"name"}>
          <Input placeholder="Enter Your Name" />
        </Form.Item>
        <Form.Item name={"age"}>
          <Input placeholder="Enter Your Age" />
        </Form.Item>
        <Form.Item name={"gender"}>
          <Input placeholder="Enter Your Gender" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AboutPage;
