import React from "react";

import First from './components/basic/first'
import WithParementers from './components/basic/withParementers';
import Fragments from './components/basic/fragments';
import RandomNumber from './components/basic/randomNumber'
import Card from './components/layouts/card'
import Family from "./components/basic/family";
import Family1 from "./components/basic/family1";
import MemberFamily from "./components/basic/memberFamily";

export default () =>
    <div id="app">
        <h1>Fundamentos React </h1>
        <div id="content">

            <Card title="#05.1 components with children" color="#FF7F50">
                <Family1 lastName="Santos">
                    <MemberFamily name="Pedro"></MemberFamily>
                    <MemberFamily name="Ricardo"></MemberFamily>
                    <MemberFamily name="Cleide"></MemberFamily>
                </Family1>
            </Card>

            <Card title="#05 components with children" color="#FF7F50">
                <Family lastName="Santos"></Family>
            </Card>

            <Card title="#04 Números Aleatórios" color="#FF7F50">
                <RandomNumber min={1} max={100}></RandomNumber>
            </Card>

            <Card title="#03 Fragments">
                <Fragments></Fragments>
            </Card>

            <Card title="#02 Com parâmetros" color="#CCCCFF">
                <WithParementers titulo="Segundo componentes"
                    subtitulo="Muito bão"></WithParementers>
            </Card>

            <Card title="#01 Primeiro">
                <First></First>
            </Card>
        </div>
    </div>

