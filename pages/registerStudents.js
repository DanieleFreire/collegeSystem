import React from "react";
import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled, Tooltip } from "@nextui-org/react";
import { Link, Table } from "@nextui-org/react";
import { SearchIcon } from "/components/SearchIcon.js";

const Styledimg = styled("img", {
    background: "transparent",
    border: "none",
  });
  
  const collapseItems = [
      "Dashboard",
      "Courses",
      "Students",
      "Settings",
    ];

    
  
export default function registerStudents() {

    //get the course ID
     //if we want to redirect the user
     const router = useRouter()
    
    
    /**submit handler **/
    async function handleSubmit(event) {

    alert("The form was submitted");
    event.preventDefault();  // block default behaviour
     
    
    // grab the variables from the form.
    const fname = document.querySelector('#fname').value;
    
    console.log("firstname is " + fname);
    
    const lastname = document.querySelector('#lastname').value;
    
    console.log("lastname is " + lastname);
    
    const email = document.querySelector('#email').value;
    
    console.log("email is " + email);
    
    const address = document.querySelector('#address').value;
    
    console.log("address is " + address);
    
    const telephone = document.querySelector('#telephone').value;
    
    console.log("telephone is " + telephone);
    
    const enrolledin = document.querySelector('#enrolledin').value;
    
    console.log("enrolledin " + enrolledin);

    const module_enrolled = document.querySelector('#module_enrolled').value;
    
    console.log("module_enrolled " + module_enrolled);
    
    
    // Get data from the form - make json.
    const data = {
        fname: event.target.fname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        address: event.target.address.value,
        telephone: event.target.telephone.value,
        enrolledin: event.target.enrolledin.value,
        module_enrolled: event.target.module_enrolled.value,
    }
      
          
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
    
      // API endpoint where we send form data.
      const endpoint = '/api/registerNewStudents'
    
    
    
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
    
      
    
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
    
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
    
      //  if we get back ok message, redirect to the next page.
      if(result.includes("ok")){

        alert("Result was OK!");
        router.push("/listAllCourses");
      }
    
    }


    return(
    
    <Container css={{"height": "950px", "background-size": "auto",  "background-repeat": "no-repeat", "backgroundImage": "url(/img/blackSky.jpg)"}}> 
      {/* Navbar */}  
      <Navbar variant = {"static"}>
        <Navbar.Brand> 
            <Navbar.Toggle aria-label="toggle navigation" />
                <Styledimg src="/img/logo.png" width={100} height={60} cursor="pointer" css={{"marginTop": "10px", "marginLeft": "10px"}}/>
            </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/listAllCourses">Courses</Navbar.Link>
          <Navbar.Link href="/registerStudents">Register Students</Navbar.Link>
          <Navbar.Link href="/viewAllGrd">View Grades</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                "marginLeft": "50px",
                w: "70%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  lecturer@mytudublin.ie
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
      <Spacer y={1.5} />
      {/*Login banner */}
      <Grid.Container justify="center" > 
      <Grid xs={12} sm={6} alignItems="center">
        <Col css={{"width":"100%"}}>
          <Text h1
                size={40}
                css={{color: "white", "textAlign": "center", "marginTop": "30px"
                }}
                weight="bold">Please Register Students Here</Text>   
        </Col>
      </Grid>    
      </Grid.Container> 
    {/*Student's Form */}
    <Grid.Container justify="center" >  
        <Row gap={0} justify="center">
          <Col/>
          <Col alignItems="center">
            <form onSubmit={handleSubmit}>
              <Input size="xl" id="fname" status="primary"  labelPlaceholder="First Name" initialValue=""  css={{"width":"100%","marginTop": "50px"}}/>

              <Input size="xl" id="lastname" status="primary"  labelPlaceholder="Last Name" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/> 

              <Input size="xl" id="email" status="primary"  labelPlaceholder="Email" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/> 

              <Input size="xl" id="address" status="primary"  labelPlaceholder="Address" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/> 
             
              <Input size="xl" id="telephone" status="primary"  labelPlaceholder="Telephone" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/> 
              
              <Input size="xl" id="enrolledin" status="primary"  labelPlaceholder="Course ID" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/>

               <Input size="xl" id="module_enrolled" status="primary"  labelPlaceholder="Module ID" initialValue=""  css={{"width":"100%","marginTop": "40px"}}/>  
             
              <Button type='submit' shadow color="primary" css={{"width":"100%","marginTop": "10px"}}>Register</Button>
            </form>
          </Col>  
          <Col/>
          <Spacer y={0.5} />
        </Row> 
        </Grid.Container>    
</Container> 
  ) 



}
export async function getServerSideProps() {
    
    const res = await fetch(`http://localhost:3000/api/registerNewStudents`)
    const studentList = await res.json()
   
    return {
      props: { studentList }, // will be passed to the page component as props
    }
  }








/*import { Grid, Card, Text, Container } from "@nextui-org/react";
import { Input, Button, Row } from "@nextui-org/react";


import {useRouter} from 'next/router'



export default function registerStudents() {
  const router = useRouter()
  


  // Handle the submit for the form
  async function handleSubmit(event) { 

       alert("The form was submitted");
       event.preventDefault();
    

       // grab the variables from the form.
       const firstname = document.querySelector('#fname').value;

       console.log("firstname is " + fname);

       const lastname = document.querySelector('#lastname').value;

       console.log("lastname is " + lastname);

       const email = document.querySelector('#email').value;

       console.log("email is " + email);

       const address = document.querySelector('#address').value;

       console.log("address is " + address);

       const telephone = document.querySelector('#telephone').value;

       console.log("telephone is " + telephone);

       const enrolledin = document.querySelector('#enrolledin').value;

       console.log("enrolledin " + enrolledin);

       
           


        // Get data from the form - make json.
        const data = {
          firstname: event.target.fname.value,
          lastname: event.target.lastname.value,
          email: event.target.email.value,
          address: event.target.address.value,
          telephone: event.target.telephone.value,
          enrolledin: event.target.enrolledin.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    

      //Send the data to the server side.  
        // API endpoint where we send form data.
        const endpoint = '/api/registerNewStudents'


        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }

        
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`server result: ${result}`)

        // redirect based on the result
      if(result.includes("ok")){
 
        router.push("/");
      }
    
  }
  
  
  return (
    <>
 <form onSubmit={handleSubmit}> 
    <Container xs={650} gap={2} >
      <Row gap={1}>
        
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body >
            <Grid justify='center' xs={12} md={6} >       
            <Text  h4 color="red" size={20} css={{ m: 20 }}>
              REGISTRATION
            </Text>
            </Grid>
            </Card.Body>
          </Card> 
        </Row>   
       
        <Row gap={1}>
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>

              <Input clearable label="firstname" placeholder="firstname"  id='fname'/>
            </Card.Body>
          </Card>
      </Row>
      <Row gap={1}>
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>

              <Input clearable label="lastname" placeholder="lastname"  id='lastname'/>
            </Card.Body>
          </Card>
      </Row>
      <Row gap={1}>
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>

              <Input clearable label="Email" placeholder="Email Address" id="email" />
            </Card.Body>
          </Card>
      </Row>  
      <Row gap={1}>
       
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>

              <Input clearable label="Address" placeholder="Address"  id="address" />
            </Card.Body>
          </Card>
      </Row>    
      <Row gap={1}>
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>

              <Input clearable label="Telephone" placeholder="(123) 456-7890" id="telephone" />
            </Card.Body>
          </Card>
      </Row>      
     
      <Row gap={1}>
        
          <Card css={{ $$cardColor: 'none' }}>
            <Card.Body>
        <Input.Password
          clearable
          initialValue="123"
          type="password"
          label="Password"
          placeholder="Enter your password with eye"
          id="password"/>
            
            </Card.Body>
          </Card>

      
      </Row>
      
      <Row gap={1}>
        
          <Card css={{  $$cardColor: 'none'  }}>
            <Card.Body>

            <Button auto css={{ background: 'darkgreen', color: 'white' }}  type="submit">
               Register Student
              </Button>   
            </Card.Body>
          </Card>

      
      </Row>
     
    </Container>

    </form> 
  
    </>
  )
}*/