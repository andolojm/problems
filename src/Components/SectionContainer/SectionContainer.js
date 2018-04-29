import React from 'react'
import { connect } from 'react-redux'
import Section from '../Section/Section'

const mapStateToProps = (state, ownProps) => ({
  sections: state.section.byId
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ sections }) => (
    <div id="section-container">
      {sections.map(it => <Section key={it.id} id={it.id} />)}
    </div>
  )
)