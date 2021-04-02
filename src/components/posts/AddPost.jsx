import React, { useState } from "react";
import {connect} from "react-redux";
import {craeteCategory} from "../../redux/actions/category/category.action";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";


const AddPost = ({ history,craeteCategory }) => {
  const [category, setCategory] = useState({
    categoryName: ""
  });
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    craeteCategory(category,history)
  
  };
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Add Category</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Category</Label>
                <Input
                  type="text"
                  name="categoryName"
                  onChange={handleChange}
                  value={category.categoryName}
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>

              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(null,{craeteCategory})(AddPost);
