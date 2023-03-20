import {useRouter} from 'next/router'

import { Input } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled, Tooltip } from "@nextui-org/react";
import { Link, Table } from "@nextui-org/react";
import { SearchIcon } from "/components/SearchIcon.js";
import { StyledBadge } from "/components/StyledBadge";
import { IconButton } from "/components/IconButton";
import { EditIcon } from "/components/EditIcon";


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

 


export default function ListAllCourses({data, courseList}) {


  //  const router = useRouter()

    const columns = [
        { name: "ID", uid: "id" },
        { name: "TITLE", uid: "title" },
        { name: "NFQ", uid: "nfq" },
        { name: "YEARS COURSE", uid: "courseyear" },
        { name: "EDIT GRADES", uid: "actions" },
      ];
      
      const renderCell = (course, columnKey) => {
        const cellValue = course[columnKey];
        switch (columnKey) {
          case "title":
            return (
                <Col>
                <Row>
                  <Text b size={14} css={{ tt: "capitalize" }}>
                    {cellValue}
                  </Text>
                </Row>
                <Row>
                  <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                    {course.desc}
                  </Text>
                </Row>
              </Col>
            );
          case "nfq":
            return (
              <Col>
                <Row>
                  <Text b size={14} css={{ color: "$accents7", "marginLeft": "10px" }}>
                    {cellValue}
                  </Text>
                </Row>
              </Col>
            );
          case "courseyear":
            return <StyledBadge css={{ "marginLeft": "30px" }} type={course.status}>{cellValue}</StyledBadge>;
    
          case "actions":
            return (
              <Row justify="center" align="center">
                <Col/>
                <Col css={{ d: "flex" }}>
                  <Tooltip content="Insert grades">
                    <Link href={`./viewAll?id=` +course.id}>
                    <IconButton onClick={() => console.log("Edit course", course.id)} css={{ "marginLeft": "20px" }}>
                      <EditIcon size={20} fill="#979797"/>
                    </IconButton>
                    </Link>
                  </Tooltip>
                </Col>
                <Col/>
              </Row>
            );
          default:
            return cellValue;
        }
      };  


  // Handle the submit for the form
  async function handleSubmit(event) {

      alert("Course clicked")
      event.preventDefault();

       /*    
       // grab the variables from the form.
       const id = document.querySelector('#id').value   
       const title = document.querySelector('#title').value 
       const nfq = document.querySelector('#nfq').value    
       const desc = document.querySelector('#desc').value 
       const courseyear = document.querySelector('#courseyear').value       
      
             
        // Get data from the form - make json
        const data = {
          id: event.target.id.value,
          title: event.target.title.value,
          nfq: event.target.nfq.value,
          desc: event.target.desc.value,
          courseyear: event.target.courseyear.value
        }
    */
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/listCourses'


    
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
      {/*Courses' Table */}
      <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            Header={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={courseList}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
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
    
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const courseList = await res.json()
   
    return {
      props: { courseList }, // will be passed to the page component as props
    }
  }