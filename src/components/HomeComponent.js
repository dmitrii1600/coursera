import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseURL";
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return (
            <Loading/>
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else
        return (
            <div className="col-12 col-md m-1">
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card className="h-100">
                        <CardImg src={baseUrl + item.image} alt={item.name}/>
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );

}

function Home(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
                <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                <RenderCard item={props.leader}/>
            </div>
        </div>
    );
}

export default Home;