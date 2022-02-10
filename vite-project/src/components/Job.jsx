import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <Card>
        <div className="d-flex justify-content-between">
            <div>
                <Card.Title>
                    {job.name} - <span className="text-muted font-weight-light">{job.company}</span>
                </Card.Title>
                <Card.Subtitle>
                    {job.lastUpdated}
                </Card.Subtitle>
                {job.role}
                <Badge>{job.level}</Badge>
                <Card.Text>
                    <a href={job.url} target="_blank">
                    <Button
                        variant="primary"
                    >
                        Visit site
                    </Button>
                    </a>
                </Card.Text>
            </div>
        </div>
    </Card>
  )
}
