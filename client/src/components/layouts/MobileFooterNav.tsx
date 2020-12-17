import '../../styles/footer/MobileFooterNav.scss'

import React, { useContext } from 'react'


import { AuthContext } from '../../contexts/subContexts/AuthContext';



import SignedInFooterLinks from './footerNavLinks/SignedInFooterLinks'
import SignedOutFooterLinks from './footerNavLinks/SignedOutFooterLinks'








function MobileFooterNav() {

  const { userData } = useContext(AuthContext)

  const link = userData ? <SignedInFooterLinks/> : <SignedOutFooterLinks/> ;
  return (
    <div id="myMobileFooterNav" className="container hide-on-large-only">
      { link }
    </div>
  )
}

export default MobileFooterNav
