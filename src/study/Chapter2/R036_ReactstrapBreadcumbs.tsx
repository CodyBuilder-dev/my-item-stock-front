import React from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

function R036_ReactstrapBreadcrumbs() {
    return (
        <div id={"top"}>
            <Breadcrumb tag={"nav"} listTag={"div"}>
                <BreadcrumbItem tag={"a"} href={"#top"}>Go Top</BreadcrumbItem>
                <BreadcrumbItem tag={"a"} href={"#bottom"}>Go Bottom</BreadcrumbItem>
            </Breadcrumb>
            <div id={"bottom"} style={{marginTop:"1000px"}}>
                <span>bottom</span>
            </div>

        </div>
    );
}


export default R036_ReactstrapBreadcrumbs;
