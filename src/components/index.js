import Col from 'vant/lib/col'
import 'vant/lib/col/index.css'
import Row from 'vant/lib/row'
import 'vant/lib/row/index.css'
import { Layout, Header, Aside, Content, Footer } from './layout'
import FootNav from './foot-nav'
import Avatar from './avatar'
import BoxSkin from './box-skin'
import Button from './button'
import Columns from './columns'
import Launch from './launch'
import Search from './search'
import Magazine from './magazine'
import { SvgSearch, SvgButton, SvgMore, SvgStar, SvgThumbs } from './svg-icon'

const components = {
    Layout,
    Header,
    Aside,
    Content,
    FootNav,
    Footer,
    CRow: Row,
    CCol: Col,
    SvgSearch,
    SvgButton,
    SvgMore,
    SvgStar,
    SvgThumbs,
    Avatar,
    BoxSkin,
    Button,
    Columns,
    Launch,
    Search,
    Magazine
}

const install = app => {
    Object.keys(components).forEach(key => {
        if (key === 'CRow' || key === 'CCol') {
            app.component(key, components[key])
        } else {
            app.component(components[key].name, components[key])
        }
    })
}

const mgjUI = {
    install
}

export default mgjUI
