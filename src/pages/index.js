import React, { Component, Fragment } from 'react'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'
import Hero from '../components/hero/Hero'
import WhatWeOffer from '../components/whatWeOffer/WhatWeOffer'

class IndexPage extends Component {
  state = {
    contentfulItems: [],
    isFetching: false,
    error: null,
  }

  componentDidMount() {
    this.setState({
      isFetching: true,
    })

    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    })

    client
      .getEntries()
      .then(res => {
        this.setState({
          contentfulItems: res.items,
          isFetching: false,
        })
      })
      .catch(error =>
        this.setState({
          isFetching: false,
          error,
        })
      )
  }

  render() {
    const { contentfulItems, isFetching } = this.state

    return (
      <Fragment>
        <section id="hero">
          <Hero isFetching={isFetching} contentfulItems={contentfulItems} />
        </section>
        <section id="what-we-offer">
          <WhatWeOffer
            isFetching={isFetching}
            contentfulItems={contentfulItems}
          />
        </section>
      </Fragment>
    )
  }
}

export default IndexPage
