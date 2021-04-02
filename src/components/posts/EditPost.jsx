import React, { useState, useEffect } from "react";
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

import {connect} from "react-redux";
import {updateCategory} from "../../redux/actions/category/category.action";
const EditPost = ({updateCategory,history,match,categoryData}) => {
  const [category, setCategory] = useState({
    categoryName: ""
  });
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  
  useEffect(()=>{
    setCategory({...category,categoryName:categoryData.categoryName})
  },[categoryData])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {id}=match.params;
    updateCategory(history,category,id)
  
  };

 
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Edit Post</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="text"
                  name="categoryName"
                  onChange={handleChange}
                  value={category.categoryName}
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>

              <Button type="submit">Update</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps=(state,ownProps)=>{
  const {id}=ownProps.match.params;
return{
  categoryData:state.category.data.find((cat)=>cat._id==id),
}
}

export default connect(mapStateToProps,{updateCategory})(EditPost);
