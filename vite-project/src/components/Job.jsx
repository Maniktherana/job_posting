import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <Card className="m-3">
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
  )
}
