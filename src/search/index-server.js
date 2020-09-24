// import React from 'react'
// import ReactDOM from 'react-dom'
// import './search.css'
// import './search.less'
// import Fengjing from '../image/fengjing.jpg'
// import {
//     common
// } from '../../common/index.js'


const React = require('react')
const fengjing = require('../image/fengjing.jpg')
// const common = require('../../common/index.js')
require('./search.css')
require('./search.less')


class HelloWord extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            Test: null
        }
    }

    handleOnClick() {
        console.log(111)
        import('./test.js').then((Test) => {
            this.setState({
                Test: Test.default
            })
        })
    }

    render() {
        const { Test } = this.state
        return <div>
            <span className='search-css'>红光</span>
            {Test ? <Test /> : null}
            <span className='search-less'>帅哥超级帅气大帅哥好么shiwo</span>
            <img src={fengjing} onClick={
                this.handleOnClick.bind(this)
            } />
            {/* {common()} */}
        </div>
    }
}

// ReactDOM.render(<HelloWord />, document.getElementById('root'))
module.exports = <HelloWord />