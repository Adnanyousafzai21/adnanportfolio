// "use client";

// import React from "react";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

// export function ThreeDCardDemo() {
//     return (
//         <CardContainer className="inter-var">
//             <CardBody className="border border-[green]">
//                 <CardItem
//                     translateZ="50"
//                     rotateX={10}
//                     rotateZ={-5}
//                     className="w-full overflow-hidden flex items-center justify-center overflow-hidden" // Adjusted height to be relative to viewport
//                 >
//                     <img
//                         src={"/images/adnan5.jpeg"}
//                         alt="thumbnail"
//                         className="h-auto w-full object-cover rounded-xl"
//                     />
//                 </CardItem>
//             </CardBody>
//         </CardContainer>
//     );
// }

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo() {
    return (
        (<CardContainer className="inter-var">
            <CardBody
                className="relative group/card  w-full  h-auto rounded-xl  w-full ">
                <CardItem translateZ="10" rotateX={1} className="w-full ">
                    <img
                        src={"/images/adnan5.jpeg"}
                        height="1000"
                        width="1000"
                        className="h-[300px] md:h-[400px]  md:w-[500px] object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail" />
                </CardItem>
            </CardBody>
        </CardContainer>)
    );
}
