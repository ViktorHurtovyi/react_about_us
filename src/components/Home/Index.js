import React from 'react'
import Menu from '../Menu/Index'
import {Grid} from "semantic-ui-react";
class Index extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column floated='right'>
                   <Menu />

                </Grid.Column>
            </Grid>
        )
    }
}
export default Index