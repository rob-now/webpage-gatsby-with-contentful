import React, { Component } from 'react'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'
import Hero from '../layouts/Hero'

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

    return <Hero contentfulItems={contentfulItems} />
  }
}

export default IndexPage
