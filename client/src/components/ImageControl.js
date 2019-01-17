import React from 'react'
import { Container  } from 'reactstrap';



const ImageControl = ({picture, children}) => {
    let classname
    let total = 0
    let width = 0
    let height = 0
    if (!!picture) {
        width = parseInt(picture.width)
        height = parseInt(picture.height)
        total = (height - width)
    }
    if (total < 100) {
        classname = ""
    } else if (((total > 100) && (total < 200))) {
        classname = "imageControl-md"
    } else {
        classname = "imageControl"
    }
    return (
        <Container className={classname}>
            {children}
        </Container>
    )
}

export default ImageControl