import React, {Component} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle, Label, Modal, ModalBody,
    ModalHeader, Row
} from 'reactstrap';
import {Link} from "react-router-dom";
import {Control, Errors, LocalForm} from "react-redux-form";
import {Loading} from "./LoadingComponent";

function RenderDish({dish}) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card className="h-100">
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><h5>{dish.name}</h5></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({comments, dishId, addComment}) {
    if (comments != null) {
        const commentsLi = comments.map((comment) => (
            <li className="list-group-item" key={comment.id}>
                <p>{comment.comment}</p>
                <p>{`--${comment.author}, ${new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))}`}</p>
            </li>
        ));
        return (
            <div className="col-12 col-md-5 m-1 h-100">
                <h4>Comments</h4>
                <ul className="list-group">
                    {commentsLi}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    } else
        return (
            <div></div>
        );
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCommentsModalOpen: false,
        };
    }

    toggleCommentModal = () => {
        this.setState({
            isCommentsModalOpen: !this.state.isCommentsModalOpen,
        });
    };

    handleSubmit = (values) => {
        this.toggleCommentModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    };

    render() {
        return (
            <>
                <Button outline onClick={this.toggleCommentModal} className="m-3">
                    <span className="fa fa-pencil fa-lg mr-1"></span>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isCommentsModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                    <ModalBody className="m-3">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control" defaultValue="1">
                                    <option selected={true}>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                              placeholder="Your name"
                                              className="form-control"
                                              validators={{
                                                  required, minLength: minLength(3), maxLength: maxLength(15)
                                              }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be 3 characters or more. ',
                                        maxLength: 'Must be 15 characters or less. ',
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  rows="6"
                                                  placeholder="Comment text"
                                                  className="form-control"/>
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

const DishDetail = ({dish, comments, addComment, ...props}) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <RenderDish dish={dish}/>
                    <RenderComments comments={comments} dishId={dish.id} addComment={addComment}/>
                </div>
            </div>
        );
    else return (
            <div></div>
        );
};

export default DishDetail;