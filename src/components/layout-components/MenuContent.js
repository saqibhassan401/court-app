import React from "react";
import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";
import IntlMessage from "../util-components/IntlMessage";
import Icon from "../util-components/Icon";
import navigationConfig from "configs/NavigationConfig";
import { connect } from "react-redux";
import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE } from "constants/ThemeConstant";
import utils from 'utils'
import { onMobileNavToggle } from "redux/actions/Theme";
import logout from "../../assets/icons/Iconly_Bold_Logout.png"
import { signOut } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;
const { useBreakpoint } = Grid;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const setDefaultOpen = (key) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};

const SideNavContent = (props) => {
    let history = useHistory();
	const { sideNavTheme, routeInfo, hideGroupTitle, localization, onMobileNavToggle } = props;
	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
	const closeMobileNav = () => {
		if (isMobile) {
			onMobileNavToggle(false)
		}
	}

	const signOutWeb = function (){
	    localStorage.clear()
	    history.push("/auth/login")
    }

  return (
    <Menu
      theme={sideNavTheme === SIDE_NAV_LIGHT ? "light" : "dark"}
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      defaultSelectedKeys={[routeInfo?.key]}
      defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
      className={hideGroupTitle ? "hide-group-title" : ""}
    >
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <Menu.ItemGroup
            key={menu.key}
          >
            {menu.submenu.map((subMenuFirst) =>
                <Menu.Item key={subMenuFirst.key} >
                  <img src={subMenuFirst.imgUrl}/>
                  <span style={{margin:"20px", fontSize:"18px",fontFamily:"Circular Std Book"}}>{setLocale(localization, subMenuFirst.title)}</span>
                  <Link onClick={() => closeMobileNav()} to={subMenuFirst.path} />
                </Menu.Item>
            )}
              <Menu.Item style={{marginTop:"70px"}} onClick={() => signOutWeb()}>
                  <img src={logout}/>
                  <span>Logout</span>
              </Menu.Item>
          </Menu.ItemGroup>
        ) : ""
      )}
    </Menu>
  );
};

const TopNavContent = (props) => {
  const { topNavColor, localization } = props;
  return (
    <Menu mode="horizontal" style={{ backgroundColor: topNavColor }}>
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <SubMenu
            key={menu.key}
            popupClassName="top-nav-menu"
            title={
              <span>
                {menu.icon ? <Icon type={menu?.icon} /> : null}
                <span>{setLocale(localization, menu.title)}</span>
              </span>
            }
          >
            {menu.submenu.map((subMenuFirst) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  key={subMenuFirst.key}
                  icon={
                    subMenuFirst.icon ? (
                      <Icon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  title={setLocale(localization, subMenuFirst.title)}
                >
                  {subMenuFirst.submenu.map((subMenuSecond) => (
                    <Menu.Item key={subMenuSecond.key}>
                      <span>
                        {setLocale(localization, subMenuSecond.title)}
                      </span>
                      <Link to={subMenuSecond.path} />
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={subMenuFirst.key}>
                  {subMenuFirst.icon ? (
                    <Icon type={subMenuFirst?.icon} />
                  ) : null}
                  <span>{setLocale(localization, subMenuFirst.title)}</span>
                  <Link to={subMenuFirst.path} />
                </Menu.Item>
              )
            )}
          </SubMenu>
        ) : (
          <Menu.Item key={menu.key}>
            {menu.icon ? <Icon type={menu?.icon} /> : null}
            <span>{setLocale(localization, menu?.title)}</span>
            {menu.path ? <Link to={menu.path} /> : null}
          </Menu.Item>
        )
      )}
    </Menu>

  );
};

const MenuContent = (props) => {
  return props.type === NAV_TYPE_SIDE ? (
    <SideNavContent {...props} />
  ) : (
    <TopNavContent {...props} />
  );
};

const mapStateToProps = ({ theme }) => {
  const { sideNavTheme, topNavColor } = theme;
  return { sideNavTheme, topNavColor };
};

export default connect(mapStateToProps, { onMobileNavToggle,signOut })(MenuContent);
