import React from 'react';
import keyboard from "./KeyBoard.png";
import Naving from "./Naving";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Row>
	</Container>
	</Box>
);
};

function Webpage()
{
    return (
        <div>
            <div style={{display:"flex"}}>
                <img src={keyboard} style={{height:"100px"},{width:"100px"}}></img>
                <h1 style={{paddingLeft:"500px"}}>KEYBOARD</h1>
            </div>
            <Naving/>
            <Footer/>
        </div>
    );
}

export default Webpage;