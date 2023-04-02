import {useRouter} from 'next/router'

import { Input, Textarea } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled, Tooltip } from "@nextui-org/react";
import { Link, Table } from "@nextui-org/react";
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


  //  const router = useRouter()

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
    


  // Handle the submit for the form
  async function handleSubmit(event) {

      alert("Course clicked")
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


    
  return (
    
 <Container css={{"height": "844px", "background-size": "1500px", "backgroundImage": "url(/img/blackSky.jpg)"}}>  
       {/* Navbar */}
      <Navbar variant = {"static"}>
        <Navbar.Brand> 
            <Navbar.Toggle aria-label="toggle navigation" />
                <Styledimg src="/img/logo.png" width={100} height={60} cursor="pointer" css={{"marginTop": "10px", "marginLeft": "10px"}}/>
            </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Dashboard</Navbar.Link>
          <Navbar.Link href="/listAllCourses">Courses</Navbar.Link>
          <Navbar.Link href="#">Students</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
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
                  <img
                  alt="nextui logo"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width="34px"
                  height="34px"
                />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
          <Spacer y={2} />
          <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                  <img
                  alt="nextui logo"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width="34px"
                  height="34px"
                />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
          <Spacer y={2} />
          <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                  <img
                  alt="nextui logo"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width="34px"
                  height="34px"
                />
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Next UI
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8" }}>nextui.org</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Grid>
      {/*Feed */}    
      <Grid xs={7} >
      <Grid.Container gap={0}>
      <Grid xl >
        <Card css={{ /*mw: "430px"*/ }}>
          <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm">Agree</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      </Grid.Container>
      </Grid>
    </Grid.Container>

  
         
  </Container>  

 /*  
 <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
       

      <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ mt: 0 }}>
        
              <tr> 
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>NFQ</td>
            <td>Year</td>
            
            </tr>
                        {data &&
                        courseList.map((item, i) => (
                        // print out the table from the JSON we got
                        // from the API
                       
                        
                        <form onSubmit={handleSubmit}>
                        <td><input type="hidden" id='id' value={item.id}></input></td>
                        <td><input type="hidden" id='title' value={item.title}></input></td>
                        <td><input type="hidden" id='desc' value={item.desc}></input></td>
                        <td><input type="hidden" id='nfq' value={item.nfq}></input></td>
                        <td><input type="hidden" id='courseyear' value={item.courseyear}></input></td>
                    
                               
                        <Input id='quantity' css ={{width: '120px', colorLabel: 'darkgreen', marginLeft: '20px', marginBottom: '10px'}}
                        defaultValue={1}
                        placeholder="quantity" 
                        type="number" 
                        />
                        <Button size="xs" type="submit" css ={{background: 'seagreen', color: 'white', marginLeft: '60px'}}  >Add to Cart </Button>
                        <Spacer y={1} />
                        <Button auto type="submit" css ={{background: 'darkgreen', color: 'white', marginLeft: '15px'}}  flat as={Link} href="/checkout">Go to Checkout </Button>
                        </form>
                        
                      
                        
                    
                        ))   
                        }
        
   
  
       
          
              // </Text>
            </Card.Body>
          </Card>





      </Grid>
    
    </Grid.Container>


   
    </>
*/
  )
}


export async function getServerSideProps() {
    
    const res = await fetch(`http://localhost:3000/api/saveChat`)
    const data = await res.json()
   
    return {
      props: { data }, // will be passed to the page component as props
    }
  }