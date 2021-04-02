import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {
  getCategory,
  deleteCategory,
} from "../../redux/actions/category/category.action";
const ListPost = (props) => {
  const { getCategory, categoryData, deleteCategory, loading } = props;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            {loading ? (
              <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            ) : (
              <>
                <h2>List Posts</h2>
                <Link to="addPost" className="pl-5">
                  Add Post
                </Link>
                <Table striped>
                  <thead>
                    <tr>
                      <th>Catgeory Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData &&
                      categoryData.map((category) => {
                        return (
                          <tr key={category._id}>
                            <td>{category.categoryName}</td>
                            <td>
                              <Link to={`/editCategory/${category._id}`}>
                                <Button outline color="primary">
                                  Edit
                                </Button>
                              </Link>
                            </td>
                            <td>
                              <Button
                                outline
                                color="danger"
                                onClick={() => handleDelete(category._id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    categoryData: state.category.data,
    loading: state.category.loading,
  };
};

export default connect(mapStateToProps, { getCategory, deleteCategory })(
  ListPost
);
