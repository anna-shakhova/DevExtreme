import * as React from 'react';
import { ContextMenu } from 'devextreme-react/cjs/context-menu';
import Menu from "devextreme-react/menu";
import { Template } from "devextreme-react";
import Example from '../examples/example-block';
import service from "./data1.js";
import "./styles.css";

const products = service.getProducts();
const MenuItemComponent = ({ data }) => {
    return <span>{data.name}</span>;
};

const items = [{
    text: 'root',
    items: [
        { text: "sub 1", template: "myTemplate" },
        { text: "sub 2", template: "myTemplate" },
        { text: "sub 3", template: "myTemplate" },
        { text: "sub 4", template: "myTemplate" },
        { text: "sub 5", template: "myTemplate" },
        { text: "sub 6", template: "myTemplate" },
        { text: "sub 7", template: "myTemplate" },
    ]
}];

const renderItem = (item) => {
    return <div>{item.text}</div>;
};

export default (): React.ReactElement | null => (
    <Example title="Playground">
        <div>
            <div id="target">right-click here</div>
            <ContextMenu target="#target" items={items}>
                <Template
                    name="myTemplate"
                    render={renderItem}
                />
            </ContextMenu>
        </div>
        <div className={'form'}>
            <div>
                <div className={'label'}>Catalog:</div>
                <Menu
                    dataSource={products}
                    displayExpr="name"
                    orientation={"horizontal"}
                    hideSubmenuOnMouseLeave={true}
                    itemComponent={MenuItemComponent}
                />
            </div>
        </div>
    </Example>
);
