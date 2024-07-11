import React, { Component } from "react";
import images from "../images";


// react class component
class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
     // render method used to return jsx in class component
        return(
            <div className="row mt-5 mb-4">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <h5>User-1</h5>
                            <img src={images ? images.photo1: ""} alt="no image" className="img-fluid rounded-circle" />
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus itaque natus     voluptatum dicta cum exercitationem quasi quidem eveniet magnam minus blanditiis recusandae  ducimus temporibus doloribus delectus sit ad, assumenda est.</p>
                        </div>
                    </div>
                </div> 
                <div className="col-md-3">
                <div className="card">
                        <div className="card-body text-center">
                            <h5>User-2</h5>
                            <img src={images ? images.photo2: ""} alt="no image" className="img-fluid rounded-circle" />
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus itaque natus     voluptatum dicta cum exercitationem quasi quidem eveniet magnam minus blanditiis recusandae  ducimus temporibus doloribus delectus sit ad, assumenda est.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                        <div className="card-body text-center">
                            <h5>User-3</h5>
                            <img src={images ? images.photo3: ""} alt="no image" className="img-fluid rounded-circle" />
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus itaque natus     voluptatum dicta cum exercitationem quasi quidem eveniet magnam minus blanditiis recusandae  ducimus temporibus doloribus delectus sit ad, assumenda est.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                        <div className="card-body text-center">
                            <h5>User-4</h5>
                            <img src={images ? images.photo4: ""} alt="no image" className="img-fluid rounded-circle" />
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus itaque natus     voluptatum dicta cum exercitationem quasi quidem eveniet magnam minus blanditiis recusandae  ducimus temporibus doloribus delectus sit ad, assumenda est.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment