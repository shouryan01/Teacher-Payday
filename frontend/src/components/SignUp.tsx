import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const { Title } = Typography;

function SignUp() {
  const navigate = useNavigate();

  return (
    <div style={{justifyContent: 'center', height: '100vh'}}>
      <Title>Sign Up As:</Title>
      <div className="site-card-wrapper">
        <Row gutter={16} justify='center'>
          <Col span={8}>
          <Card
            hoverable
            style={{
              width: 300,
              height: 400,
              margin: "50px",
              borderRadius: "20px",
              overflow: "hidden"
            }}
            cover={<img alt="student" src="https://i.ibb.co/0hR6DZL/student.png" />}
            onClick={() => navigate("/studentsignup")}
          >
            <Meta title="Student" />
          </Card>
          </Col>
          <Col span={8}>
          <Card
            hoverable
            style={{
              width: 300,
              height: 400,
              margin: "50px",
              borderRadius: "20px",
              overflow: "hidden"
            }}
            cover={<img alt="investor" src="https://i.ibb.co/txqHQhQ/investor.png" />}
            onClick={() => navigate("/login")}
          >
            <Meta title="Investor" />
          </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUp;