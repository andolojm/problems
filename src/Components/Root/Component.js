import React from 'react'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import SectionContainer from '../SectionContainer/SectionContainer'
import DevUtils from '../DevUtils/DevUtils'

export default () => (
  <div>
    <Header />
    <SectionContainer />
    <Modal />
    {(process.env.NODE_ENV === 'development') && (<DevUtils />)}
  </div>
)