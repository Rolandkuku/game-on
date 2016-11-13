import React, {PropTypes as T} from "react";
import Login from "../containers/Login";
import Subscribe from "../containers/Subscribe";
import FlatButton from "material-ui/FlatButton";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
    margin: 12
};

export default class LogBox extends React.Component {
    render () {
        return (
            <Card>
                <CardTitle
                    title="Log Box" />
                <CardText>
                    {this.renderBox(this.props.authType)}
                </CardText>
                <CardActions>
                    <FlatButton
                        label="Switch auth type"
                        primary={true}
                        style={style}
                        onClick={this.props.onSwithAuthTypeClicked} />
                </CardActions>
            </Card>
        );
    }

    renderBox(authType) {
        if (authType === "login") {
            return <Login />;
        }
        return <Subscribe />;
    }
}

LogBox.propTypes = {
    authType: T.string.isRequired,
    onSwithAuthTypeClicked: T.func.isRequired
};
