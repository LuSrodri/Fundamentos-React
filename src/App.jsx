import React from "react";

import First from './components/basic/first'
import WithParementers from './components/basic/withParementers';
import Fragments from './components/basic/fragments';
import RandomNumber from './components/basic/randomNumber'
import Card from './components/layouts/card'
import Family from "./components/basic/family";
import Family1 from "./components/basic/family1";
import MemberFamily from "./components/basic/memberFamily";
import StudentList from "./components/loop/studentList";
import ProductList from "./components/loop/productList";
import EvenOrOdd from "./components/conditional/evenOrOdd";
import WelcomeUser from "./components/conditional/welcomeUser";
import DirectParent from "./components/communication/directParent";
import IndirectParent from "./components/communication/indirectParent";
import Input from "./components/form/input";
import Count from "./components/count/count";
import Lottery from "./components/lottery/lottery";

export default () =>
    <div id="app">
        <h1>Fundamentos React </h1>
        <div id="content">

            <Card title="#13 Lottery - Challenge" color="#AFDBE4">
                <Lottery></Lottery>
            </Card>

            <Card title="#12 Count - Class Component" color="#A7E2B2">
                <Count startNumber={10} startJump={-2}></Count>
            </Card>

            <Card title="#11 Controlled Component - Form" color="#301017">
                <Input ></Input>
            </Card>

            <Card title="#10 Indirect Communication" color="#D37C7A">
                <IndirectParent ></IndirectParent>
            </Card>

            <Card title="#09 Direct Communication" color="#14293B">
                <DirectParent ></DirectParent>
            </Card>

            <Card title="#08 Conditional Render" color="#CB627D">
                <WelcomeUser user='People'></WelcomeUser>
            </Card>

            <Card title="#08 Conditional Render" color="#F0D6D1">
                <EvenOrOdd number={20}></EvenOrOdd>
            </Card>

            <Card title="#07 challenge - components with children" color="#B2E5C9">
                <ProductList></ProductList>
            </Card>

            <Card title="#06 components with children" color="#7445C1">
                <StudentList></StudentList>
            </Card>

            <Card title="#05.1 components with children" color="#FF7F50">
                <Family1 lastName="Santos">
                    <MemberFamily name="Pedro"></MemberFamily>
                    <MemberFamily name="Ricardo"></MemberFamily>
                    <MemberFamily name="Cleide"></MemberFamily>
                </Family1>
            </Card>

            <Card title="#05 components with children" color="#52C5BB">
                <Family lastName="Santos"></Family>
            </Card>

            <Card title="#04 challenge - Random Number" color="#FF7F50">
                <RandomNumber min={1} max={100}></RandomNumber>
            </Card>

            <Card title="#03 Fragments">
                <Fragments></Fragments>
            </Card>

            <Card title="#02 With params" color="#CCCCFF">
                <WithParementers titulo="Segundo componentes"
                    subtitulo="Muito Bom"></WithParementers>
            </Card>

            <Card title="#01 First">
                <First></First>
            </Card>
        </div>
    </div>

