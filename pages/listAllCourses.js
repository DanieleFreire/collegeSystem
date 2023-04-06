import { Input } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled, Tooltip } from "@nextui-org/react";
import { Link, Table } from "@nextui-org/react";
import { SearchIcon } from "/components/SearchIcon.js";
import { StyledBadge } from "/components/StyledBadge";
import { IconButton } from "/components/IconButton";
import { EditIcon } from "/components/EditIcon";
import { DeleteIcon } from "/components/DeleteIcon";



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

 


export default function ListAllCourses({courseList}) {


 
    const columns = [
        { name: "ID", uid: "id" },
        { name: "TITLE", uid: "title" },
        { name: "NFQ", uid: "nfq" },
        { name: "DURATION", uid: "courseyear" },
        { name: "EDIT COURSE", uid: "actions" },
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
            return <StyledBadge type={course.status}>{cellValue}</StyledBadge>;
    
          case "actions":
            return (
              <Row justify="center" align="center" css={{ "marginRight": "0px" }}>
                <Col/>
                <Col css={{ d: "flex" }}>
                  <Tooltip content="Insert grades">
                    <Link href={`./listAllModules?id=` +course.id}>
                    <IconButton onClick={() => console.log("Edit course", course.id)} css={{ "marginRight": "10px" }}>
                      <EditIcon size={20} fill="#979797"/>
                    </IconButton>
                    </Link>
                  </Tooltip>
                </Col>
                <Col css={{ d: "flex" }}>
                <form onSubmit={handleSubmit}>
                <input type="hidden" id='id' value={course.id}></input>
                <Tooltip
                  content="Delete course"
                  color="error"
                  onClick={() => console.log("Delete user", course.id)}>
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
                </form>
            </Col>
              </Row>
            );
          default:
            return cellValue;
        }
      };  


  // Handle the submit for the form
  async function handleSubmit(event) {

    alert("Course deleted!")
    event.preventDefault();
  
         
     // grab the variables from the form.
     const id = document.querySelector('#id').value
           
           
      // Get data from the form - make json
      const data = {
        id: event.target.id.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/deleteCourse'
  
  
  
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
    
 <Container css={{"height": "950px","background-repeat": "no-repeat", "background-size": "auto",  "backgroundImage": "url(/img/blackSky.jpg)"}}>  
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
  )
}


export async function getServerSideProps() {
    
    const res = await fetch(`http://localhost:3000/api/listCourses`)
    const courseList = await res.json()
   
    return {
      props: { courseList }, // will be passed to the page component as props
    }
  }