


import {useRouter} from 'next/router'

import { Input } from "@nextui-org/react";
import { Container, Navbar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const Styledimg = styled("img", {
  background: "transparent",
  border: "none",
});


export default function Login() {

  const router = useRouter()

  async function handleSubmit(event) {

    alert("The form was submitted");
    event.preventDefault();  // block default behaviour
 

    // grab the variables from the form.
    const name = document.querySelector('#username').value

    console.log("username is " + name);

    const pass = document.querySelector('#password').value

    console.log("password is " + pass);

    // send the data to the api page

          // Get data from the form.
          const data = {
            username: event.target.username.value,
            password: event.target.password.value,
          }
      
          // Send the data to the server in JSON format.
          const JSONdata = JSON.stringify(data)
      
          // API endpoint where we send form data.
          const endpoint = '/api/login'


      
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
          
         //alert(`server result: ${result}`)

         //  if we get back ok message, redirect to the next page.

         if(result.includes("ok")){

          alert("Result was OK!");
          router.push("/listAllCourses");
        }

       
  }


  return (

  <Container css={{"height": "844px", "background-size": "1500px", "backgroundImage": "url(https://littlevisuals.co/images/vik.jpg)"}}>  
       {/* Navbar Logo */}
      <Navbar variant = {"static"}>
        <Navbar.Content/>
        <Navbar.Content> 
          <Navbar.Link href="/">
            <Styledimg src="/img/logo.png" width={200} height={120} cursor="pointer" css={{"marginTop": "40px"}}/>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content/>
      </Navbar>
      {/*Login banner */}
      <Grid.Container justify="center" > 
      <Grid xs={12} sm={6} alignItems="center">
        <Col css={{"width":"100%"}}>
          <Text h1
                size={50}
                css={{color: "white", "textAlign": "center", "marginTop": "40px"
                }}
                weight="bold">Welcome!</Text>  
          <Text  h1
                size={45}
                css={{
                  textGradient: "50deg, $yellow600 -20%, $red600 100%", "textAlign": "center"
                }}
                weight="bold">Please Login</Text>    
        </Col>
      </Grid>    
      </Grid.Container>   
        {/*Login form */}
        <Grid.Container justify="center" >  
        <Row gap={0} justify="center">
          <Col/>
          <Col alignItems="center">
            <form onSubmit={handleSubmit}>
              <Input id="username" status="warning"  labelPlaceholder="Username" initialValue=""  css={{"width":"100%","marginTop": "50px"}}/>
              <Spacer y={1.2} />

              <Input id="password" status="warning" labelPlaceholder="Password" initialValue="" css={{"width":"100%","marginTop": "10px"}}/> 
              <Spacer y={0.5} />

              <Button type='submit' shadow color="warning" css={{"width":"100%","marginTop": "10px"}}>Login</Button>
              <Spacer y={0.5} />
            </form>
          </Col>  
          <Col/>
        </Row> 
        </Grid.Container>       
         {/*Footer */} 
         <Grid.Container justify="center" css={{ "marginTop": "200px"}}> 
         <Row gap={0} justify="center">
          <Col/>
          <Col alignItems="center">
          <Text color="warning" css={{"text-align": "center"}} size={15}>
           <a href="/"> Forgot your password? </a>
          </Text>  
          
          </Col>  
          <Col/>
        </Row>  
        </Grid.Container>       
  </Container>  
    
    
  )
}


