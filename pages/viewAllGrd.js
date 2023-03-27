import { useRouter } from 'next/router'
import { Input } from "@nextui-org/react";
import { Container, Navbar, Dropdown, User, Avatar, Image, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid, styled, Tooltip } from "@nextui-org/react";
import { Link, Table } from "@nextui-org/react";
import { SearchIcon } from "../components/SearchIcon";
import { IconButton } from "../components/IconButton";
import { DeleteIcon } from "../components/DeleteIcon";

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


export default function viewAllGrd({data}) {
    const router = useRouter()

    const columns = [
      { name: "ID", uid: "gradeid" },
      { name: "Grade", uid: "grade" },
      { name: "StudentID", uid: "studentid" },
      { name: "DELETE", uid: "actions" },
   
    ];
  
    const renderCell = (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "gradeid":
          return (
            <User name={cellValue} css={{ p: 0 }}>
             {user.gradesid}
            </User>
          );
        case "grade":
          return (
            <Col>
              <Row>
                <Text b size={14} css={{ tt: "capitalize" }}>
                 {cellValue}
                </Text>
              </Row>
            </Col>
          );
        case "studentid":
          return (
            <Col>
              <Row>
                <Text b size={14} css={{ tt: "capitalize" }}>
                 {cellValue}
                </Text>
              </Row>
            </Col>
          );        
          
        case "actions":
          return (
            <Row justify="center" align="center" >
              <Col css={{ d: "flex" }}>
              <form onSubmit={handleSubmit}>
              <input type="hidden" id='gradeid' value={user.gradesid}></input>
              <Tooltip
                  content="Delete item"              
                  color="error"
                  onClick={() => console.log("Delete item", user.gradesid)}
                    >
                  <IconButton type='submit' >
                    <DeleteIcon size={20} fill="red" />
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

      alert("Grade deleted!")
      event.preventDefault();

           
       // grab the variables from the form.
       const gradeid = document.querySelector('#gradeid').value
             
             
        // Get data from the form - make json
        const data = {
          gradeid: event.target.gradeid.value,
        }
  
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/deleteGrade'


    
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



      // Handle the submit for the form
    async function handleSubmitCheckout(event) {

        alert("The form was submitted");
        event.preventDefault();
   

      // grab the variables from the form.
      const userid = document.querySelector('#userid').value;

      console.log("userid is " + userid);

               


       // Get data from the form - make json.
       const data = {
         userid: event.target.userid.value,
       }
   
       // Send the data to the server in JSON format.
       const JSONdata = JSON.stringify(data)
   

     //Send the data to the server side.  
       // API endpoint where we send form data.
       const endpoint = '/api/saveGrade'


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
 
        router.push("/viewAllGrd");
      }

  
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
        {/* Table */}

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
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={data}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    <Grid.Container gap={2} >
       
      <Grid justify='flex-end'xs={12} md={6}>
      <div>
          <form onSubmit={handleSubmitCheckout}>
          <input type="hidden" id='userid' value={35}></input>
      <Button auto type="submit"  
            src="/listAllCourses">
               See Courses
              </Button>
      </form>
      </div>
      </Grid>
     
    </Grid.Container>   
    </Container>       
    )
}
  
  
  
export async function getServerSideProps(context) {
    
    const res = await fetch(`http://localhost:3000/api/grade`);
    const data = await res.json()
    console.log("Student list is:" + data)
   
    return {
      props: { data }, // will be passed to the page component as props
    }
}