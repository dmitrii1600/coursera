import React, {Component} from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetailComponent extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
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

    renderComments(comments) {
        if (comments != null) {
            const commentsLi = comments.map((comment) => (
                <li className="list-group-item" key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{`--${comment.author}, ${comment.date}`}</p>
                </li>
            ));
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-group">
                        {commentsLi}
                    </ul>
                </div>
            );
        } else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null)
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        else return (
            <div></div>
        );
    }
}

export default DishDetailComponent;