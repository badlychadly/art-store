import React from 'react'
import {Col, Input, Container} from 'reactstrap'


const AboutPage = (props) => {
    let value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum, deleniti ipsam magnam veritatis ratione exercitationem quisquam nulla quidem, eligendi reprehenderit. Velit debitis voluptates exercitationem, veniam unde aliquid perspiciatis adipisci?"
    return (
        <Container>
            <h3 className="text-white">About Artist</h3>
            {/* <textarea name="" id="" cols="90" rows="100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nihil quo soluta nisi, facilis, aperiam culpa voluptate cum temporibus natus laboriosam ut dolores obcaecati reiciendis laborum aspernatur, optio nemo voluptatum?</textarea> */}
            <Col className="text-dark" sm={10}>
                <Input type="textarea" name="text" id="exampleText" value={value} cols="100" rows="100" />
            </Col>
        </Container>
    )
}

export default AboutPage