// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import './footer.css'

// export default function App() {
//   return (
//     <div className='mainfooter'>
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
//       <div className='footer'>
//         {/* <div>
//           <span>Get connected with us on social networks:</span>
//         </div> */}

//         <div>
//           {/* <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='facebook-f' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='twitter' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='google' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='instagram' />
//               <a href="https://github.com/manvishah17">Portfolio</a>
//           </a> */} 
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='linkedin' />
//           </a>
//           <a href='https://github.com/manvishah17' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='github' />
//           </a>
//         </div>
//       </div>

//       <section className='fot'>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon color='light' icon='gem' className='me-3' />
//                 Company name
//               </h6>
//               <p>
//                Welcome to the amazing world of books -BOOKWORLD
//               </p>
//             </MDBCol>

//             <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Angular
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   React
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Vue
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Laravel
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Orders
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon color='secondary' icon='home' className='me-2' />
//                 New York, NY 10012, US
//               </p>
//               <p>
//                 <MDBIcon color='secondary' icon='envelope' className='me-3' />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
//               </p>
//               <p>
//                 <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//     </div>
//   );
// }
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import logo from "../../assets/circles1.png";

const Footer = () => {
  return (
    <MDBFooter  className="foot">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              {/* <img src={logo} alt="Book Store App" height="50px" /> */}
              <strong>BookWorld</strong>
            </h6>
            <p>
              Welcome to experience the amazing wolrd of books -BOOKWORLD
            
              </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Products</strong>
            </h6>
            <p>
              <a href="#">BookWorld</a>  <br/>
              <a href="https://github.com/manvishah17">GitHub</a> <br/>
              <a href="">Linkedin</a> <br/>
              <a href="">Instagram</a> <br/>
              <a href="">Facebook</a> <br/>
            </p>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <p>
              <i className="fa fa-envelope mr-3" /> manvishah2003@gmail.com
            </p>
            
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Made by
              <a href=""> Manvi Shah</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
              
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
