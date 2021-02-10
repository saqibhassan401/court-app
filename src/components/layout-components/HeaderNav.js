import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from './Logo';
import NavNotification from './NavNotification';
import NavProfile from './NavProfile';
import NavLanguage from './NavLanguage';
import NavPanel from './NavPanel';
import NavSearch  from './NavSearch';
import SearchInput from './NavSearch/SearchInput.js'
import { toggleCollapsedNav, onMobileNavToggle } from 'redux/actions/Theme';
import { NAV_TYPE_TOP, SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from 'constants/ThemeConstant';
import utils from 'utils'
import moment from "moment";

const { Header } = Layout;

export const HeaderNav = props => {
  const { navCollapsed, mobileNav, navType, headerNavColor, toggleCollapsedNav, onMobileNavToggle, isMobile, currentTheme } = props;
  const [searchActive, setSearchActive] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  const onSearchActive = () => {
    setSearchActive(true)
  }

  const onSearchClose = () => {
    setSearchActive(false)
  }

  const onToggle = () => {
    if(!isMobile) {
      toggleCollapsedNav(!navCollapsed)
    } else {
      onMobileNavToggle(!mobileNav)
    }
  }

  const isNavTop = navType === NAV_TYPE_TOP ? true : false
  const mode = ()=> {
    if(!headerNavColor) {
      return utils.getColorContrast(currentTheme === 'dark' ? '#00000' : '#ffffff' )
    }
    return utils.getColorContrast(headerNavColor)
  }
  const navMode = mode()
  const getNavWidth = () => {
    if(isNavTop || isMobile) {
      return '0px'
    }
    if(navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`
    } else {
      return `${SIDE_NAV_WIDTH}px`
    }
  }

  useEffect(() => {
     let currentDate = moment().format("DD MMM, YYYY");
    setCurrentDate(currentDate)
    if(!isMobile) {
      onSearchClose()
    }
  })


  return (
    <Header className={`app-header ${navMode}`} style={{backgroundColor: headerNavColor}}>
      <div className={`app-header-wrapper ${isNavTop ? 'layout-top-nav' : ''}`}>
         <Logo logoType={navMode}/>
        <div className="nav" style={{width: `calc(100% - ${getNavWidth()})`}}>
          <div className="nav-left">
            <NavProfile/>
          </div>
          <div className="nav-right">
            <p style={{marginTop:"30px",color:"rgba(139,160,133,1)"}}>{currentDate}</p>
            <ul className="ant-menu ant-menu-root ant-menu-horizontal">
              {
                isMobile ?
                    <li className="ant-menu-item ant-menu-item-only-child" onClick={() => {onSearchActive()}}>
                      <SearchOutlined />
                    </li>
                    :
                    <li className="ant-menu-item ant-menu-item-only-child" style={{cursor: 'auto'}}>
                      <SearchInput mode={mode} isMobile={isMobile} />
                    </li>
              }
            </ul>
            <NavNotification/>
            <NavLanguage />
            <NavPanel />
          </div>
          <NavSearch active={searchActive} close={onSearchClose}/>
        </div>
      </div>
    </Header>
  )
}

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, headerNavColor, mobileNav, currentTheme } =  theme;
  return { navCollapsed, navType, headerNavColor, mobileNav, currentTheme }
};

export default connect(mapStateToProps, {toggleCollapsedNav, onMobileNavToggle})(HeaderNav);
