import React from 'react'
import { Spacer, Grid,  Card, Row, Text, Link, styled, Image} from "@nextui-org/react";



const Sliderbar = () => {
    
    return (
        
        <Grid.Container justify="left" css={{"width":"100%","marginLeft": "100px"}} > 
      <Grid  alignItems="center">
        <Col css={{"width":"100%","marginTop": "20px"}}>
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
      </Grid.Container>   
)};

export default Sliderbar