import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from "reactstrap"

export default class CategoryList extends Component {

    state = {
        categories: []
    }


    componentDidMount() {
        this.getCategory();
    }

    getCategory = () => {
        fetch("https://my-json-server.typicode.com/ooguzyuksel/DB-Json-React/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));
    }

    render() {
        return (
            <div>
                <Button color="dark" size="lg" block disabled>{this.props.info.title}</Button>
                <ListGroup >
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem
                                active={category.categoryName === this.props.currenctCategoryName ? true : false}
                                onClick={() => this.props.changeCategory(category)}
                                key={category.id}
                                className="btn btn-outline-dark">
                                {category.categoryName}

                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
