import { FC, ReactElement } from "react";
import "app/styles/elements/Submit.scss";
import { Form, Input, Row, Col } from "antd";

const { TextArea } = Input;
const Submit: FC = (): ReactElement => {
  return (
    <div className="submit">
      <h1 className="submit-title">What can us do for you?</h1>
      <p className="submit-content">
        We are ready to work on a project of any complexity,
        <br></br>
        whether it’s commercial or residential.
      </p>
      <Form className="form">
        <Row>
          <Col span={5}>
            <Input
              type="text"
              className="input-name input"
              placeholder="Your Name"
            />
          </Col>
          <Col span={5}>
            <Input
              type="text"
              className="input-Email input"
              placeholder="Email*"
            />
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <Input
              type="text"
              className="input-Reason input"
              placeholder="Reason for Contacting*"
            />
          </Col>
          <Col span={5}>
            <Input
              type="text"
              className="input-Phone input"
              placeholder="Phone"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <TextArea
              rows={4}
              className="input-Message"
              placeholder="Message"
            />
          </Col>
        </Row>
      </Form>
      <p className="submit-warning">* indicates a required field</p>
      <button className="submit-btn">Submit</button>
    </div>
  );
};
export default Submit;
