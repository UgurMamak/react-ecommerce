import React, {Component} from 'react';


import CounterFuncComp from "./CounterFuncComp";

import CounterClassComp from "./CounterClassComp";
import CounterClassComp2 from './CounterClassComp2';


class Index extends Component {
    render() {
        return (
            <div>
                <CounterFuncComp/>

                <CounterClassComp/>


                <CounterClassComp2/>
            </div>
        );
    }
}

export default Index;