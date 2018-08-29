import React, { Component, Fragment } from 'react'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

class IndexPage extends Component {
  state = {
    contentfulItems: [],
  }

  componentDidMount() {
    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    })

    client
      .getEntries()
      .then(res => {
        this.setState({
          contentfulItems: res.items,
        })
      })
      .catch(err => err.message)
  }

  render() {
    const { contentfulItems } = this.state

    return (
      <Fragment>
        <Hero contentfulItems={contentfulItems} />
      </Fragment>
    )
  }
}

export default IndexPage
