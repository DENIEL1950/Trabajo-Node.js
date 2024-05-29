import { Component } from "react";

let namesp = ["Daniel","Julio","Lalo","Marcelo"];

class StringComponent extends Component {
    render() {
        const ArrayNames = namesp.map((name, index) => <li key={index}>{name}</li>); // Añadir una key única
        return (
            <ul>
                {ArrayNames}
            </ul>
        );
    }
}

export default StringComponent;
