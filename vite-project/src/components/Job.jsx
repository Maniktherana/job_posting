import React from 'react'
// import { Card, Badge } from 'react-bootstrap' 
import { NextUIProvider } from '@nextui-org/react'
import { useTheme, Button, Input, Spacer, Text, createTheme, styled, Card, Divider, Row, Link } from '@nextui-org/react'

export default function Job({ job }) {

    const darkTheme = createTheme({
        type: "dark",
        theme: {
          colors: {}
        }
      })

  return (
        <NextUIProvider theme={darkTheme}>
            <div className="d-flex justify-content-between py-3 px-2">
                <Card hoverable borderWeight css={{ width: '40em' }}>
                    <Card.Header>
                        <h4>{job.name} - <span className="text-muted font-weight-light">{job.company}</span></h4>
                    </Card.Header>
                    <Divider/>
                    <Card.Body css={{ py: '$10', px: '$10' }}>
                        <div className="flex justify-content">
                            <Row justify="space-between">
                                <Text>
                                    {job.role}, {job.level} <br /> {job.location}
                                </Text>
                                <Link href={job.url} target="_blank">
                                    <Button variant="primary" size="sm">
                                        Visit site
                                    </Button>
                                </Link>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </NextUIProvider>
  )
}

/**
 * <Card className="m-3">
                <div className="d-flex justify-content-between py-3 px-2">
                    <div className="w-full px-3">
                        <Card.Title>
                            {job.name} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle>
                            last updated {job.lastUpdated}
                        </Card.Subtitle>
                        {job.role}, {job.level} <br /> {job.location}
                    </div>
                    <div>
                    <Card.Text>
                            <Button
                                variant="primary"
                                href={job.url}
                                target="_blank"
                                className="w-full"
                            >
                                Visit site
                            </Button>
                        </Card.Text>
                    </div>
                </div>
            </Card>
 */