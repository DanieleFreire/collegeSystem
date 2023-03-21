

import { useRouter } from 'next/router'
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
  


export default function viewAll({data, id}) {

    //get the course ID
     //if we want to redirect the user
     const router = useRouter()

     //if we want to get a parameter from the URL such as the ID.
     const {cid} = router.query 
    

   
    const columns = [
        { name: "ID", uid: "studentid" },
        { name: "Grade", uid: "" },
        { name: "First Name", uid: "fname" },
        { name: "Last Name", uid: "lastname" },
        { name: "Email", uid: "email" },
        { name: "Address", uid: "address" },
        { name: "Telephone", uid: "telephone" },
        { name: "Enrolled in", uid: "enrolledin" },
      ];
      
    

    return(
    
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
     aria-label="table"
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
       { 
        data &&
        data.map((item, i) => (
            //print out the table from the JSON we got from the API
            <Table.Row key="1">
                <Table.Cell>{item.studentid}</Table.Cell>
                <Table.Cell>
                       
                    <Input size="xs" id={`grade_`+item.studentid} labelPlaceholder={`grade_`+item.studentid}/>
                        
                     <Button type="button" onClick={(save) => saveData(item.studentid, id)} bordered color="primary" size="xs">Save</Button>
                       
                </Table.Cell>    
                <Table.Cell>{item.fname}</Table.Cell> 
                <Table.Cell>{item.lastname}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.telephone}</Table.Cell>
                <Table.Cell>{item.enrolledin}</Table.Cell>       
            </Table.Row>
        ))     
       } 
     </Table.Body>
   </Table>
</Container> 
  ) 


/**submit handler **/
async function saveData(studentid, id) {

    let gradeValue = document.getElementById('grade_'+studentid).value;

    alert(studentid + " " + gradeValue + " " +id);

       
    
    // Get data from the form - make json
     const data = {
        studentid: studentid,
        grade: gradeValue,
        cid: id
    }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

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

    alert('saved');

}
}

export async function getServerSideProps(context) {
    
    let id = context.query.id;
    console.log("current id" + id);

    const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?studentid=`+id);
    const data = await res.json()
    console.log("Student list is:" + data)
   
    return {
      props: { data, id }, // will be passed to the page component as props
    }
  }