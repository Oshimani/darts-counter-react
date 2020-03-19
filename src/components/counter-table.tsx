import React from 'react'
import { Counter } from './counter'
import { DefaultButton, Text } from 'office-ui-fabric-react'

export const CounterTable = () => {
    return (
        <div>
            <Text variant="xxLarge">Counter Table</Text>
            <Counter value="Bull"></Counter>
            <Counter value={20}></Counter>
            <Counter value={19}></Counter>
            <Counter value={18}></Counter>
            <Counter value={17}></Counter>
            <Counter value={16}></Counter>
            <Counter value={15}></Counter>
            <Counter value={14}></Counter>
            <Counter value={13}></Counter>
            <Counter value={12}></Counter>
            <Counter value={11}></Counter>
            <Counter value={10}></Counter>
            <Counter value={9}></Counter>
            <Counter value={8}></Counter>
            <Counter value={7}></Counter>
            <Counter value={6}></Counter>
            <Counter value={5}></Counter>
            <Counter value={4}></Counter>
            <Counter value={3}></Counter>
            <Counter value={2}></Counter>
            <Counter value={1}></Counter>
            <div style={{ margin: 2 }}>
                <DefaultButton style={{ width: '75%', float: "right" }}>Miss</DefaultButton>
            </div>
        </div>
    )
}
