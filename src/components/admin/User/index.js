import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Query } from "@apollo/react-components";
import Skeleton from "react-loading-skeleton";
import { GET_USERS } from "../../../client/query/user.js";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const User = props => {
  const [input, setInput] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  return (
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return <Skeleton count={5} />;
        if (error) return <p>{error.message}</p>;
        const { users } = data;
        return (
          <div className="container">
            <Card className="mt-5">
              <CardHeader>
                รายชื่อ
                <span className="float-right">
                  <Button size="sm" color="success">
                    เพิ่ม
                  </Button>
                </span>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>ชื่อผู้ใช้: </Label>
                    <Input
                      type="text"
                      value={input.username}
                      name="username"
                      required
                      placeholder="กรอกชื่อผู้ใช้"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>ชื่อ-สกุล: </Label>
                    <Input
                      type="text"
                      value={input.name}
                      name="name"
                      required
                      placeholder="กรอกชื่อผู้ใช้"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>อีเมล์: </Label>
                    <Input
                      type="email"
                      value={input.name}
                      name="email"
                      required
                      placeholder="กรอกอีเมล์"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>พาสเวิร์ด: </Label>
                    <Input
                      type="password"
                      value={input.name}
                      name="password"
                      required
                      placeholder="กรอกพาสเวิร์ด"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>พาสเวิร์ด: </Label>
                    <Input
                      type="password"
                      value={input.name}
                      name="password_confirmation"
                      required
                      placeholder="กรอกพาสเวิร์ดอีกครั้ง"
                    />
                  </FormGroup>
                  <Button type="submit" color="primary">
                    บันทึก
                  </Button>
                </Form>
              </CardBody>
              <Table striped hover bordered responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ขื่อ-สกุล</th>
                    <th>ชื่อผู้ใช้</th>
                    <th>อีเมล์</th>
                    <th>จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <ButtonGroup>
                          <Button size="sm" color="warning" onClick={() => {}}>
                            แก้ไข
                          </Button>
                          <Button size="sm" color="danger">
                            ลบ
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        );
      }}
    </Query>
  );
};

export default User;
