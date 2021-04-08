import logo from './logo.svg';
import './App.css';
import Quote from './components/home/home'
import ReactRouter from "./components/router"

function App() {
  return (
    <>
    <ReactRouter />


    </>
  );
}
export default App;

// import React, { useState } from 'react'
// import ""
// import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
// import emailjs from 'emailjs-com';
// import Recaptcha from 'react-recaptcha';
// import Navigation from '../../Navigation/Nav'
// import Footer from '../../Components/Footer/Footer';


// function Quote(props) {
//   const [state, setState] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     services: "",
//     business: "",
//     baseline: "",
//     colors: "",
//     functionality: "",
//     budget: "",
    
    
    
    
//   })
  
//   const [isVerified, setisVerified] = useState(false);


//   function recaptchaLoaded() {
//     console.log('captchaloaded ')
//   }

//   function sendEmail(e) {
//     e.preventDefault();
//     if (isVerified) {
//       emailjs.sendForm('service_6a1w0fm', 'template_35owy09', e.target, 'user_DD5luoPlR6xCb4LSCWcKb')
//         .then((result) => {
//           console.log(result.text);
//         }, (error) => {
//           console.log(error.text);
//         });
//       e.target.reset()
//     } else {
//       alert('Verify if human')
//     }
//   }

//   function handleChange(e) {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     })
//   }

//   function verifyCallback(response) {
//     if (response) {
//       setisVerified({
//         isVerified: true
//       })
//     }
//   }

//   return (
//     <>
//       <div className="ContactPageContainer">
//         <div className="ContactHeaderContainer">
//           <div className="ContactHeaderContainerImage">

//             {/* <img className="headerImg" src={header} alt=""/> */}
//             <Navigation />
//           </div>

//         </div>
//         <div className="contactInfo">
//           <Container>
//             <h2 className="contactTitle">Get in <strong>touch</strong> with us!</h2>
//             <Row className="contactBoxes">
//               <Col sm={{ size: 'auto', offset: 1 }}>
//                 <div className="contactInfo">
//                   <i className="fa fa-mobile" aria-hidden="true"></i>
//                   <p>407-272-0238</p>
//                   <p>404-453-2978</p>
//                 </div>
//               </Col >
//               <Col sm={{ size: 'auto', offset: 1 }}>
//                 <div className="contactInfo">
//                   <i className="fa fa-globe" aria-hidden="true"></i>
//                   <p>Orlando, Fl</p>

//                 </div>
//               </Col>
//               <Col sm={{ size: 'auto', offset: 1 }}>
//                 <div className="contactInfo">
//                   <i className="fa fa-envelope" aria-hidden="true"></i>
//                   <p>alan@ebms.live</p>
//                   <p>rosie@ebms.live</p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>

//         </div>
//         <div className="quoteContainer">
//           <Container className="quoteContainer" id="get-quote">
//             <Form className="quoteWrapper" onSubmit={sendEmail}>
//               <Row form>
//                 <Col md={6}>
//                   <FormGroup>
//                     <Label for="firstName">First Name</Label>
//                     <Input type="text"
//                       name="firstName"
//                       placeholder="First Name"
//                       value={state.firstName}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//                 <Col md={6}>
//                   <FormGroup>
//                     <Label for="lastName">Last Name</Label>
//                     <Input type="text"
//                       name="lastName"
//                       placeholder="Last Name"
//                       value={state.lastName}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="phone">Phone Number</Label>
//                     <Input type="tel"
//                       name="phone"
//                       placeholder=""
//                       value={state.phone}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>

//                     <Label for="services">Services Needed </Label>
//                     <Input type="select" name="services"
//                       multiple
//                     >
//                       <option> Social Media Marketing</option>
//                       <option> Social Media Page Management</option>
//                       <option> Business Plan Development</option>
//                       <option> Online Marketing</option>
//                       <option> Email Marketing</option>
//                       <option> Website Development</option>
//                       <option> Mobile App Development</option>
//                     </Input>
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="businessIdea">Info About Business</Label>
//                     <Input type="textarea" name="business"
//                       value={state.business}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="baseline">Three Websites You Like To Use As Baseline For Design</Label>
//                     <Input type="textarea" name="baseline"
//                       value={state.baseline}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="colors">Colors You Would Like To Use In Design</Label>
//                     <Input type="textarea" name="colors"
//                       value={state.color}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="functionality">Specific Functionality You Want in Website and App</Label>
//                     <Input type="textarea" name="functionality"
//                       value={state.functionality}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row form>
//                 <Col md={12}>
//                   <FormGroup>
//                     <Label for="budget">What Is Your Budget?</Label>
//                     <Input type="textarea" name="budget"
//                       value={state.budget}
//                       onChange={handleChange} />
//                   </FormGroup>
//                 </Col>

//               </Row>
//               <Row form>
//                 <FormGroup>

//                   <Button className="quoteButton"
//                   >Get Quote</Button>

//                 </FormGroup>
//               </Row>
//               <Row form>
//                 <FormGroup>
//                   <Recaptcha
//                     sitekey="6Lc4bIUaAAAAAALS4MYFwa4zNC62UhTJPPd-isOC"
//                     render="explicit"
//                     onloadCallback={recaptchaLoaded}
//                     verifyCallback={verifyCallback}
//                   />
//                 </FormGroup>
//               </Row>
//             </Form>
//           </Container>
//         </div>
//       </div>

//       <Footer />
//     </>
//   )}
  
// export default Quote;

