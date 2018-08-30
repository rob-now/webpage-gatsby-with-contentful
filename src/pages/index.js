import React, { Component, Fragment } from 'react'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'
import Hero from '../components/hero/Hero'
import WhatWeOffer from '../components/whatWeOffer/WhatWeOffer'

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
        <section id="hero">
          <Hero contentfulItems={contentfulItems} />
        </section>
        <section id="what-we-offer">
          <WhatWeOffer />
        </section>
      </Fragment>
    )
  }
}

export default IndexPage
