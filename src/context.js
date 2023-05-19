import React, { createContext, useContext, useReducer } from "react";

const initItems = [
    {
        id: 1,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/40ecdf28-85fc-4d3a-b831-6e21bb4aee0c.jpg?03bba6c',
        title: '[냉장] 맛있는우유 GT 슈퍼밀크 900mL 상세보기',
        price: '2980원',
        act: true,
        brand1: true
    },
    {
        id: 2,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/8ab07b7b-97ec-4663-9aa0-b26a0b4171b1.jpg?03bba6c',
        title: '[냉장] 맛있는우유 GT 소화 잘되는 배 안아픈 우유 900mL',
        price: '2000원',
        act: true,
        brand1: true
    },
    {
        id: 3,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/9b0fa8f2-05c0-4f3b-9e9f-7171b27805d2.jpg?03bba6c',
        title: '[냉장] 맛있는우유 GT 깔끔한 저지방 2.3L 상세보기',
        price: '3000원',
        act: false,
        brand2: true
    },
    {
        id: 4,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/470ee65b-4c87-45a3-85dd-9bcee652585a.jpg?03bba6c',
        title: '[냉장]떠먹는 불가리스 복숭아04',
        price: '4000원',
        act: false,
        brand2: true
    },
    {
        id: 5,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 6,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 7,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/e9520296-80fd-4e13-96f0-f957df5ee254.jpg?03bba6c',
        title: '[냉장] 또떠불 하트초코 125g',
        price: '1400원',
        act: false
    },
    {
        id: 8,
        src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/847242a9-329b-4b5c-869d-b3a51d294a2f.jpg?03bba6c',
        title: '[냉장] 또떠불 눈꽃초코 & 그래놀라 125g',
        price: '4000원',
        act: false
    }
]

function itemReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        default:
            throw new Error(`${action.type}이 잘못 전달됨`)
    };
}


const ItemStateContext = createContext();

export function ItemProvider({ children }) {
    const [state, dispatch] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={dispatch}>
            <ItemStateContext.Provider value={state}>
                {children}
            </ItemStateContext.Provider>
        </ItemStateContext.Provider>
    )
}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('temStateContext를 찾을 수 없음')
    }
    return context;
}