import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

const NotFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Всё указывает на то, что такой страницы не существует."
    extra={
      <Link to={"/"}>
        <Button type="primary">На главную</Button>
      </Link>
    }
  />
);

export default NotFoundPage;
