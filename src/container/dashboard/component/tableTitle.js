import React from "react"
import TitleImage from "../../../static/images/title-img.png";

const Index = () => {
    return (
        <div class="d-flex gap-2 align-items-center title-column">
            <div><img width="36" src={TitleImage} alt="no-product" /></div>
            <div>
                <span class="title-content">Sliding Cellar Six Bottle In Cabinet Wine Rack</span>
                <div class="d-flex title-details">
                    <div class="d-flex grid-column-gap-2 pe-2"><span>SKU: <strong><a href="#">B07NNTER97</a></strong></span></div>
                    <div class="d-flex grid-column-gap-2  pe-2"><span>FNSKU:<strong>NB07NNTER97</strong></span></div>
                    <div class="d-flex grid-column-gap-2"><span>ASIN:<strong>NB07NNTER97</strong></span></div>
                </div>
            </div>
        </div>
    );
}
export default Index;