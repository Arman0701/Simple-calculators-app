import style from "./Calculator.module.css";
import Screen from "../Screen";
import Button from "../Button";
import calc from "../../helpers/calc";
import { useState } from "react";

const textBtn = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', '.', '0', '=', '*'];

export default function Calculator({ active, id }) {
    
    const [, setState] = useState();
    const [screenValue, setScreenValue] = useState("");
    
    const setActiveElement = () => {
        active(id);
    }
    const clickOn = (e) => {
        setScreenValue((prev) => prev.concat(e.target.innerText));
    };
    const add = () => {
        equal();
        setState(calc(+screenValue, "+"));
        setScreenValue((prev) => prev + " + ");
    };
    const sub = () => {
        equal();
        setState(calc(+screenValue, "-"));
        setScreenValue((prev) => prev + " - ");
    };
    const dev = () => {
        equal();
        setState(calc(+screenValue, "/"));
        setScreenValue((prev) => prev + " / ");
    };
    const mult = () => {
        equal();
        setState(calc(+screenValue, "*"));
        setScreenValue((prev) => prev + " * ");
    };
    
    const equal = () => {
        let res = screenValue.length >= 5 ? screenValue.split(' ') : screenValue;
        switch(res[1]){
            case '+':
                setScreenValue(+res[0] + +res[2]);
                setState(screenValue.toString());
                break;
            case '-':
                setScreenValue(+res[0] - +res[2]);
                setState(screenValue.toString());
                break;
            case '*':
                setScreenValue(+res[0] * +res[2]);
                setState(screenValue.toString());
                break;
            case '/':
                setScreenValue(+res[0] / +res[2]);
                setState(screenValue.toString());
                break;
        }
    }

    return (
        <div onClick={setActiveElement} className={style.calculator}>
            <Screen innerText={screenValue} />
            <div className={style.buttons}>
                {
                    textBtn.map(item => {
                        switch(item){
                            case '+':
                                return <Button key={Math.random()} innerText={item} onclick={add} />
                            case '-':
                                return <Button key={Math.random()} innerText={item} onclick={sub} />
                            case '*':
                                return <Button key={Math.random()} innerText={item} onclick={mult} />
                            case '/':
                                return <Button key={Math.random()} innerText={item} onclick={dev} />
                            case '=':
                                return <Button key={Math.random()} innerText={item} onclick={equal} />
                            default:
                                return <Button key={Math.random()} innerText={item} onclick={clickOn} />
                        }
                    })
                }
            </div>
        </div>
    );
}
