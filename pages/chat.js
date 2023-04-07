import { Input, Textarea } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon.js";

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

  

export default function chat() {


  
  // Handle the submit for the form
  async function handleSubmit(event) {

    
      event.preventDefault();

        
        // Get data from the form - make json
        const data = {
          username: event.target.username.value,
          comment: event.target.comment.value,
        }
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        alert(JSONdata);
    
        // API endpoint where we send form data.
        const endpoint = '/api/saveChat'


    
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
        
        alert("server response" + result);


  }    


  async function callChatPage(){

     // Form the request for sending data to the server.
     const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: '',
    }

    
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch('/api/getChat', options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    
    // stick the response into the chat window

    console.log("chat page result: " + JSON.stringify(result));
    console.log(result.username);

    document.getElementById('chatLog').value = result.username + " says: " + result.content;
  


  }

  //run the interval hook

  setInterval(() => {
    console.log('Interval triggered');

    callChatPage();
  


    //end interval hook
  }, 10000);


    
  return (
    
 <Container css={{"height": "950px", "background-repeat": "no-repeat", "background-size": "auto", "backgroundImage": "url(/img/blackSky.jpg)"}}>  
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
     {/*sliderbar*/}
     <Grid.Container gap={2} justify="center" > 
      <Grid  alignItems="center">
        <Col css={{"width":"100%","marginTop": "0px"}}>
              <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
                  name="Patrick Doe"
                  description="Computer Science Lecturer - Phd"
                  size="xl"
                />
            </Card.Header>
            <Card.Body css={{ marginLeft: "40px" }}>
              <Text>
                Hi there!
              </Text>
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card css={{ p: "$6", mw: "400px", $$cardColor: '$colors$primary' }}>
          <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Diane Ravitch"
                  description="History Lecturer - Phd"
                  size="xl"
                />
            </Card.Header>
            <Card.Body>
              <Text>
                  Sometimes the most brilliant and intelligent minds do not 
                  shine in standardized tests because they do not have 
                  standardized minds.
              </Text>
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
                <User
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  name="Jennifer Anderson"
                  description="IT Technical Support"
                  size="xl"
                />
            </Card.Header>
            <Card.Body>
              <Text>
                "The beautiful thing about learning is that no one can take it away
                from you." (B.B. King)
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Grid>
      {/*Feed */}    
      <Grid xs={7} >
      <Grid.Container gap={0}>
      <Grid xl >
        <Card >
          <Card.Header>
              <User
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  name="Diane Ravitch"
                  description="History Lecturer - Phd"
                  size="xl"
                />
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
          <Spacer y={2} />
          <Row justify="flex-end">
          <Card variant="bordered" css={{ p: "$6", mw: "400px", $$cardColor: '$colors$primary', }}>
            <Card.Body >
              <Text weight="bold">
                Diane says: Hi Jennifer! 
              </Text>
            </Card.Body>
          </Card>
          </Row>
          <Spacer y={2} />
          <Card variant="bordered" css={{ p: "$6", mw: "400px", $$cardColor: '$colors$secondary' }}>
            <Card.Body >
              <Text weight="bold">
                Jennifer says: Hi Diane! How can I help you?
              </Text>
            </Card.Body>
          </Card>
          <Row justify="flex-end">
          <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Body >
          <Textarea css={{ p: "$6", mw: "400px"}} 
            size="xl" 
            label=""
            status="primary"
            id="chatLog"
            />
          </Card.Body>
          </Card>
          </Row>
           </Card.Body>
          <Card.Footer css={{ margin: "auto"}}>
          <Row justify="flex-end">
            <Spacer y={1.5}/>
            <form onSubmit={handleSubmit}>
              Username:
              <Input size="xl" id="username" status="primary"  labelPlaceholder="" initialValue=""  css={{"width":"100%","marginTop": "0px"}}/>
              <Spacer y={1.6}/>
              Your message:
              <Input size="xl" id="comment" status="primary"  labelPlaceholder="" initialValue=""  css={{"width":"100%","marginTop": "0px"}}/> 
              <Button type="submit" auto css={{"width":"100%", "marginTop": "20px"}} >Send</Button>
            </form>
          </Row>            
          </Card.Footer>    
        </Card>
      </Grid>
      </Grid.Container>
      </Grid>
    </Grid.Container> 
  </Container>  

  )
}


export async function getServerSideProps() {
    
    const res = await fetch(`http://localhost:3000/api/saveChat`)
    const data = await res.json()

       
    return {
      props: { data }, // will be passed to the page component as props
    }

    
  }