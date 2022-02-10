import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <Card>
        <div className="d-flex justify-content-between p-3.5">
            <div>
                <Card.Title>
                    {job.name} - <span className="text-muted font-weight-light">{job.company}</span>
                </Card.Title>
                <Card.Subtitle>
                    last updated {job.lastUpdated}
                </Card.Subtitle>
                {job.role}
                <Badge>{job.level}</Badge>
            </div>
            <div>
            <Card.Text>
                    <Button
                        variant="primary"
                        href={job.url}
                        target="_blank"
                    >
                        Visit site
                    </Button>
                </Card.Text>
            </div>
        </div>
    </Card>
  )
}
