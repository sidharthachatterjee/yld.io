import React from 'react'
import styled from 'styled-components'
import { Row, Col, Grid } from 'react-styled-flexboxgrid'
import { H1, H5, Paragraph } from '../Typography'
import { Padding } from 'styled-components-spacing'
import { format } from 'date-fns'

const EventBorder = styled(Col)`
  border: 1px solid rgba(51, 51, 51, 0.15);
`

const EventSection = ({ specialty }) => (
  <Grid className="grid">
    <Padding top={6} bottom={6}>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <H1>{`Upcoming ${specialty.title} events`}</H1>
        </Col>
        <Col md={6} sm={12} xs={12}>
          {specialty.events
            .filter(({ startTime }) => new Date(startTime) > new Date())
            .map(event => (
              <EventBorder key={`${event.id}`}>
                <Padding top={2} bottom={2}>
                  <Row>
                    <Col>
                      <img
                        src={`https://${specialty.eventIcon.file.url}`}
                        alt={specialty.eventIcon.title}
                      />
                    </Col>
                    <Col>
                      <H5 bold noMargin>
                        <a
                          href={event.linkToEvent}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.eventTitle}
                        </a>
                      </H5>
                      <Paragraph noMargin>
                        {format(new Date(event.date), 'MMMM DD[,] dddd')}
                      </Paragraph>
                    </Col>
                  </Row>
                </Padding>
              </EventBorder>
            ))}
        </Col>
      </Row>
    </Padding>
  </Grid>
)
export default EventSection