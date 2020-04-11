import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function RenderCard({item}) {

    return (
        <div className="col-12 col-md m-1" >
            <Card className="h-100">
                <CardImg src={item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <RenderCard item={props.dish}/>
                <RenderCard item={props.promotion}/>
                <RenderCard item={props.leader}/>
            </div>
        </div>
    );
}

export default Home;