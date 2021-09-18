import Col from 'vant/lib/col'
import 'vant/lib/col/index.css'
import Row from 'vant/lib/row'
import 'vant/lib/row/index.css'
import { Layout, Header, Aside, Content, Footer } from './layout'
import FootNav from './foot-nav'
import BoxSkin from './box-skin'
import BoxCenter from './box-center'
import Columns from './columns'
import Launch from './launch'

const components = {
    Layout,
    Header,
    Aside,
    Content,
    Footer,
    CRow: Row,
    CCol: Col,
    FootNav,
    BoxSkin,
    BoxCenter,
    Columns,
    Launch
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
